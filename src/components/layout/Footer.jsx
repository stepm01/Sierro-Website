import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return(
    <div className="w-full bg-[#008594] pl-[16px] pr-[9px] pt-[64px]">
        <div className="border-b-[0.3px]">
          <Image src="/images/FooterLogo.png"
                 height="28px"
                 width="130px"
          />
          <div className="text-white font-normal pt-[72px]">
            <h4 className="pb-[24px] font-semibold">Pages</h4>
            <p className="pb-[16px]">Home</p>
            <p className="pb-[16px]">Blog</p>
            <p className="pb-[16px]">Contact us</p>
            <p>Sign in</p>
          </div>

          <div className="text-white font-normal pt-[72px]">
            <h4 className="pb-[24px] font-semibold">Contacts</h4>
            <div className="pb-[16px] flex font-normal">
              <Image src="/images/First.svg"
                     height="20px"
                     width="16px"
              />
              <p className="pl-[10px]">Info@mamble.co</p>
            </div>
            <div className="pb-[16px] flex ">
              <Image src="/images/Second.svg"
                     height="20px"
                     width="16px"
              />
              <p className="pl-[10px]">+374 55 553 210</p>
            </div>
            <div className="pb-[16px] flex items-center">
              <Image src="/images/Third.svg"
                     height="20px"
                     width="16px"
              />
              <p className="pl-[10px]">
                1/2 Tsitsernakaberd Hwy,<br/>
                4th entrance, 2nd floor
              </p>
            </div>


            <div className="pt-[40px] pb-[48px] flex">
              <div className="border w-[32px] h-[32px] flex items-center justify-center rounded-2xl mr-[18px]">
                <Image src="/images/FacebookLogo.svg"
                       height="16px"
                       width="16px"
                       className="py-[8px] px-[12px]"
                />
              </div>
              <div className="border w-[32px] h-[32px] flex items-center justify-center rounded-2xl mr-[18px]">
                <Image src="/images/InstagramLogo.svg"
                       height="16px"
                       width="16px"
                />
              </div>
              <div className="border w-[32px] h-[32px] flex items-center justify-center rounded-2xl  ">
                <Image src="/images/LinkedInLogo.svg"
                       height="16px"
                       width="16px"
                />
              </div>
            </div>
          </div>
        </div>
      <div className="py-[24px]">
        <p className="text-white text-center">© 2021 Mamble. All rights reserved.</p>
      </div>

    </div>
    )
}

export default Footer
