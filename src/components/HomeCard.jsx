import React from "react"
import student from "../assets/student1.svg"
import Button from "./Button"

const HomeCard = ({ title, content, buttonText }) => {
  return (
    <div className="w-full max-w-[360px] flex flex-col shadow-xl">
      {/* image */}
      <div className="w-full h-[200px] overflow-hidden bg-slate-300">
        <img src={student} alt="student studing" className="w-full h-auto object-cover" />
      </div>
      {/* content */}
      <div className="flex-1 p-4 flex flex-col items-start gap-4">
        <h3 className={`font-bold text-xl text-darkBlue `}>Fast Track Courses</h3>
        <p className={`text-darkGrey`}>Empower your tech teams to produce key business outcomes by making upskilling and reskilling as easy as powering up their laptop. Tap into the power of curated learning paths to guide teams through the exact skills they need to progress from novice to guru across a variety of tech skills.</p>
        <Button name="Show Tutorials" />
      </div>
    </div>
  )
}

export default HomeCard
