import React from "react";
import { Container } from "../container";
import Curr from "@/app/assets/products/curr.png";
import Star from "@/app/assets/products/star.png";
import Insta from "@/app/assets/products/INSTA.png";
import Linkdin from "@/app/assets/products/LINKDIN.png";
import Gpay from "@/app/assets/products/gpay.png";
import Master from "@/app/assets/products/masterCardpng.png";
import Paypal from "@/app/assets/products/paypal.png";
import Amex from "@/app/assets/products/amex.png";
import ApplePay from "@/app/assets/products/apple.png";
import Opay from "@/app/assets/products/Opay.png";
import Image from "next/image";
import Link from "next/link";
import Accordion from "../Accordion";

import { GoDotFill } from "react-icons/go";



const Footer = () => {
  const FooterTitle = ({ title }: { title: string }) => {
    return <h1 className="text-xl font-bold leading-6">{title}</h1>;
  };

  const mettaMuse = [
    { title: "About Us", link: "" },
    { title: "Stories", link: "" },
    { title: "Artisans", link: "" },
    { title: "Boutiques", link: "" },
    { title: "Contact Us", link: "" },
    { title: "EU Compliances Docs", link: "" },
  ];
  const quickLinks = [
    { title: "Orders & Shipping", link: "" },
    { title: "Join/Login as a Seller", link: "" },
    { title: "Payment & Pricing", link: "" },
    { title: "Return & Refunds", link: "" },
    { title: "FAQs", link: "" },
    { title: "Privacy Policy", link: "" },
    { title: "Terms & Conditions", link: "" },
  ];

  return (
    <div className="bg-black pt-14 text-white pb-5">
      <Container>
        {/* 1 */}
        <div className="grid lg:grid-cols-3 lg:border-b-[1px] border-white pb-4 lg:pb-6 ">
          <div className="border-b-[1px] border-white lg:border-none pb-6 lg:pb-0 mb-6 lg:mb-0">
            <div className="flex flex-col gap-6">
              <FooterTitle title="BE THE FIRST TO KNOW" />
              <h4 className="text-base font-normal leading-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. this is simply dummy text.
              </h4>
            </div>
            <div className="flex gap-3 items-center mt-8 lg:w-[594px]">
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className="bg-white h-12 w-[240px] lg:w-[384px] max-w-full px-2 text-black"
              />
              <button
                className="h-12 w-[100px] lg:w-[184px] border-[1px] border-white rounded-[5px] opacity-40"
                disabled
              >
                Subscribe
              </button>
            </div>
          </div>
          <div></div>
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-col gap-5 border-b-[1px] border-white lg:border-none pb-6 lg:p-0">
              <FooterTitle title="CONTACT US" />
              <div className=" flex flex-wrap lg:flex-col gap-3  lg:gap-5">
                <span className="text-base text-white font-normal font-simplon">
                  +44 221 133 5360
                </span>
                <span className="text-base text-white font-normal font-simplon flex gap-2 items-center">
                 <GoDotFill className="lg:hidden" /> customercare@mettamuse.com
                </span>
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <FooterTitle title="CURRENCY" />
              <div className="flex gap-2 items-center">
                <Image src={Curr} alt="" width={24} height={24} />
                <Image src={Star} alt="" width={6} height={6} />
                <span className="text-base font-bold">USD</span>
              </div>
            </div>
            <div className="text-sm font-normal">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </div>
          </div>
        </div>

        {/* 2 - For Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:mt-16 ">
          <div className="flex flex-col gap-4">
            <FooterTitle title="mettā muse" />
            <div className="flex gap-3 flex-col">
              {mettaMuse.map((db: any,index:any) => {
                return (
                  <Link
                    href={db.link}
                    key={index}
                    className="text-white text-lg font-normal"
                  >
                    {db.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <FooterTitle title="QUICK LINKS" />
            <div className="flex gap-3 flex-col">
              {quickLinks.map((db: any,index:any) => {
                return (
                  <Link
                    href={db.link}
                    key={index}
                    className="text-white text-lg font-normal"
                  >
                    {db.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <FooterTitle title="FOLLOW US" />
              <div className="flex gap-3">
                <Image src={Insta} alt="insta" width={35} height={35} />
                <Image src={Linkdin} alt="linkdin" width={35} height={35} />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <FooterTitle title="mettā muse ACCEPTS" />
              <div className="flex flex-wrap gap-2">
                <Image src={Gpay} alt="gpay" width={56} height={36} />
                <Image src={Master} alt="master" width={56} height={36} />
                <Image src={Paypal} alt="paypal" width={56} height={36} />
                <Image src={Amex} alt="amex" width={56} height={36} />
                <Image src={ApplePay} alt="apple" width={56} height={36} />
                <Image src={Opay} alt="opay" width={56} height={36} />
              </div>
            </div>
          </div>
        </div>

        {/* 2 - For Mobile */}
        <div className="grid lg:hidden  lg:mt-16 ">
          <div className="flex flex-col gap-4">
            <Accordion title="mettā muse">
              {/* <FooterTitle title="mettā muse" /> */}
              <div className="flex gap-3 flex-col">
                {mettaMuse.map((db: any,index:any) => {
                  return (
                    <Link
                      href={db.link}
                      key={index}
                      className="text-white text-lg font-normal"
                    >
                      {db.title}
                    </Link>
                  );
                })}
              </div>
            </Accordion>
          </div>
          <div className="flex flex-col gap-4">
            <Accordion title="QUICK LINKS">
              {/* <FooterTitle title="QUICK LINKS" /> */}
              <div className="flex gap-3 flex-col">
                {quickLinks.map((db: any,index:any) => {
                  return (
                    <Link
                      href={db.link}
                      key={index}
                      className="text-white text-lg font-normal"
                    >
                      {db.title}
                    </Link>
                  );
                })}
              </div>
            </Accordion>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-4">
            <Accordion title="FOLLOW US">
              {/* <FooterTitle title="FOLLOW US" /> */}
              <div className="flex gap-3">
                <Image src={Insta} alt="insta" width={35} height={35} />
                <Image src={Linkdin} alt="linkdin" width={35} height={35} />
              </div>
              </Accordion>
            </div>
            <div className="flex flex-col gap-5 border-t-[1px] pt-8">
              <FooterTitle title="mettā muse ACCEPTS" />
              <div className="flex flex-wrap gap-2">
                <Image src={Gpay} alt="gpay" width={56} height={36} />
                <Image src={Master} alt="master" width={56} height={36} />
                <Image src={Paypal} alt="paypal" width={56} height={36} />
                <Image src={Amex} alt="amex" width={56} height={36} />
                <Image src={ApplePay} alt="apple" width={56} height={36} />
                <Image src={Opay} alt="opay" width={56} height={36} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-sm font-normal text-center mt-7 mb-2">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
