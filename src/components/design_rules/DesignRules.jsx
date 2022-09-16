import { useRef, useState } from 'react'
  const DesignRules = () => {
  const sliderRef = useRef(null)
  const [SliderData,setSliderData] = useState([
    {
      id: 1,
      title: 'Design rules',
      text: ["Small.","Do one thing, have no side effects.","Use descriptive names.","Prefer fewer arguments.",
        "Don't use flag arguments. Split method into several independent methods that can be called from the client without the flag."]
    },
    {
      id: 2,
      title: 'Understandability tips',
      text: ["Keep configurable data at high levels.", "Prefer polymorphism to if/else or switch/case.", "Prevent over-configurability.", "Use dependency injection.", "Follow the Law of Demeter. A class should know only its direct dependencies."]
    },
    {
      id: 3,
      title: 'Functions rules',
      text: ["Keep configurable data at high levels.","Prefer polymorphism to if/else or switch/case.","Prevent over-configurability.","Use dependency injection.","Follow the Law of Demeter. A class should know only its direct dependencies."]
    },
    {
      id: 4,
      title: 'Code smells',
      text: ["Keep configurable data at high levels.","Prefer polymorphism to if/else or switch/case.","Prevent over-configurability.","Use dependency injection.","Follow the Law of Demeter. A class should know only its direct dependencies."]
    },
  ])
  const [active,setActive] = useState(0)
    const handleScroll = (index) => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft = index * sliderRef.current.childNodes[0].getBoundingClientRect().width + (index * 24)
        setActive(index)
      }
      console.log(window.outerWidth)
    }

  return (
    <>
      <section className="flex flex-col items-center pb-[132px] mt-[4.5rem] md:px-[32px]">
        <div ref={sliderRef}
          className="max-w-[21.4375rem] max-h-[36.25rem]  md:min-w-[704px] md:h-[474px] lg:min-w-[798px] xl:min-w-[936px] 2xl:min-w-[1222px] rounded-2xl overflow-x-hidden flex scroll-smooth">
          {
            SliderData.map((item,index)=> {
              return (
                <div key={item.id} className="min-w-[21.4375rem] h-[36.25rem]  md:min-w-[704px] md:min-h-[474px] lg:min-w-[798px] xl:min-w-[936px] 2xl:min-w-[1222px] bg-[#008594] rounded-2xl transition duration-500 ease-in-out mr-[1.75rem]">
                  <div className="px-[24px] pt-[24px]">
                    <h2 className="text-[3rem] leading-[4.5rem] font-[500] text-white">{item.title}</h2>
                    <ul className="mt-[1.5rem] font-normal text-white list-disc list-inside font-[300]">
                      {item.text.map((el) => {
                        return <li>{el}</li>
                      })}
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="w-full flex justify-center mt-[2rem]">
          {SliderData.map((el, index) => {
            return <div  onClick={() => handleScroll(index)} className={`cursor-pointer w-[1rem] h-[1rem] ${index === active ? `bg-[#008594]` : `bg-[#C4C4C4]`}  ${index !== SliderData.length - 1 ? `mr-[1rem] ` : ``}  rounded-full`}></div>
          })}
        </div>
      </section>
    </>
  )
}


export default DesignRules
