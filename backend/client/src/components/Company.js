import React , {useEffect,useState } from 'react'


import CompanyItem from './CompanyItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

const Company = (props) => {
  const notesIntial = [
   
  ]
  
  const [companies, setCompanies] = useState(notesIntial)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(1)
   
  // document.title = `${this.capitalizeFirstLetter(props.category)}-NewsMonkey`;
  
   const updateNews = async ()=> {
    props.setProgress(10);
    const url =
    'http://localhost:5000/api/com/fetchallcompanies';
   setLoading(true);
    let data = await fetch(url);
  let parseData = await data.json();
  setCompanies(parseData.companies);
  setTotalResults(parseData.totalResults);
  setLoading(false);
 
 
  props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])
  
  
  const  fetchMoreData = async() => {
 
   
   const url =
   'http://localhost:5000/api/com/fetchallcompanies';
  
    let data = await fetch(url);
  let parseData = await data.json();
  setCompanies(companies.concat(parseData.companies))
  setTotalResults(parseData.totalResults)
  setPage(page+1)
  };
   
  
  return (
    <div className='container'> 




        <InfiniteScroll
          dataLength={companies.length}
          next={fetchMoreData}
          hasMore={companies.length !== totalResults}
          loader={ loading && <Spinner />}
        > 
  <div className="container">
    <div className='row'>
    {companies.map((company)=>{
      
      return (
        <div className="col-md-4" key={company.ALISE}>
        <CompanyItem  CIN={company.CIN} company_name={company.COMPANY_NAME} ALIAS={company.ALISE}/>
      </div>
      )
    })}
    </div>
    </div>
    </InfiniteScroll>
    </div>
   
   
   
   
  )
}

export default Company