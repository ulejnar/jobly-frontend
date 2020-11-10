import React, { useContext } from "react";
import AppliedJobsContext from "./AppliedJobsContext";
import JoblyApi from "./JoblyApi";



function JobCard({ job}) {
  const { userJobs, applyForJob, unapplyForJob } = useContext(AppliedJobsContext);

  // foundJob lets us keep track if the job is Applied or not. 
  // try to find the current job in the array of
  // userJobs.
  
  let foundJob = userJobs.find((el) => el.id === job.id);
  let applicationActive = false;
  if (foundJob && foundJob.state === 'applied'){
    applicationActive=true;
  }
  
  

  // const handleApply = () => {
  //   // method from our JobsList.js that pings the JoblyApi to apply for job.
  //   applyJob(job.id);
  //   // method from our App.js that updates the userData's jobs array.
  //   applyForJob(job);
  // }
  async function handleApply() {
    // method from our JobsList.js that pings the JoblyApi to apply for job.
    await JoblyApi.applyToJob(job.id);
    // method from our App.js that updates the userData's jobs array.
    applyForJob(job);
  }
  async function handleRemove() {
    // method from our JobsList.js that pings the JoblyApi to unapply for job.
    await JoblyApi.unapplyToJob(job.id);
    // method from our App.js that updates the userData's jobs array.
    unapplyForJob(job);
  }

  // const handleRemove = () => {
  //   // method from our JobsList.js that pings the JoblyApi to unapply for job.
  //   unapplyJob(job.id);
  //   // method from our App.js that updates the userData's jobs array.
  //   unapplyForJob(job);
  // }

  return (
    <div className="card mb-5 p-3 w-50 bg-light">
      <h5 className="card-title">{job.title}</h5>
      <div className="card-body">
        <p className= "card-text">Salary: {job.salary}</p>
        <p className= "card-text">Equity: {job.equity}</p>
      {applicationActive === true ? <button className="btn btn-primary" disabled>Applied</button> : <button className="btn btn-primary" onClick={handleApply}>Apply</button>}
      {applicationActive===true ? <button className="btn btn-primary" style={{margin:"1rem"}} onClick={handleRemove}>Cancel application</button>:""}
      </div>
    </div>
  );
}

export default JobCard;