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
      console.log(companies);
      setListOfCompanies(companies);
    }
    fetchCompanies();
  }, []);


  return (
    <div>
      CompaniesList
      <SearchForm searchCompanies ={searchCompanies}/>
      <ul>
      {listOfCompanies.map( company => <CompanyCard company={company} /> )}
      </ul>
    </div>
  )
}

export default CompaniesList;