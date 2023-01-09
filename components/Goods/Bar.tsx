/* eslint-disable @next/next/no-img-element */
import React from "react";

// import { FilterNav } from "./FilterNav";

import "../../styles/Shop.module.scss";

// function openFilterNav() {
//   let filterNav = document.querySelector(".filterNav");
//   filterNav.style.left = "0";
//   filterNav.style.visibility = "visible";
// }

// function btnSortHandler() {
//   document.querySelector(".options").classList.toggle("show");
// }

export const Bar = () => {
  return (
    <>
      {/* <FilterNav /> */}
      <div className="bar">
        <div className="bar__filter">
          <img
            src="/icons/filter.svg"
            alt="filterImg"
          />
          <button
            className="bar__button"
            type="button"
            name="Filtering"
            // onClick={openFilterNav}
          />
        </div>
        <div className="bar__search">
          <form
            action=""
            className="bar__form"
          >
            <input
              type="search"
              placeholder="Search.."
            />
          </form>
        </div>
        <div className="bar__sort">
          <img
            src="/icons/arrow-down-short.svg"
            alt="sortImg"
          />
          <button
            className="bar__button"
            type="button"
            name="Sorting"
            // onClick={btnSortHandler}
          />
          <div className="options">
            <a href="/">Cheaper</a>
            <a href="/">Popular</a>
            <a href="/">Best</a>
          </div>
        </div>
      </div>

      {/* <div className="bar">
        <button
          className="bar__filter button"
          onClick={openFilterNav}
        >
          <img
            src={filterSvg}
            alt="filt"
          />
          Filtering
        </button>

        <div className="bar__search">
          <input
            type="text"
            placeholder="Search.."
          />
          <button className="button">
            <img
              src={loupeSvg}
              alt="loupe"
            />
          </button>
        </div>

        <div className="bar__sort">
          <button
            onClick={btnSortHandler}
            className="dropbtn button"
          >
            Sorting
          </button>
         
        </div>
      </div> */}
    </>
  );
};
