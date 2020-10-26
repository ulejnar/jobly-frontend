import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Paginate from "./Paginate";
import { useHistory } from "react-router-dom";


function MyJobsList({ userData }) {

  const [listOfJobs, setListOfJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  let pageRange =10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const start = (pageNumber-1)*pageRange;
    const jobsFound = userData.jobs.slice(start, start+pageRange);
    setListOfJobs(jobsFound);
  };

  useEffect(function handleFetchAppliedJobs() {
   function fetchAppliedJobs() {
      try {
        const jobs = userData.jobs.slice(0,pageRange);
        setListOfJobs(jobs);
      } catch (err) {
        return history.push("/login");
      }
    }
    fetchAppliedJobs();
  }, [history]);

  
  return (
    <div>
      <h1>Apllied jobs</h1>
      {listOfJobs.map((job) => {
        return <JobCard key={job.id} job={job}  />
      })}
       <Paginate
        currentPage={currentPage}
        totalRecords={userData.jobs.length}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default MyJobsList;