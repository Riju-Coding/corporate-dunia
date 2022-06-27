import React from 'react'
import { Link } from 'react-router-dom'
const CompanyItem = (props) => {
  let {ALIAS,company_name } = props;
  return (
    <div className='container py-1 my-2' ALIAS={ALIAS} >
    <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{company_name}</h1>
     <Link to={{pathname : `/companies/${ALIAS}`,
    
    }} class="text-indigo-500 inline-flex items-center">Learn More
      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </Link>
    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              1.2K
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              6
            </span>
          </div>
   
  </div>
  </div>
  )
}

export default CompanyItem