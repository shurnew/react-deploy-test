import React from "react";
import "./SeachBox.css";
import Subject from "./Subject";

const SeachBox = () => {
  return (
    <div className = "box">
      <form className = "box2">
        <fieldset>
          <input className="search" type="search" />
          <button className="submit" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </fieldset>
      </form>            
    </div>
  );
};

export default SeachBox;
