import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="section mx-auto h-[70vh] flex flex-col justify-between items-start">
      <div className="flex w-full gap-40 justify-center lg:justify-start items-start py-[100px] flex-col md:flex-row lg:pl-[130px] p-4">
        <div className="flex flex-col gap-12">
          <h1 className=" font-bold text-2xl ">AnswerFlow</h1>
          <div className="flex flex-col gap-6 text-[#707070]">
            <Link
              href={
                "/https://answerflowaicom.notion.site/FAQs-9c125909a454495bb5d7dec80fcc366f?pvs=4"
              }
              target="_blank"
            >
              FAQs
            </Link>
            <Link href={"/https://www.answerflowai.com/blog"} target="_blank">
              Blog
            </Link>
            <Link href={"/team@answerflowai.com"} target="_blank">
              Write to us
            </Link>
            <Link
              href={
                "/https://answerflowaicom.notion.site/Refund-Policy-ec52b04f74304d4b830d8c74751168e8?pvs=4"
              }
              target="_blank"
            >
              Refund Policy
            </Link>
            <Link
              href={
                "/https://answerflowaicom.notion.site/Terms-Conditions-ce7a1200aae944a990d72d401417fe0d?pvs=4"
              }
              target="_blank"
            >
              Terms & Conditions
            </Link>
            <Link
              href={
                "/https://answerflowaicom.notion.site/Privacy-Policy-c839d84b2af64262a7c13c5160404502?pvs=4"
              }
              target="_blank"
            >
              Privacy Policy
            </Link>
            <Link
              href={
                "/https://answerflowaicom.notion.site/Security-Compliance-70fb950bcdb44384b04840d790de2755?pvs=4"
              }
              target="_blank"
            >
              Security & Compliance
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-12  ">
          <h1 className="font-bold text-2xl">Resources</h1>
          <div className="flex flex-col gap-6 text-[#707070]">
            <Link href={"/"}>ChatGPT Bots for Sales Reports</Link>
            <Link href={"/"}>ChatGPT Bots for Customer Success</Link>
            <Link href={"/"}>ChatGPT Bots for Revenue Reports</Link>
            <Link href={"/"}>ChatGPT Bot for Company Wiki</Link>
            <Link href={"/"}>ChatGPT Bot for Business</Link>
            <Link href={"/"}>ChatGPT Bot for Enterprises</Link>
            <Link href={"/"}>Custom ChatGPT Bots</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full pb-10">
        <Image src={"/text.png"} alt="text image" width={1200} height={120} />
      </div>
    </footer>
  );
}

export default Footer;
