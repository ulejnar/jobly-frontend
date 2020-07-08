import React, { useEffect, useState } from "react";
import JoblyApi from './JoblyApi';
import { useParams } from 'react-router-dom';
import JobsList from "./JobsList";
import JobCard from "./JobCard";

function CompanyDetails() {
  const { handle } = useParams();
  const [companyData, setCompanyData] = useState({});

  // axios call to getCompany()
  useEffect(function handleGetCompany() {
    async function getCompany() {
      const company = await JoblyApi.getCompany(handle);
      setCompanyData(company);
    }
    getCompany();
  }, [handle]);

  return (
    <div>
      <h3>{companyData.name}</h3>
      <p>{companyData.description}</p>
      {companyData.jobs ? companyData.jobs.map(job => <JobCard key={job.id} job={job} />) : null}
    </div>
  )
}

export default CompanyDetails;