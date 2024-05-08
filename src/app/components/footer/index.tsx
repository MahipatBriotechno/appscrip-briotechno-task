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
import "./footer.css";
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
    <div className="footer-wrapper">
      <Container>
        {/* 1 */}
        <div className="footer-wrapper-inline">
          <div className="footer-content-wrapper">
            <div className="content-inline-box">
              <FooterTitle title="BE THE FIRST TO KNOW" />
              <h4 className="footer-content-title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. this is simply dummy text.
              </h4>
            </div>
            <div className="footer-input-wrp">
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className="footer-input"
              />
              <button className="footer-subscrib" disabled>
                Subscribe
              </button>
            </div>
          </div>
          <div></div>
          <div className="flex-gap-5">
            <div className=" flex-gap-5 footer-contact">
              <FooterTitle title="CONTACT US" />
              <div className="footer-mobile-no">
                <span className="footer-mobile-text font-simplon">
                  +44 221 133 5360
                </span>
                <span className="footer-email font-simplon">
                  <GoDotFill className="dot-fill" /> customercare@mettamuse.com
                </span>
              </div>
            </div>
            <div className="flex-gap-4">
              <FooterTitle title="CURRENCY" />
              <div className="flex-gap-2-center">
                <Image src={Curr} alt="" width={24} height={24} />
                <Image src={Star} alt="" width={6} height={6} />
                <span className="foter-usd">USD</span>
              </div>
            </div>
            <div className="footer-text-list">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </div>
          </div>
        </div>
        <div style={{ width: "100%", background: "white", height: 0.5 }}></div>

        {/* 2 - For Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:mt-16 ">
          <div className="flex-gap-4">
            <FooterTitle title="mettā muse" />
            <div className="flex-gap-3">
              {mettaMuse.map((db: any, index: any) => {
                return (
                  <Link key={index} href={db.link} className="flex-link-title">
                    {db.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex-gap-4">
            <FooterTitle title="QUICK LINKS" />
            <div className="flex-gap-3">
              {quickLinks.map((db: any, index: any) => {
                return (
                  <Link key={index} href={db.link} className="flex-link-title">
                    {db.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex-gap-16">
            <div className="flex-gap-4">
              <FooterTitle title="FOLLOW US" />
              <div className="flex-footer-3">
                <Image src={Insta} alt="insta" width={35} height={35} />
                <Image src={Linkdin} alt="linkdin" width={35} height={35} />
              </div>
            </div>
            <div className="flex-gap-5">
              <FooterTitle title="mettā muse ACCEPTS" />
              <div className="flex-wrap-gap-2">
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
        <div className="footer-mobile">
          <div className="flex-gap-4">
            <Accordion isFooter="true" title="mettā muse">
              {/* <FooterTitle title="mettā muse" /> */}
              <div className="flex-gap-3">
                {mettaMuse.map((db: any, index: any) => {
                  return (
                    <Link
                      key={index}
                      href={db.link}
                      className="flex-link-title"
                    >
                      {db.title}
                    </Link>
                  );
                })}
              </div>
            </Accordion>
          </div>
          <div className="flex-gap-4">
            <Accordion isFooter="true" title="QUICK LINKS">
              {/* <FooterTitle title="QUICK LINKS" /> */}
              <div className="flex-gap-3">
                {quickLinks.map((db: any, index: any) => {
                  return (
                    <Link
                      key={index}
                      href={db.link}
                      className="flex-link-title"
                    >
                      {db.title}
                    </Link>
                  );
                })}
              </div>
            </Accordion>
          </div>
          <div className="flex-colmn">
            <div className="flex-gap-4">
              <Accordion isFooter="true" title="FOLLOW US">
                {/* <FooterTitle title="FOLLOW US" /> */}
                <div className="flex-gap{">
                  <Image src={Insta} alt="insta" width={35} height={35} />
                  <Image src={Linkdin} alt="linkdin" width={35} height={35} />
                </div>
              </Accordion>
            </div>
            <div className="payment-footer">
              <FooterTitle title="mettā muse ACCEPTS" />
              <div className="flex-wrap-2">
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

        <div className="footer-copyright-text">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
