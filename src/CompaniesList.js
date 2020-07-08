import React, { useEffect, useState } from "react";
import JoblyApi from "./JoblyApi";
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

function CompaniesList() {
  const [listOfCompanies, setListOfCompanies] = useState([]);

  async function searchCompanies(data) {
    const companiesFound = await JoblyApi.getCompanies(data);
    setListOfCompanies(companiesFound);
  }

  useEffect(function handleFetchCompanies() {
    async function fetchCompanies () {
      const companies = await JoblyApi.getCompanies();
      setListOfCompanies(companies);
    }
    fetchCompanies();
  }, []);


  return (
    <div>
      CompaniesList
      <SearchForm search={searchCompanies}/>
      <ul>
      {listOfCompanies.map( company => <CompanyCard key={company.handle} company={company} /> )}
      </ul>
    </div>
  )
}

export default CompaniesList;