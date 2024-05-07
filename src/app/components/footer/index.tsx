import React from "react";
import { Container } from "../container";

const Footer = () => {
  const FooterTitle = ({ title }: { title: string }) => {
    return <h1 className="text-xl font-bold leading-6 mb-6">{title}</h1>;
  };

  return (
    <div className="bg-black pt-14 text-white">
      <Container>
        {/* 1 */}
        <div className="grid grid-cols-2 border-b-[1px] border-white pb-6">
          <div>
            <FooterTitle title="Be the first to know" />
            <h4 className="text-base font-normal leading-5">
              Sign up for updates from mettā muse.
            </h4>
            <div className="flex gap-3 items-center mt-8">
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className="bg-white h-12 w-[384px] max-w-full px-2"
              />
              <button className="h-12 w-[184px] border-[1px] border-white rounded-[5px]">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <FooterTitle title="CONTACT US" />
            <FooterTitle title="CURRENCY" />
          </div>
        </div>
        {/* 2 */}
        <div className="grid grid-cols-3">
          <div>
            <FooterTitle title="mettā muse" />
          </div>
          <div>
            <FooterTitle title="Quick Links" />
          </div>
          <div>
            <FooterTitle title="Follow Us" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
