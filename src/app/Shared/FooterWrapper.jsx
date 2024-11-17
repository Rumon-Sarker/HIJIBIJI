import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { getServerSession } from "next-auth";

const FooterWrapper = async () => {
  const session = await getServerSession();
  return (
    <div>
      <Footer session={session} />
    </div>
  );
};

export default FooterWrapper;
