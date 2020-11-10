import React, { useState, useContext, useEffect } from "react";
import JobCard from "./JobCard";
import Paginate from "./Paginate";
import AppliedJobsContext from "./AppliedJobsContext";



function MyJobsList({}) {

 // const [listOfJobs, setListOfJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { userJobs} = useContext(AppliedJobsContext);
  console.log("userJobs fromJobsContext", userJobs)
  let pageRange =10;
  const start = (currentPage-1)*pageRange;
  const appliedJobsLength = userJobs.filter(job => job.state==='applied').length;
  const appliedJobs = userJobs.filter(job => job.state==='applied').slice(start, start+pageRange);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  return (
    <div>
      <h1>Applied jobs</h1>
      {appliedJobs.map((job) => {
        return <JobCard key={job.id} job={job}  />
      })}
       <Paginate
        currentPage={currentPage}
        totalRecords={appliedJobsLength}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default MyJobsList;