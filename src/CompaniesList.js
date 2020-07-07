import React, { useEffect, useState } from "react";
import JoblyApi from "./JoblyApi";
import CompanyCard from './CompanyCard';

function CompaniesList() {
  const [listOfCompanies, setListOfCompanies] = useState([]);

  useEffect(function handleFetchCompanies() {
    async function fetchCompanies () {
      const companies = await JoblyApi.getCompanies();
      console.log(companies);
      setListOfCompanies(companies);
    }
    fetchCompanies();
  }, []);


  return (
    <div>
      CompaniesList
      <ul>
      {listOfCompanies.map( company => <CompanyCard company={company} /> )}
      </ul>
    </div>
  )
}

export default CompaniesList;