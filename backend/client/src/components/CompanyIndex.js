import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Spinner from "./Spinner";

const CompanyIndex = () => {
  const { alias } = useParams();
  const com = [];

  const [data, setData] = useState(com);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(
    () => {
      setLoading(true);
      fetch(
        `http://localhost:5000/api/com/company_by_alise/companies?alise=${alias}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    // eslint-disable-next-line
    []
  );
  console.log(data);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error || !Array.isArray(data)) {
    return <p>There was an error loading your data!</p>;
  }

  return (
    <div className="container">
      {data.map((item) => (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="sidebar-item">
                  <div className="make-me-sticky">
                    
                      <div className="lg:w-5/6 md:w-1/3 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                          Sign Up
                        </h2>
                        <div className="relative mb-4">
                          <label
                            for="full-name"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                        <div className="relative mb-4">
                          <label
                            for="email"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                          Button
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                          Literally you probably haven't heard of them jean
                          shorts.
                        </p>
                      </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-7">
             
                 
                   
                      <div className="container">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                            CIN
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.CIN}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                            Company Name
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.COMPANY_NAME}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                           Date Of Ragistration
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.DATE_OF_REGISTRATION}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                          Month Name
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.MONTH_NAME}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                         State
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.STATE}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                          ROC
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.ROC}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                          Company Status
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.COMPANY_STATUS}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                          Category
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.CATEGORY}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                          Class
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.CLASS}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                          Company Type
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.COMPANY_TYPE}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                          Authorized Capital
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.AUTHORIZED_CAPITAL}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                         Paidup Capital
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.PAIDUP_CAPITAL}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        Activity Code
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.ACTIVITY_CODE}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        Activity Description
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.ACTIVITY_DESCRIPTION}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="container py-4 ">
                        <div className="row">
                        <div className="col-md-6">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        Address
                          </h2>
                        </div>
                        <div className="col-md-6">
                        <div className="md:flex-grow">
                          <span className="font-semibold title-font text-gray-700">
                            {item.REGISTERED_OFFICE_ADDRESS}
                          </span>
                        </div>
                        </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                
              </div>
           
         
        </>
      ))}
    </div>
  );
};
export default CompanyIndex;
// `http://localhost:5000/api/com/company_by_alise/companies?alise=${alias}`
