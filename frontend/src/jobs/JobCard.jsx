import React from "react";
import './jobs.css'

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>
        {job.company} - {job.location}
      </p>
      <p>{job.description}</p>
      <button id="apply">Apply Now</button>
    </div>
  );
};

export default JobCard;