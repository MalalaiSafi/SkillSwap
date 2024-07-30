import React, { useState } from "react";
import Footer from "../footer/Footer.jsx";
import "./Search.css"; // Import your CSS file

const skillsData = [
  { name: "JavaScript", info: "A versatile programming language primarily used for web development." },
  { name: "Python", info: "A high-level programming language known for its readability and versatility." },
  { name: "React", info: "A JavaScript library for building user interfaces, maintained by Facebook." },
  { name: "Node.js", info: "A JavaScript runtime built on Chrome's V8 JavaScript engine, used for server-side development." },
  { name: "CSS", info: "A style sheet language used for describing the presentation of a document written in HTML." },
  { name: "HTML", info: "The standard markup language for creating web pages." },
  { name: "Drawing", info: "The act of making marks on a surface to create images." },
  { name: "Cooking", info: "The practice of preparing food by combining ingredients." },
  { name: "Pino", info: "A popular card game in various cultures." },
  { name: "C++", info: "A high-level programming language that supports object-oriented programming." },
  { name: "Java", info: "A widely-used programming language designed for portability across platforms." },
  { name: "Ruby", info: "A dynamic, open-source programming language with a focus on simplicity and productivity." },
  { name: "Swift", info: "A powerful programming language for iOS and macOS app development." },
  { name: "Kotlin", info: "A modern programming language that runs on the Java Virtual Machine." },
  { name: "PHP", info: "A popular general-purpose scripting language especially suited to web development." },
  { name: "Go", info: "An open-source programming language designed for simplicity and efficiency." },
  { name: "Rust", info: "A systems programming language focused on safety and performance." },
  { name: "Dart", info: "An optimized language for building mobile, desktop, server, and web applications." },
  { name: "TypeScript", info: "A superset of JavaScript that adds static types." },
  { name: "SQL", info: "A domain-specific language used in programming and managing relational databases." },
  { name: "R", info: "A programming language and free software environment for statistical computing." },
  { name: "MATLAB", info: "A high-performance language for technical computing." },
  { name: "Shell Scripting", info: "Writing scripts to automate tasks in Unix/Linux environments." },
  { name: "Machine Learning", info: "The study of computer algorithms that improve automatically through experience." },
  { name: "Data Analysis", info: "The process of inspecting, cleansing, transforming, and modeling data." },
  { name: "Web Development", info: "The work involved in developing a website for the Internet." },
  { name: "Game Development", info: "The process of creating video games." },
  { name: "UI/UX Design", info: "The process of enhancing user satisfaction by improving usability and accessibility." },
  { name: "Digital Marketing", info: "The promotion of products or brands via electronic media." },
  { name: "SEO", info: "The practice of optimizing web pages to rank higher in search engine results." },
  { name: "Content Writing", info: "Creating written content for websites and other media." },
  { name: "Photography", info: "The art or practice of taking and processing photographs." },
  { name: "Video Editing", info: "The process of manipulating and rearranging video footage." },
  { name: "Graphic Design", info: "The art of combining text and pictures in advertisements, magazines, or books." },
  { name: "3D Modeling", info: "The process of developing a mathematical representation of any three-dimensional surface." },
  { name: "Animation", info: "The process of creating motion and shape change illusions in visual media." },
  { name: "Public Speaking", info: "The act of performing a speech to a live audience." },
  { name: "Project Management", info: "The application of knowledge, skills, tools, and techniques to project activities." },
  { name: "Negotiation Skills", info: "The ability to reach agreements through discussion and compromise." },
  { name: "Time Management", info: "The process of planning and exercising conscious control over time spent on activities." },
  { name: "Teamwork", info: "The collaborative effort of a group to achieve a common goal." },
  { name: "Leadership Skills", info: "The ability to lead, motivate, and guide individuals or teams." },
  { name: "Critical Thinking", info: "The objective analysis and evaluation of an issue to form a judgment." },
  { name: "Problem Solving", info: "The process of finding solutions to difficult or complex issues." },
  { name: "Networking", info: "Building relationships with people who can help you professionally or personally." },
  { name: "Financial Literacy", info: "The ability to understand and effectively use various financial skills." },
  { name: "Emotional Intelligence", info: "The ability to understand and manage your own emotions and those of others." },
  { name: "Sales Skills", info: "Skills related to selling products or services effectively." },
];
const Search = () => {
  const [query, setQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null); 

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setSelectedSkill(null); 
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill); 
  };

  const filteredSkills = skillsData.filter((skill) =>
    skill.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <h1 className="h">Search About <br /> Skills</h1>
        <input
          type="text"
          placeholder="Search for a skill..."
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />

        {query && (
          <ul className="skills-list">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
                <li key={index} className="skill-item" onClick={() => handleSkillClick(skill)}>
                  {skill.name}
                </li>
              ))
            ) : (
              <li className="no-results">No skills found.</li>
            )}
          </ul>
        )}

        {selectedSkill && (
          <div className="skill-info">
            <h2>{selectedSkill.name}</h2>
            <p>{selectedSkill.info}</p>
          </div>
        )}
      </div>
      <div className="headline headline-list footer4setting">
        <Footer />
      </div>
    </>
  );
};

export default Search;