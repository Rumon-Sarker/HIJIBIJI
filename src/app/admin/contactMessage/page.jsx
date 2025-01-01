
import Image from "next/image";
import React from "react";
import ContactTable from "../../../components/ContactTable";
import HomeTable from "../../../components/HomeTable";
import FooterTable from "../../../components/FooterTable";
import { PrismaClient } from "@prisma/client";
import Admin from "../Admin";

const ContactMessage = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.contact.findMany({});
  const data2 = await prisma.homeContact.findMany({});
  const data3 = await prisma.footerContact.findMany({});
  
  return (
   <Admin>
     <div>
      <ContactTable data={data} />
      <HomeTable homeData={data2}/>
      <FooterTable footerData={data3}/>
    </div>
   </Admin>
  );
};

export default ContactMessage;
