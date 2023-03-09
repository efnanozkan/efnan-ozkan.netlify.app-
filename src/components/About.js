import React from "react";
import profile from ".././assets/profile.jpg"

export default function About() {
  return (
    <section className=" bg-hover-color text-white px-5 py-32" id="about">
    <div className="container mx-auto px-10 grid md:grid-cols-2 items-center justify-center md:justify-between">
      <div className="about-info text-lg">
        <h2 className="text-5xl font-monospace text-white mb-5 pb-2">
          About Me
        </h2>

        <p className="pb-5" >
        Hello there! My name is Efnan, and I'm a fourth-year student studying Management Information Systems (MIS) at Ankara Yıldırım Beyazıt University.
        </p>
        <p className="pb-5">
        Since my high school days, I've had a passion for design and drawing, and over the years, I've transformed this hobby into a freelancing career. In 2018, I specialized in graphic design as a freelancer, which has allowed me to work on some really exciting projects.

        </p>

        <p>While I still love working on design projects, I've recently set my sights on the world of web development. I've been learning Front-end technologies like HTML, CSS, and JavaScript and working on building websites and web applications from scratch. It's been challenging, but incredibly rewarding!</p>
        <br/>
        <p>
        Looking to the future, my goal is to continue building my skills in software and informatics. I'm excited to see where this journey takes me, and I'm always eager to learn and grow as a developer. Thanks for stopping by my website!
        </p>
      </div>

      <div className="w-1/2 h-1/2 mx-auto">
      <img className=" rounded-full"  src={profile} alt="me"/>
      </div>
    </div>
  </section>
  )
}
