import React from "react";

export default function SearchForm() {
  return (
    <form>
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="city..."
            className="form-control"
            autocomplete="off"
          />
        </div>
        <div className="col-4">
          <input type="submit" value="search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );
}
