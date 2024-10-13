// app/api/export/route.js
import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const idParam = searchParams.get("id");
  const id = parseInt(idParam, 10);

  if (isNaN(id)) {
    return NextResponse.json(
      { error: "Invalid id parameter" },
      { status: 400 }
    );
  }

  try {
    const [contactData, footerContactData, homeContactData] = await Promise.all(
      [
        prisma.contact.findUnique({ where: { id } }),
        prisma.footerContact.findUnique({ where: { id } }),
        prisma.homeContact.findUnique({ where: { id } }),
      ]
    );

    console.log("contactData:", contactData);
    console.log("footerContactData:", footerContactData);
    console.log("homeContactData:", homeContactData);

    if (!contactData && !footerContactData && !homeContactData) {
      return NextResponse.json(
        { error: "No data found for the provided id" },
        { status: 404 }
      );
    }

    const workbook = new ExcelJS.Workbook();
    const contactWorksheet = workbook.addWorksheet("Contact Data");
    const footerContactWorksheet = workbook.addWorksheet("Footer Data");
    const homeContactWorksheet = workbook.addWorksheet("Home Data");

    contactWorksheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Name", key: "name", width: 30 },
      { header: "Contact", key: "contact", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Message", key: "message", width: 30 },
    ];

    footerContactWorksheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Name", key: "name", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Message", key: "message", width: 30 },
    ];

    homeContactWorksheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Name", key: "name", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Country", key: "country", width: 30 },
      { header: "Interested", key: "interested", width: 30 },
    ];

    if (contactData) {
      contactWorksheet.addRow({
        id: contactData.id,
        name: `${contactData.firstname} ${contactData.lastname}`,
        contact: contactData.contact,
        email: contactData.email,
        message: contactData.message,
      });
    }

    if (footerContactData) {
      footerContactWorksheet.addRow({
        id: footerContactData.id,
        name: `${footerContactData.firstname} ${footerContactData.lastname}`,
        email: footerContactData.email,
        message: footerContactData.message,
      });
    }

    if (homeContactData) {
      homeContactWorksheet.addRow({
        id: homeContactData.id,
        name: `${homeContactData.firstname} ${homeContactData.lastname}`,
        email: homeContactData.email,
        country: homeContactData.country,
        interested: homeContactData.interested,
      });
    }

    const buffer = await workbook.xlsx.writeBuffer();

    const headers = {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": 'attachment; filename="data.xlsx"',
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
