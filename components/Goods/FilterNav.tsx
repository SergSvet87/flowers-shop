import React from "react"
import "./filterNav.scss"

let closeFilterNav = () => {
    let filterNav = document.querySelector(".filterNav");
    filterNav.style.left = "-100vw";
    filterNav.style.visibility = "hidden"; 
  }


export const FilterNav = () => {
    return (
      <>
        <div className="filterNav">
          <div className="filterNav__content">
            <div className="head">
                <div><h2>Filters</h2></div>
                <div className="close" onClick={closeFilterNav}>x</div>
            </div>

            <div className="filterNav__body">
              
            </div>
            <hr />
            
            <div className="applyBlock">
                <button className="apply" onClick={closeFilterNav}>SHOW</button>
            </div>
          </div>
        </div>
      </>
    )
  }