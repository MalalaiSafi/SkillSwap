import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import JobSearchForm from "./JobSearchForm";
import JobCard from "./JobCard";
import Pagination from "./Pagination";

const JobSearchPage = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  const fetchJobs = () => {
    setJobs([
      {
        id: 1,
        title: "Software Engineer",
        company: "ios",
        location: "Herat",
        description: "Job description goes here...",
      },
      {
        id: 2,
        title: "Digital Marketing Specialist",
        company: "Samsung",
        location: "Kabul",
        description: "Job description goes here...",
      },
      {
        id: 3,
        title: "Financial Analyst",
        company: "Infinix",
        location: "Kabul",
        description: "Job description goes here...",
      },
    ]);
    setTotalPages(5);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <JobSearchForm />
        <div className="job-listings">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default JobSearchPage;