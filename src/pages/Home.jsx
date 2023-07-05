import React from "react"
import { Hero, HomeCard, TestimonialCard } from "../components"
import style from "../style"

const Home = () => {
  return (
    <section className={`w-full ${style.flexStart} ${style.paddingX}`}>
      <div className={`${style.boxWidth} `}>
        {/* hero section */}
        <Hero />

        {/* product section */}
        <div className="my-10 py-10 flex flex-col items-center gap-16  ">
          <h2 className="font-bold text-3xl text-gray-900 capitalize">Learn for Free</h2>
          <div className="w-full flex flex-wrap lg:flex-nowrap  md:flex-row md:justify-between md:items-center gap-6">
            <HomeCard title="" content="" buttonText="" />
            <HomeCard title="" content="" buttonText="" />
            <HomeCard title="" content="" buttonText="" />
          </div>
        </div>

        {/* testimonials */}
        <div className="my-10 py-10 flex flex-col items-center gap-16  ">
          <h2 className="font-bold text-3xl text-gray-900 capitalize">Testimonials</h2>
          <div className="w-full flex flex-wrap lg:flex-nowrap  md:flex-row md:justify-between md:items-center gap-6">
            <TestimonialCard review="" authorName="" autherDesignation="" />
            <TestimonialCard review="" authorName="" autherDesignation="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
