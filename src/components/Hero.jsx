import student from "../assets/student3.svg"
import Button from "./Button"

const Hero = () => {
  return (
    <section className="w-full my-10 md:px-10 flex flex-col lg:flex-row lg:justify-between ">
      {/* information */}
      <div className="flex-1 flex flex-col items-start justify-center bg-red-0">
        <h2 className="mt-24 lg:mt-20 text-3xl font-medium capitalize">
          A scoop on learning resources for <br /> your coding journey.
        </h2>
        <h3 className="mt-4 text- xl">
          Learn with <span className="text-primary font-medium">Tutorials</span> | <span className="text-primary font-medium">Exercises</span> | <span className="text-primary font-medium">Quizzes</span>
        </h3>
        <Button name="Get Started" />
      </div>
      {/* image */}
      <div className="lg:flex-1 flex justify-end lg:justify-center items-center">
        <img src={student} alt="student studing" className="w-full md:w-[80%]" />
      </div>
    </section>
  )
}

export default Hero
