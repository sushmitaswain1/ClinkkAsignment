import React from "react";

import CardList from "../CardList/CardList";


const MiddleBar = () => {
  
  
  return (
    <div>
      <div class=" columns card has-background-light">
        <div class=" column is-9 card-content">
          <p class="title">Hello Josh!</p>
          <p class="subtitle">Its good to see you again</p>
        </div>

        <div class="column">
          <img
            className="image  is-128x128"
            src="https://i.ibb.co/LCY1XMf/Josh.png"
            alt="Josh"
          />
        </div>
      </div>
      <br />
      <div className="columns">
        <div className="column is-9">
          <div class="card has-background-light">
            <div class="card-content">
              <div class="content columns">
                <div className="column box is-2">
                  <img
                    className="image is-64x64"
                    src="https://i.ibb.co/VjLMNY3/spain-svgrepo-com.png"
                    alt="logos"
                  />
                </div>
                <div class="column is-4">
                  <p>
                    <strong>Spanish B2</strong>
                  </p>
                  <p>by Alejandro Velazques</p>
                </div>
                <div className="column is-3">
                  <div className="column"></div>
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fas fa-spinner fa-2x"></i>
                    </span>
                    <span>87%</span>
                  </span>
                </div>
                <div className="column">
                  <button class="button is-black">
                    Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3 level">
          <div className="column">
            <img
              className=" image is-64x64  "
              style={{ paddingRight: "10px" }}
              src="https://i.ibb.co/dPp20RR/arrow-svgrepo-com.png"
              alt="logos"
            />
            <img
              className="image is-64x64"
              style={{ paddingLeft: "10px" }}
              src="https://i.ibb.co/h2dFpp4/right-arrow-svgrepo-com.png"
              alt="logos"
            />
          </div>
        </div>
      </div>
      <CardList />
    </div>
  );
};

export default MiddleBar;
