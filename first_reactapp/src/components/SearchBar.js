import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import '../styles/searchBar.css'


const SearchBar = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    // const [isFocused, setIsFocused] = useState(false);
    const targetRef = useRef(null);
    

    const showSearchBar = isExpanded;          //shows the search bar when expanded or focused 

    const handleMouseEnter = () => {
        setIsExpanded(true);
    }

    const handleMouseExit = () => {
        setIsExpanded(false)
    }

    const handleIconClick = () => {
        setIsExpanded(!isExpanded);
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            handleSearch();
        }
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (
            targetRef.current &&
            !targetRef.current.contains(e.target)) {
            setIsExpanded(false);
          }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
        document.removeEventListener("click", handleOutsideClick);
            };
        }, []);

        const handleSearch = () => {
            const formatQuery = searchQuery.toLowerCase();     //format the query for routing, converting it to lowercase.
    
            //defining mappings to specific routes for search queries
            const routeMappings = {
                about: "/about",
                charts: "/charts",
                contact: "/contact",
                chanel: "/charts",
                birkin: "/charts"       //route for the brands charts

            };
    
            if (formatQuery in routeMappings) {
                navigate(routeMappings[formatQuery])
            } else{
                console.log("We're sorry, we couldn't find results for your search: ", formatQuery)
            }
    
        }


    return(
        <>
        <div className={`searchBar-container ${showSearchBar ? "expanded" : ""}`}      //if onfocus or isExpanded, it expands container
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
        >
        
        <FontAwesomeIcon 
            icon={faMagnifyingGlass}
            className="search-icon"
            onClick={handleIconClick}
        />
        <input
            type="text"
            className="searchbar-input"
            placeholder="Search..."
            ref={targetRef}
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        
        </div>
        </>
    )

}


export default SearchBar;



            {/* {isExpanded && (
                    <input
                    type="text"
                    className="search-input"
                    placehholder="Search..."
                    onChange={e => setIsExpanded(e.target.value)}      //update everytime i type into search bar
                    />

                    )} */}
                {/* </div> */}