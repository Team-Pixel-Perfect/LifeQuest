import React from "react";
import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.jpeg";
import image3 from "../assets/images/3.jpeg";
import image4 from "../assets/images/4.jpeg";
import image5 from "../assets/images/5.jpeg";
import image6 from "../assets/images/6.jpeg";

function About() {
  return (
    <section className="about-section w-full h-screen text-white">
      <div className="container mx-auto px-4 pt-40 flex flex-col items-center">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What LifeQuest Does?
          </h2>
        </div>
        <div className="w-4/5 flex flex-wrap items-center ">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-center ">
              <h3 className="text-2xl mb-5">Habit Tracking</h3>
              <img className="w-[300px] rounded-lg" src={image1} alt="" />
              <p className="text-gray-400 w-3/4 py-4">
                Monitor habits with customizable categories like reducing
                plastic use, conserving energy, and practising mindfulness.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-center ">
              <h3 className="text-2xl mb-5">Personalised Dashboard</h3>
              <img className="w-[300px] rounded-lg" src={image2} alt="" />
              <p className="text-gray-400 w-3/4 py-4">
                View progress statistics and insights tailored to your goals,
                helping you stay on track and motivated.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-center ">
              <h3 className="text-2xl mb-5">Goal-Setting</h3>
              <img className="w-[300px] rounded-lg" src={image3} alt="" />
              <p className="text-gray-400 w-3/4 py-4">
                Establish incremental targets to achieve your habit objectives
                and foster sustainable change.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-center ">
              <h3 className="text-2xl mb-5">Reminders & Notifications</h3>
              <img className="w-[300px] rounded-lg" src={image4} alt="" />
              <p className="text-gray-400 w-3/4 py-4">
                Receive timely reminders to help build and maintain consistent
                habits effortlessly.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-center ">
              <h3 className="text-2xl mb-5">Journaling</h3>
              <img className="w-[300px] rounded-lg" src={image5} alt="" />
              <p className="text-gray-400 w-3/4 py-4">
                Reflect on your journey and track progress with a built-in
                journaling tool for deeper insights.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-center ">
              <h3 className="text-2xl mb-5">Gamification</h3>
              <img className="w-[300px] rounded-lg" src={image6} alt="" />
              <p className="text-gray-400 w-3/4 py-4">
                Earn points, achieve badges, and compete on leaderboards to make
                habit tracking engaging and fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
