"use client";

import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [showAlert, setShowAlert] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("me@nachli.com");
    emailCopyedAlert();
  };
  const emailCopyedAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000); // Hide after 3 seconds
  };
  return (
    <div className="container">
      {showAlert && (
        <div className="email-copied-alert">
          <p>Email copied to clipboard!</p>
        </div>
      )}
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </nav>

      <section className="section hero">
        <h1 className="title">Hey, I am Nachliel Pokroy</h1>
        <h2 className="text">
          I am a Junior Frontend Developer with a year and a half of experience.
        </h2>
      </section>

      <section id="about" className="section">
        <h2 className="title">👤 About Me</h2>
        <div className="card about">
          <article className="hero-image">
            <Image
              src="/profile.jpg"
              alt="Nachliel Pokroy"
              width={150}
              height={150}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </article>
          <p className="text">
            I&apos;m a Frontend Developer using React, TypeScript, and JS. I am
            patient and thorough, wanting to contribute and influence. I am also
            responsible, with a high work ethic and good interpersonal skills.
          </p>
        </div>
      </section>

      <section id="experience" className="section">
        <h2 className="title">🖥️ Experience</h2>
        <div className="card">
          <h3 className="subtitle">
            Easyapps <span className="timeline">March 2022 - Present</span>
          </h3>
          <p className="text">
            Building and testing automations and React apps for monday.com
            marketplace, building and maintaining CRM&apos;s on Airtable.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="title">🤖 Projects</h2>
        <div className="card">
          <p className="text">
            <span className="subtitle">
              <a href="https://ci-events.org" target="_blank">
                CI Calendar
              </a>
            </span>{" "}
            - an interactive calendar for the Israeli Contact Improv community.
            A PWA built with React, TypeScript, NodeJS, Firebase Cloud
            Messaging, and PostgreSQL - Supabase.
          </p>
        </div>
      </section>

      <section id="education" className="section">
        <h2 className="title">🎓 Education</h2>
        <div className="card">
          <p className="text">
            <span className="subtitle">Frontend Developer Bootcamp</span> - 2024
            - Coding Academy
          </p>
          <p className="text">
            <span className="subtitle">Software Practical Engineer</span> - 2024
            - Ariel Technical College, graduated with honors.
          </p>
        </div>
      </section>

      <footer className="section footer">
        <div className="social-links">
          {[
            {
              href: "https://linkedin.com/in/nachliel",
              src: "/linkedin-100.svg",
              alt: "LinkedIn",
            },
            {
              href: "https://github.com/nachlielp",
              src: "/github-100.svg",
              alt: "GitHub",
            },
            {
              href: "/Resume_Nachliel_Pokroy.pdf",
              src: "/pdf-80.png",
              alt: "CV",
              download: true,
            },
          ].map(({ href, src, alt, download }) => (
            <a
              key={alt}
              href={href}
              target={download ? undefined : "_blank"}
              rel={download ? undefined : "noopener noreferrer"}
              className="social-link"
              {...(download && { download })}
            >
              <Image src={src} alt={alt} width={36} height={36} />
            </a>
          ))}
          <button onClick={copyEmail} className="copy-email-btn">
            <Image
              src="/email-square-icon.svg"
              alt="Email"
              width={36}
              height={36}
            />
          </button>
        </div>
      </footer>
    </div>
  );
}
