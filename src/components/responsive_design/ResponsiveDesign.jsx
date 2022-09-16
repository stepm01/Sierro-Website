import React, { useCallback, useState } from 'react'
import Image from 'next/image'


const ResponsiveDesign = () => {
  const [DesignData,setDesignData] = useState([
    {
      id : 1,
      title : "What are deployment and release?",
      description: "This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens."
    },
    {
      id : 2,
      title : "What is the environment?",
      description: "This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens."
    },
    {
      id : 3,
      title : "What are commit, push, pull request, merge?",
      description: "This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens."
    },
    {
      id : 4,
      title : "What is a merge conflict?",
      description: "This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens."
    },
    {
      id : 5,
      title : "What is the difference between fetch and pull?",
      description: "This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens."
    },
    {
      id: 6,
      title: "What is code review?",
      description: "This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens."
    },
    {
      id : 7,
      title : "What is Software Development Life Cycle (SDLC)?",
      description: "This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens."
    },
    {
      id : 8,
      title : "What is the difference between front-end and back-end?",
      description: "This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens."
    }

  ])
  const [isOpen,setIsOpen] = useState(false);
  const toggleDesign = useCallback((id)=> {
    if (isOpen === id){
      return setIsOpen(false);
    }
    setIsOpen(id)
  },[isOpen])
  return (
    <section className="px-[16px] mx-auto max-w-full md:px-[32px] lg:max-w-[634px] xl:max-w-[744px] xl:max-w-[974px]">
      <div>
          {
            DesignData.map((item) => {
              return (
                <div key={item.id} className="border-b-2 divide-[#BABABA] mb-[34px]" onClick={() => toggleDesign(item.id)}>
                  <div className="flex justify-between align-center cursor-pointer">
                    <p className="max-w-[245px] md:max-w-[100%] text-[16px] font-[600]">{item.title}</p>
                    <div>
                      <Image
                        src="/images/Toggle.svg"
                        width="17px"
                        height="10.5px"
                        className={isOpen !== item.id ? "cursor-pointer transition-all duration-500" : "rotate-180 ease-in-out duration-500 transition-all  "}
                      />
                    </div>
                  </div>
                    {
                      <p className={isOpen !== item.id ? "max-h-0 transition-all duration-700 ease-out overflow-hidden pt-[20px]" : "h-auto max-h-[1000px] overflow-hidden transition-all duration-700 ease-in pt-[20px]"}>{item.description}</p>
                    }
                </div>
                )
            })
          }
      </div>
    </section>
  )
}

export default ResponsiveDesign
