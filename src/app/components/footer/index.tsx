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
const Footer = () => {
  const FooterTitle = ({ title }: { title: string }) => {
    return <h1 className="text-xl font-bold leading-6">{title}</h1>;
  };

  return (
    <div className="bg-black pt-14 text-white pb-5">
      <Container>
        {/* 1 */}
        <div className="grid grid-cols-3 border-b-[1px] border-white pb-6 ">
          <div>
            <div className="flex flex-col gap-6">
              <FooterTitle title="BE THE FIRST TO KNOW" />
              <h4 className="text-base font-normal leading-5">
                Sign up for updates from mettā muse.
              </h4>
            </div>
            <div className="flex gap-3 items-center mt-8 w-[594px]">
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className="bg-white h-12 w-[384px] max-w-full px-2"
              />
              <button
                className="h-12 w-[184px] border-[1px] border-white rounded-[5px] opacity-40"
                disabled
              >
                Subscribe
              </button>
            </div>
          </div>
          <div></div>
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-col gap-5">
              <FooterTitle title="CONTACT US" />
              <div className=" flex flex-col gap-5">
                <span className="text-base text-white font-normal font-simplon">
                  +44 221 133 5360
                </span>
                <span className="text-base text-white font-normal font-simplon">
                  customercare@mettamuse.com
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
        {/* 2 */}
        <div className="grid grid-cols-3 mt-16 ">
          <div className="flex flex-col gap-4">
            <FooterTitle title="mettā muse" />
            <div className="flex gap-3 flex-col">
              <Link href="#" className="text-white text-lg font-normal">
                About Us
              </Link>
              <Link href="#" className="text-white text-lg font-normal">
                Stories
              </Link>
              <Link href="#" className="text-white text-lg font-normal">
                Artisans
              </Link>
              <Link href="#" className="text-white text-lg font-normal">
                Boutiques
              </Link>
              <Link href="#" className="text-white text-lg font-normal">
                Contact Us
              </Link>
              <Link href="#" className="text-white text-lg font-normal">
                EU Compliances Docs
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <FooterTitle title="QUICK LINKS" />
            <div className="flex gap-3 flex-col">
              <Link href="#" className="text-white text-lg font-normal">
                Orders & Shipping
              </Link>
              <Link href="#" className="text-white text-lg font-normal">
                Join/Login as a Seller
              </Link>
              <Link href="#" className="text-white text-lg font-normal">
                Payment & Pricing
              </Link>
              <Link href="#" className="text-white text-lg font-normal">
                Return & Refunds
              </Link>
              <Link href="#" className="text-white text-lg font-normal">
                FAQs
              </Link>
              <Link href="#" className="text-white text-lg font-normal">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white text-lg font-normal">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <FooterTitle title="FOLLOW US" />
            <div className="flex gap-3">
              <Image src={Insta} alt="insta" width={35} height={35}/>
              <Image src={Linkdin} alt="linkdin" width={35} height={35}/>
            </div>
          </div>
          <div className="flex flex-col gap-5">
          <FooterTitle title="mettā muse ACCEPTS" />
          <div className="flex gap-2">
            <Image src={Gpay} alt="gpay" width={56} height={36}/>
            <Image src={Master} alt="master" width={56} height={36}/>
            <Image src={Paypal} alt="paypal" width={56} height={36}/>
            <Image src={Amex} alt="amex" width={56} height={36}/>
            <Image src={ApplePay} alt="apple" width={56} height={36}/>
            <Image src={Opay} alt="opay" width={56} height={36}/>
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
