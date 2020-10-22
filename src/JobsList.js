import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";
import JoblyApi from "./JoblyApi";
import { useHistory } from "react-router-dom";
import Paginate from "./Paginate";


function JobsList({ userData }) {
  // state for an array of jobs 
  const [listOfJobs, setListOfJobs] = useState([]);
  const [message, setMessage] = useState("");
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState({});
  const [totalRecords, setTotalRecords] = useState();
  

  // // searchJobs method to get a filtered list of jobs
  // async function searchJobs(data) {
  //   const jobsFound = await JoblyApi.getJobs(data);
  //   setListOfJobs(jobsFound);
  // }

  //applyJob makes a post to apply to a job, sets a message returned from api.
  async function applyJob(jobId) {
    const messageRes = await JoblyApi.applyToJob(jobId);
    setMessage(messageRes);
  }

  const handlePageChange = async (pageNumber, search) => {
    setCurrentPage(pageNumber);
    if (!search) search = searchTerm;
    const jobsFound = await JoblyApi.getJobs({
      ...search,
      page: pageNumber,
    });
    setListOfJobs(jobsFound);
    const totalRecords = await JoblyApi.getJobsCount({...search});
    setTotalRecords(totalRecords);
  };

  // use effect, use upon mount
  useEffect(function handleFetchJobs() {
    // make an axios request to get all jobs
    async function fetchJobs() {
      try {
        const jobs = await JoblyApi.getJobs({});
        setListOfJobs(jobs);
        const totalRecords = await JoblyApi.getJobsCount();
          setTotalRecords(totalRecords);
      } catch (err) {
        return history.push("/login");
      }
    }
    fetchJobs();
  }, [history]);

  return (
    <div>
      <h1>Job listings</h1>
      {message !== "" ? <p style={{ color: "green" }}>{message}</p> : null}
      <SearchForm setSearchTerm={setSearchTerm} handlePageChange={handlePageChange}/>
      {listOfJobs.map((job) => {
        return <JobCard key={job.id} job={job} applyJob={applyJob} />
      })}
      <Paginate
        currentPage={currentPage}
        totalRecords={totalRecords}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default JobsList;