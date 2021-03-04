import React from "react";
import createHistory from "history/createBrowserHistory";

export default function Navbar() {
  const history = createHistory();

  const handleClick = () => {
    history.go(0);
  };
  return (
    <div>
      <div className="bg-light border-bottom-nav">
        <div className="container">
          <div className="row py-3">
            <div
              onClick={handleClick}
              className="cursor-pointer fc-red col-6 text-left fw-bold  ff-montserrat fs-20"
            >
              Sports Interactive
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
