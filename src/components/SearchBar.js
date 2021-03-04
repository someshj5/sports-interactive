import React from "react";

export default function SearchBar({ handleQuery, handleSearch }) {
  return (
    <>
      <div class="my-4 col-md-6 offset-md-3 mt-5 border border-success pt-3">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search......"
            onChange={handleQuery}
          />
          <div onClick={handleSearch} class="input-group-append cursor-pointer">
            <span class="input-group-text">
              <i class="fa fa-search"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
