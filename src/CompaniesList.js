import React, { useEffect, useState } from "react";
import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import { useHistory } from "react-router-dom";
import Paginate from "./Paginate";

function CompaniesList({ isLoggedIn }) {
  const [listOfCompanies, setListOfCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState({});
  const [totalRecords, setTotalRecords] = useState();
  
  const history = useHistory();

  const handlePageChange = async (pageNumber, search) => {
    setCurrentPage(pageNumber);
    if (!search) search = searchTerm;
    const companiesFound = await JoblyApi.getCompanies({
      ...search,
      page: pageNumber,
    });
    setListOfCompanies(companiesFound);
    const totalRecords = await JoblyApi.getCompaniesCount({...search});
    setTotalRecords(totalRecords);
  };

  useEffect(
    function handleFetchCompanies() {
      async function fetchCompanies() {
        try {
          const companies = await JoblyApi.getCompanies({});
          setListOfCompanies(companies);
          const totalRecords = await JoblyApi.getCompaniesCount();
          setTotalRecords(totalRecords);
        } catch (err) {
          return history.push("/login");
        }
      }
      fetchCompanies();
    },
    [history]
  );

  return (
    <div>
      <h1>CompaniesList</h1>
      <SearchForm
        setSearchTerm={setSearchTerm}
        handlePageChange={handlePageChange}
      />
      <ul>
        {listOfCompanies.map((company) => (
          <CompanyCard key={company.handle} company={company} />
        ))}
      </ul>
      <Paginate
        currentPage={currentPage}
        totalRecords={totalRecords}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default CompaniesList;
