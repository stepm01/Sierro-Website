// import Link from 'next/link'
import Image from 'next/image'
import { useCallback } from 'react'
import { useState } from 'react'
import Logo from '../../../public/images/Logo.svg'

function Header() {
  const [nav, setNav] = useState(false)
  const handleNav = useCallback(() => {
    setNav(!nav)
  }, [nav])
  return (
    <>
      <header className="overflow-hidden bg-[#EEEEEE] fixed w-[100%] top-0 left-0 z-100000">
        <div className="h-[88px] mx-auto max-w-[323px] py-[8px] flex justify-between items-center md:max-w-[704px] md:py-[12px] lg:max-w-[960px] lg:py-[8px] xl:max-w-[1128px] 2xl:max-w-[1472px]">
          <Image src={Logo} />
          <ul className="hidden md:flex ">
            <li className="pr-[32px] hover:text-[#008594] cursor-pointer text-[16px] font-[800]">
              Blog
            </li>
            <li className="pr-[32px] hover:text-[#008594] cursor-pointer text-[16px] font-[800]">
              Contact us
            </li>
            <li className="hover:text-[#008594] cursor-pointer text-[16px] font-[800]">
              Sign in
            </li>
          </ul>
          <div className="cursor-pointer block md:hidden" onClick={handleNav}>
            {!nav ? (
              <>
                <div className="bg-[#131313] w-[24px] h-[4px]"></div>
                <div className="bg-[#131313] w-[24px] h-[4px] translate-y-[8px] translate-x-[8px]"></div>
              </>
            ) : (
              <>
                <div className="bg-[#131313] w-[24px] h-[4px] rotate-45"></div>
                <div className="bg-[#131313] w-[24px] h-[4px] translate-y-[-4px] rotate-[-45deg]"></div>
              </>
            )}
          </div>
        </div>
        <div
          className={
            !nav
              ? 'fixed top-[-30%] w-[100%] text-center ease-in-out duration-700'
              : 'fixed top-[88px] w-[100%] text-center bg-[#EEEEEE] ease-in-out duration-700'
          }
        >
          <ul className="text-black font-medium z-0">
            <li className="py-[16px] bg-[#008594] text-white cursor-pointer">
              Blog
            </li>
            <li className="py-[16px] cursor-pointer">Contact us</li>
            <li className="py-[16px] cursor-pointer">Sign in</li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
