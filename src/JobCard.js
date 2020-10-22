import React, { useContext } from "react";
import AppliedJobsContext from "./AppliedJobsContext";



function JobCard({ job, applyJob }) {
  const { userJobs, applyForJob } = useContext(AppliedJobsContext);

  // foundJob lets us keep track if the job is Applied or not. 
  // try to find the current job in the array of
  // userJobs.
  
  let foundJob = userJobs.find((el) => el.id === job.id);
  

  const handleApply = () => {
    // method from our JobsList.js that pings the JoblyApi to apply for job.
    applyJob(job.id);
    // method from our App.js that updates the userData's jobs array.
    applyForJob(job);
  }

  return (
    <div className="card mb-5 p-3 w-50 bg-light">
      <h5 className="card-title">{job.title}</h5>
      <div className="card-body">
        <p className= "card-text">Salary: {job.salary}</p>
        <p className= "card-text">Equity: {job.equity}</p>
      {foundJob !== undefined ? <button className="btn btn-primary" disabled>Applied</button> : <button className="btn btn-primary" onClick={handleApply}>Apply</button>}
      </div>
    </div>
  );
}

export default JobCard;