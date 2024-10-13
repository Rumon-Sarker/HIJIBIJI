// app/api/export/route.js
import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { PrismaClient } from "@prisma/client";

export async function GET(request) {
  const prisma = new PrismaClient();

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  async function fetchDataFromDatabaseById(id) {
    const ContactData = await prisma.contact.findMany({
      where: { id: parseInt(id) }, // Ensure id is an integer if necessary
    });

    const FooterContactData = await prisma.footerContact.findMany({
      where: { id: parseInt(id) },
    });
    const homeContactData = await prisma.homeContact.findMany({
      where: { id: parseInt(id) },
    });

    return { userData, orderData };
  }

  const workbook = new ExcelJS.Workbook();
  const contactWorksheet = workbook.addWorksheet("Contact Data");
  const footerContactWorksheet = workbook.addWorksheet("Footer Data");
  const homeContactWorksheet = workbook.addWorksheet("Home Data");

  // Define columns
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
    { header: "Contact", key: "contact", width: 30 },
    { header: "Email", key: "email", width: 30 },
    { header: "Message", key: "message", width: 30 },
  ];
  homeContactWorksheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Name", key: "name", width: 30 },
    { header: "Contact", key: "contact", width: 30 },
    { header: "Email", key: "email", width: 30 },
    { header: "Message", key: "message", width: 30 },
  ];

  // Add rows to the worksheet
  data.forEach((item) => {
    worksheet.addRow({
      id: item.id,
      name: item.name,
      contact: item.contact,
      email: item.email,
      message: item.message,
    });
  });

  // Create a buffer to hold the Excel file
  const buffer = await workbook.xlsx.writeBuffer();

  // Set response headers
  const headers = {
    "Content-Type":
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "Content-Disposition": 'attachment; filename="data.xlsx"',
  };

  // Return the Excel file as a response
  return new NextResponse(buffer, { headers });
}
