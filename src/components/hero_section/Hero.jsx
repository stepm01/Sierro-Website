import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="max-w-[343px] mt-[72px] mx-auto md:max-w-[524px] md:mt-[77px] md:py-[12px] lg:flex lg:mt-[156px] lg:max-w-[960px] lg:py-[8px] xl:max-w-[1128px] 2xl:max-w-[1472px] pb-[72px] lg:pb-[156px]">
        <div className="pt-[88px] text-center lg:text-left lg:mt-[57px] 2xl:mt-[157px]">
          <h1 className="mb-[36px] lg:mb-[24px]">Hero section</h1>
          <div className="block mb-[48px] lg:hidden">
            <Image src={'/images/HeroImg.png'}
                   width="724px"
                   height="565px"/>
          </div>
          <p className="pb-[64px] font-normal lg:pb-[56px]">
            “You are not done when it works, you are done when it’s right.” Keep
            this in mind now and forever.
          </p>
          <button className="text-[16px] px-[24px] py-[12px] bg-[#008594] text-white rounded-[83px]">
            Agree
          </button>
        </div>
        <div className="hidden lg:pt-[88px] lg:pl-[16px] lg:block xl:pl-[24px] ">
          <Image
            src={'/images/HeroImg.png'}
                 width="724px"
                 height="565px"
            />
        </div>
      </section>
    </>
  )
}

export default Hero
