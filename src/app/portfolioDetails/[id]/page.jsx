import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import img from "./../../../../public/Link (1).png";
import PortfolioDataFilter from "../../../components/PortfolioDataFilter";

const page = async ({ params }) => {
  const { id } = params;
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateWithDayName = now.toLocaleDateString("en-US", options);
  const demoData = [
    {
      id: "1",
      clientName: "Client A",
      projectName: "Project Alpha",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "A comprehensive project for developing a new web platform for Client A. Includes UI/UX design, backend development, and deployment.",
      category: "webDevelopment",
    },
    {
      id: "2",
      clientName: "Client B",
      projectName: "Project Beta",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "An extensive e-commerce platform for Client B. Features include a shopping cart, user authentication, and payment integration.",
      category: "webDevelopment",
    },
    {
      id: "3",
      clientName: "Client C",
      projectName: "Project Gamma",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "A mobile app for Client C aimed at improving customer engagement through personalized notifications and in-app purchases.",
      category: "mobileDevelopment",
    },
    {
      id: "4",
      clientName: "Client D",
      projectName: "Project Delta",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "A cloud-based CRM system for Client D designed to streamline customer management, sales tracking, and reporting.",
      category: "software",
    },
    {
      id: "5",
      clientName: "Client E",
      projectName: "Project Epsilon",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "A data visualization tool for Client E that allows users to generate custom reports and dashboards with interactive charts and graphs.",
      category: "software",
    },
    {
      id: "6",
      clientName: "Client F",
      projectName: "Project Zeta",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "An online education platform for Client F, featuring course management, video lectures, quizzes, and a discussion forum.",
      category: "software",
    },
    {
      id: "7",
      clientName: "Client G",
      projectName: "Project Eta",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "A travel booking system for Client G with integration for hotel reservations, flight bookings, and car rentals.",
      category: "webDevelopment",
    },
    {
      id: "8",
      clientName: "Client H",
      projectName: "Project Theta",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "A social networking app for Client H focused on community building, with features such as user profiles, posts, and messaging.",
      category: "mobileDevelopment",
    },
  ];

  const getFilteredItems = (data, category, excludedIds) => {
    return data.filter(
        (item) => item.category === category && !excludedIds.includes(item.id)).slice(0, 3);
  };

  const relatedItems = getFilteredItems(demoData, "webDevelopment", id);

  return (
    <div>
      <div>
        <div className="h-[200px] bg-main mx-10 flex justify-center items-center rounded-lg my-10">
          <h1 className="text-white text-center text-[50px] lg:text-[80px]">
            Project Name
          </h1>
        </div>
        <div className="lg:mx-20 mx-10">
          <h1 className="text-main text-3xl">PROJECT NAME</h1>

          <h1 className="text-text text-xl my-6">{dateWithDayName}</h1>
          <h1 className="text-text ">Share </h1>
          <div className="text-text flex gap-5 my-5">
            <Link href={"/"}>
              <FaTwitter />
            </Link>
            <Link href={"/"}>
              <FaSquareFacebook />
            </Link>
            <Link href={"/"}>
              <TiSocialLinkedin />
            </Link>
            <Link href={"/"}>
              <MdEmail />
            </Link>
            <Link href={"/"}>
              <FaLink />
            </Link>
          </div>
          <h1 className="border-b-2 border-text my-5"></h1>
        </div>
        <div className="lg:mx-20 mx-5 md:mx-12 flex flex-col justify-center items-center">
          <Image
            src={img}
            className="object-contain my-5"
            width={850}
            height={600}
            alt=""
          />
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor
            amet eaque quis tenetur repellendus non dignissimos eveniet sit
            porro odio, officia magnam, vero commodi voluptas minus consequatur
            excepturi sapiente similique nesciunt rem corporis. Quae ducimus,
            obcaecati ratione quasi sint deserunt laboriosam aliquid iusto saepe
            optio voluptate mollitia ad delectus eligendi eaque aut, hic eos
            minus at? Corrupti ullam fugit sed, voluptates sunt culpa voluptas
            voluptatem totam dicta esse laboriosam id magnam quos perspiciatis
            itaque. Facere nesciunt id voluptates nulla asperiores vel sapiente,
            eos perferendis corporis blanditiis voluptate expedita amet
            repudiandae molestiae eaque? Explicabo magnam facere, ea ratione
            provident officiis commodi dolores praesentium fugit esse rerum enim
            ab laborum, maiores inventore eaque porro quis, iste quia cumque
            libero? Corrupti vitae cumque odio expedita provident ab quos vel
            ipsa voluptatem quasi, incidunt quia rerum corporis. Ea mollitia,
            quod porro commodi delectus, veritatis perspiciatis sequi, tempora a
            saepe dignissimos aliquam officiis illum? Cupiditate delectus
            debitis aliquid, dolor consequuntur aut perspiciatis veniam saepe
            sit earum praesentium, explicabo iste doloremque enim aliquam soluta
            obcaecati sed. Sed impedit dicta ad unde tenetur facilis velit
            minima assumenda cumque eum, ipsam dolorem facere nostrum sapiente
            repellat itaque! Animi ut adipisci, iusto possimus odit molestias
            excepturi et dolore?
          </h1>
        </div>
        <div className="lg:mx-20 md:mx-12 mx-5">
          <h1 className="text-main text-3xl my-5">SCOPE OF THE WORK</h1>
          <p className="text-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
            perferendis accusamus commodi quo nam officiis ratione labore
            distinctio eos nihil corporis laboriosam dignissimos assumenda
            expedita perspiciatis quod obcaecati adipisci maiores vitae
            voluptatum asperiores animi. Fugiat, saepe maxime! Rerum laudantium
            eveniet molestias ad, voluptas atque distinctio quod iure quisquam
            animi maiores sapiente aut doloribus odio repellat ullam earum illum
            quo id voluptatibus et iusto error a neque. Nam obcaecati itaque,
            minima cum incidunt numquam! Et culpa excepturi ratione impedit
            ducimus blanditiis vero, fugiat nostrum quos nobis quas consequatur
            temporibus officia aspernatur, magnam dolor earum recusandae sunt
            nulla velit deserunt sint voluptatibus.
          </p>
        </div>
        <div className="lg:mx-20 md:mx-10 mx-5 my-5">
          <h1 className="text-main text-3xl my-5">RELATED PROJECT</h1>
          <div>
            {/* load data by this id's category name  */}
            <PortfolioDataFilter cardData={relatedItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
