import React from "react";

function HeroSection() {
  return (
    <section className="hero-section w-full text-lime py-20 pt-40">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col items-center justify-center text-center w-full h-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            LifeQuest: Cultivate a Better You, <br/> Sustainably!
          </h1>
          <p className="text-lg px-6 mb-8 text-white sm:w-4/5 sm:px-56 md:text-xl ">
            Embark on a journey of personal growth and environmental
            responsibility. Track your habits, set goals, and make a positive
            impact on your life and the planet.
          </p>
          <div>
            <button
              href="#get-started"
              className="outline text-lime font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              Get Started
            </button>
            <button
              href="#learn-more"
              className="ml-4 bg-lime border-2 border-lime text-lightblack font-semibold py-2 px-6 rounded-full transition duration-300 hover:text-lightblack"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
