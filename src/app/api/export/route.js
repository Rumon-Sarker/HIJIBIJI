// app/api/export/route.js
import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { PrismaClient } from "@prisma/client";

export async function GET(request) {
  const prisma = new PrismaClient();
  const { searchParams } = new URL(request.url);
  const idParam = searchParams.get("id");
  const type = searchParams.get("type");
  const id = parseInt(idParam, 10);

  if (isNaN(id)) {
    return NextResponse.json(
      { error: "Invalid id parameter" },
      { status: 400 }
    );
  }

  if (!type || !["contact", "footerContact", "homeContact"].includes(type)) {
    return NextResponse.json(
      { error: "Invalid or missing type parameter" },
      { status: 400 }
    );
  }

  try {
    let data;
    let worksheetName;
    let columns;
    let row;

    // Fetch data based on the type
    switch (type) {
      case "contact":
        data = await prisma.contact.findUnique({ where: { id } });
        if (!data) {
          return NextResponse.json(
            { error: "No contact data found for the provided id" },
            { status: 404 }
          );
        }
        worksheetName = "Contact Data";
        columns = [
          { header: "ID", key: "id", width: 10 },
          { header: "Name", key: "name", width: 30 },
          { header: "Contact", key: "contact", width: 30 },
          { header: "Email", key: "email", width: 30 },
          { header: "Message", key: "message", width: 30 },
        ];
        row = {
          id: data.id,
          name: `${data.firstname} ${data.lastname}`,
          contact: data.contact,
          email: data.email,
          message: data.message,
        };
        break;

      case "footerContact":
        data = await prisma.footerContact.findUnique({ where: { id } });
        if (!data) {
          return NextResponse.json(
            { error: "No footer contact data found for the provided id" },
            { status: 404 }
          );
        }
        worksheetName = "Footer Data";
        columns = [
          { header: "ID", key: "id", width: 10 },
          { header: "Name", key: "name", width: 30 },
          { header: "Email", key: "email", width: 30 },
          { header: "Message", key: "message", width: 30 },
        ];
        row = {
          id: data.id,
          name: `${data.firstname} ${data.lastname}`,
          email: data.email,
          message: data.message,
        };
        break;

      case "homeContact":
        data = await prisma.homeContact.findUnique({ where: { id } });
        if (!data) {
          return NextResponse.json(
            { error: "No home contact data found for the provided id" },
            { status: 404 }
          );
        }
        worksheetName = "Home Data";
        columns = [
          { header: "ID", key: "id", width: 10 },
          { header: "Name", key: "name", width: 30 },
          { header: "Email", key: "email", width: 30 },
          { header: "Country", key: "country", width: 30 },
          { header: "Interested", key: "interested", width: 30 },
        ];
        row = {
          id: data.id,
          name: `${data.firstname} ${data.lastname}`,
          email: data.email,
          country: data.country,
          interested: data.interested,
        };
        break;

      default:
        return NextResponse.json(
          { error: "Invalid type parameter" },
          { status: 400 }
        );
    }

    // Create a new Excel workbook and add the relevant worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(worksheetName);
    worksheet.columns = columns;
    worksheet.addRow(row);

    // Generate the Excel file and send it as a response
    const buffer = await workbook.xlsx.writeBuffer();

    const headers = {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="${worksheetName}.xlsx"`,
    };

    return new NextResponse(buffer, { headers });
  } catch (error) {
    console.error("Error exporting data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
