// import { createContext, useState } from "react"

// export const AppContext = createContext()

// export const AppContextProvider = (props) =>{

//     // const [searchFilter, setSearchFilter] = useState()

//     const value = {
//     //    setSearchFilter,searchFilter = useState({
//     //     title
//     //    })
//     }
//     return (
//     <AppContext.Provider value = {value}>
//         {props.children}
//     </AppContext.Provider>
//     )
// }
import { createContext, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });

  const [isSearched, setIsSearched] = useState(false);

  const [jobs, setJobs] = useState(jobsData);

  const [showRecruiterLogin , setShowRecruiterLogin] = useState(false)
 
                  
  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs ,
    showRecruiterLogin,
     setShowRecruiterLogin,
  };
 
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
