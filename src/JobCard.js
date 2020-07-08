import React from "react";


function JobCard({ job }) {
  return (
    <div>
      <h5>{job.title}</h5>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  );
}

export default JobCard;