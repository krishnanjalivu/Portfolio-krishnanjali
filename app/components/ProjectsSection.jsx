"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sumrz-An URL Summarizer",
    description: "AI-powered website where you can simply input a URL, and it will automatically generate aconcise and informative summary of the webpage's content.",
    image: "/images/ai.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krishnanjalivu/sumrz",
    previewUrl: "https://resonant-macaron-e02013.netlify.app/",
  },
  {
    id: 2,
    title: "Finance App",
    description: " Finance Dashboard App with React.App features a prediction page and also includes charts, lists, and data grids to display key performance indicators and other financial data.",
    image: "/images/financeapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krishnanjalivu/Finance-App",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Travel Website",
    description: "A Feature-rich travel app with Next.js 13 and Tailwind CSS, featuring various camps to explore and travel guide section with modern UI/UX",
    image: "/images/travel.png",
    tag: ["All", "UI/UX"],
    gitUrl: "https://github.com/krishnanjalivu/Travel-Website",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Vibez",
    description: "A Three.js website where user can design their own Tshirt.",
    image: "/images/three.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krishnanjalivu/Vibez",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Nike Web App",
    description: "A Nike Web app featuring various shoes and discounts.",
    image: "/images/nike.png",
    tag: ["All", "UI/UX"],
    gitUrl: "https://github.com/krishnanjalivu/nikeapp",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Boatel",
    description: "Booking Hotels made esay",
    image: "/images/image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krishnanjalivu/boatel",
    previewUrl: "https://boatel.onrender.com/my-hotels",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;