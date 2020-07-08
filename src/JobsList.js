import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";
import JoblyAPI from "./JoblyApi";


function JobsList() {
  // state for an array of jobs 
  const [listOfJobs, setListOfJobs] = useState([]);

  // searchJobs method 
  async function searchJobs(data) {
    const jobsFound = await JoblyAPI.getJobs(data);
    setListOfJobs(jobsFound);
  }

  // use effect, use upon mount
  useEffect(function handleFetchJobs() {
    // make an axios request to get all jobs
    async function fetchJobs() {
      const jobs = await JoblyAPI.getJobs();
      setListOfJobs(jobs);
    }
    fetchJobs();
  },[]);

  return (
    <div>
      Jobs List
      <SearchForm search={searchJobs}/>
      {listOfJobs.map(job => <JobCard key={job.id} job={job} />)}
    </div>
  )
}

export default JobsList;