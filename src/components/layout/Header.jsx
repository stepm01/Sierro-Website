import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useReducer } from 'react'
import { useState, useEffect} from 'react'
import { useRouter } from 'next/router'


function Header() {
  const [nav, setNav] = useState(false)
  const handleNav = useCallback(() => {
    setNav(!nav)
  }, [nav])

  const router = useRouter();
  console.log(router.asPath)

  useEffect(()=> {
   return () => {
     window.removeEventListener("scroll", () => setNav(false))
   }
 },[nav])

  return (
    <>
      <header className="overflow-hidden bg-[#EEEEEE] fixed w-[100%] top-0 left-0 z-[10000]">
        <div className="relative z-10 h-[88px] mx-auto max-w-[323px] py-[8px] flex justify-between items-center md:max-w-[704px] md:py-[12px] lg:max-w-[960px] lg:py-[8px] xl:max-w-[1128px] 2xl:max-w-[1472px]">
         <Link href="/">
           <a>
             <Image alt="Logo"
                    src='/images/Logo.svg'
                    width="72px"
                    height="72px"
                    className="cursor-pointer"
             />
           </a>
         </Link>
          <ul className="hidden md:flex z-10">
            <Link href="/contact-us"><li className="pr-[32px] hover:text-[#008594] cursor-pointer text-[16px] font-[500]">
              Blog
            </li></Link>
            <li className="pr-[32px] hover:text-[#008594] cursor-pointer text-[16px] font-[500]">
              Contact us
            </li>
            <li className="hover:text-[#008594] cursor-pointer text-[16px] font-[500]">
              Sign in
            </li>
          </ul>
          <div className={nav ? 'block md-hidden cursor-pointer':'block md:hidden'} onClick={handleNav}>
            <div className={!nav ? 'bg-[#131313] w-[24px] h-[4px] transition duration-500 ease-in-out '  : 'bg-[#131313] w-[24px] h-[4px]  rotate-45 transition duration-500 ease-in-out '}></div>
            <div className={!nav ? 'bg-[#131313] w-[24px] h-[4px] translate-y-[8px] translate-x-[8px] transition duration-500 ease-in-out '  : 'bg-[#131313] w-[24px] h-[4px] translate-y-[-4px] rotate-[-45deg] transition duration-500 ease-in-out '}></div>
          </div>
        </div>
      </header>
      <div
        className={
          !nav
            ? 'fixed top-[-30%] w-[100%] text-center ease-in-out duration-700'
            : 'fixed top-[88px] w-[100%] text-center bg-[#EEEEEE] ease-in-out duration-700 z-1'
        }
      >
        <ul className="text-black font-medium ">
          <Link href="/blog">
            <li className={`${router.asPath === "/blog" ? "py-[16px] bg-[#008594] text-white" : "py-[16px]"}`}>
              Blog
            </li>
          </Link>
          <Link href="/contact-us">
            <li className={`${router.asPath === "/contact-us" ? "py-[16px] bg-[#008594] text-white" : "py-[16px]"}`}>
              Contact us
            </li>
          </Link>
          <Link href="/SignIn">
            <li className={`${router.asPath === "/SignIn" ? "py-[16px] bg-[#008594] text-white" : "py-[16px]"}`}>
              Sign in
            </li>
          </Link>

        </ul>
      </div>
    </>
  )
}

export default Header
