import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="portfolio-container">
      <header className="header">
        {/* Example Profile Image */}
        <div className="profile-image">
          <Image
            src="/profile-pic.jpg" // Replace with your own image URL or local image
            alt="Talha Tauseef Profile"
            width={150}
            height={150}
            className="profile-pic"
          />
        </div>

        <h1 className="name">Talha Tauseef</h1>
        <p className="tagline">Full Stack Developer | Web Enthusiast</p>
      </header>
      
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Talha Tauseef, a passionate Full Stack Web Developer with experience in
          creating dynamic and responsive websites. I enjoy working with the latest technologies like
          React, Next.js, Node.js, and more. Let's build something amazing together!
        </p>
      </section>
      
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Project 1: Portfolio Website</h3>
            <p>A sleek portfolio to showcase my web development skills.</p>
          </div>
          <div className="project">
            <h3>Project 2: E-commerce App</h3>
            <p>A fully functional e-commerce app built with Next.js and Node.js.</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
          <li>REST APIs</li>
        </ul>
      </section>

      <footer className="contact">
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me via email at <a href="mailto:talhatauseef2006@gmail.com">talhatauseef2006@gmail.com</a> or connect with me on
          <a href="https://www.linkedin.com/in/talha-tauseef-278445277/"> LinkedIn</a>.
        </p>
      </footer>
    </div>
  );
}
  

