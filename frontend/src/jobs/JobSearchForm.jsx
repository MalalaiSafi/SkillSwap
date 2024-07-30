import React, { useState } from "react";

const JobSearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm, "in category:", category);
  };

  return (
    <div className="job-search-form">
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select a category</option>
        <option value="technology">Technology</option>
        <option value="marketing">Marketing</option>
        <option value="finance">Finance</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default JobSearchForm;