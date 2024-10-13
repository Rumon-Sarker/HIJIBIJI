import Image from "next/image";
import React from "react";
import ContactTable from "../../../components/ContactTable";
import { PrismaClient } from "@prisma/client";

const ContactMessage = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.contact.findMany({});
  
  return (
    <div>
      <ContactTable data={data} />
    </div>
  );
};

export default ContactMessage;
