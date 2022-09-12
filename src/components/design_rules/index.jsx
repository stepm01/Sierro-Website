import React from 'react'

const DesignRules = () => {
  const sliderData = [
    {
      id: 1,
      title: 'Design rules',
      text: {
        title1: 'Keep configurable data at high levels.',
        title2: 'Prefer polymorphism to if/else or switch/case.',
        title3: 'Prevent over-configurability.',
        title4: 'Use dependency injection.',
        title5:
          'Follow the Law of Demeter. A class should know only its direct dependencies.',
      },
    },
    {
      id: 2,
      title: 'Understandability tips',
      text: {
        title1: 'Keep configurable data at high levels.',
        title2: 'Prefer polymorphism to if/else or switch/case.',
        title3: 'Prevent over-configurability.',
        title4: 'Use dependency injection.',
        title5:
          'Follow the Law of Demeter. A class should know only its direct dependencies.',
      },
    },
    {
      id: 3,
      title: 'Functions rules',
      text: {
        title1: 'Keep configurable data at high levels.',
        title2: 'Prefer polymorphism to if/else or switch/case.',
        title3: 'Prevent over-configurability.',
        title4: 'Use dependency injection.',
        title5:
          'Follow the Law of Demeter. A class should know only its direct dependencies.',
      },
    },
    {
      id: 4,
      title: 'Code smells',
      text: {
        title1: 'Keep configurable data at high levels.',
        title2: 'Prefer polymorphism to if/else or switch/case.',
        title3: 'Prevent over-configurability.',
        title4: 'Use dependency injection.',
        title5:
          'Follow the Law of Demeter. A class should know only its direct dependencies.',
      },
    },
  ]
  return (
    <>
      <section className="overflow-hidden">
        <div className="px-[16px] justify-center w-[100%] h-[580px] text-white ">
          {sliderData.map((item) => {
            return (
              <div
                className="bg-[#008594] w-[100%] h-[100%] object-cover rounded-[16px] "
                key={item.id}
              >
                <div>{item.title}</div>
                <div></div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default DesignRules
