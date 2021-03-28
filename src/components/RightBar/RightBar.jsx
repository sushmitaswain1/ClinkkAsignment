import React from "react";
import LineChart from "../LineChart/LineChart";

const RightBar = () => {
  return (
    <div>
      <div className=" field is-horizontal">
        <div className=" is-7">
          <div class="panel-block">
            <p class="control has-icons-left">
              <input
                class="input has-background-light"
                type="text"
                placeholder="Search"
              />
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="column">
          <span class="icon is-left">
            <i class="far fa-bell fa-lg"></i>
          </span>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="column ">
          <div class="box has-background-light ">
            <div class="columns content">
              <div className=" column">
                <p className="has-text-weight-bold is-size-1 has-text-justified">
                  11
                </p>
              </div>
              <div className="column">
                <p>Courses</p>
                <p>completed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="column ">
          <div class="box has-background-light ">
            <div class="columns content">
              <div className="column is-4">
                <p className="has-text-weight-bold is-size-1">4</p>
              </div>
              <div className="column">
                <p>Courses </p>
                <p> in progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          <strong>Your Statistics</strong>
        </p>
        <div className="field is-grouped">
          <p className="control has-text-weight-bold">Learning Hours</p>
          <p className="control has-text-grey mr-5"> My courses</p>
          <p className="control  mr-0 ml-6">
            <div class="select  is-small">
              <select className="has-background-light">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </p>
        </div>
        <div class="box">
          <div class="content">
            <LineChart />
          </div>
        </div>
      </div>
      <br />
      <div>
        <div class=" columns card has-background-light">
          <div class=" column is-7 card-content">
            <p>
              <strong>Learn even More</strong>
            </p>
            <p>Unclock Premium features</p>
            <br />
            <button className="button is-black">Premium</button>
          </div>

          <div class="column">
            <img
              className="image  is-128x128"
              src="https://i.ibb.co/jr5NT0S/idea-brainstorm-svgrepo-com.png"
              alt="Josh"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
