import React, { useState } from "react";
import Footer from "../footer/Footer.jsx";
import "./Search.css"; // Import your CSS file

const skillsData = [
  "JavaScript, A programing language",
  "Python",
  "React",
  "Node.js",
  "CSS",
  "HTML",
  "Java",
  "C++",
  "Ruby",
  "Go",
  "Swift",
  "PHP",
  "TypeScript",
  "Cooking",
  "Sewing",
  "Language",
  "painting",
  "Drawing",
  "Hiking",
  "Gardening",
  "Graphics Design",
  "Video Editing",
  "Baking",
  "Makeup",
  "Fasion ",

];

const Search = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredSkills = skillsData.filter((skill) =>
    skill.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <h1>Search About <br />
         Skills</h1>
        <input
          type="text"
          placeholder="Search for a skill..."
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
        <ul className="skills-list">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill}
              </li>
            ))
          ) : (
            <li className="no-results">No skills found.</li>
          )}
        </ul>
      </div>
      <div className="headline headline-list footer4setting">
        <Footer />
      </div>
    </>
  );
};

export default Search;
