import React, { useEffect, useState } from "react";
import JoblyApi from './JoblyApi';
import { useParams } from 'react-router-dom';

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
    </div>
  )
}

export default CompanyDetails;