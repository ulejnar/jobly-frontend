import React, { useContext } from "react";
import AppliedJobsContext from "./AppliedJobsContext";



function JobCard({ job, applyJob }) {
  const { userJobs, applyForJob } = useContext(AppliedJobsContext);
  // foundJob lets us keep track if the job is Applied or not. 
  let foundJob = undefined;

  // If userJobs is defined, then try to find the current job in the array of
  // userJobs.
  if (userJobs) {
    foundJob = userJobs.find((el) => el.id === job.id);
  }

  const handleApply = () => {
    // method from our JobsList.js that pings the JoblyApi to apply for job.
    applyJob(job.id);
    // method from our App.js that updates the userData's jobs array.
    applyForJob(job);
  }

  return (
    <div>
      <h5>{job.title}</h5>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
      {foundJob !== undefined ? <button disabled>Applied</button> : <button onClick={handleApply}>Apply</button>}
    </div>
  );
}

export default JobCard;