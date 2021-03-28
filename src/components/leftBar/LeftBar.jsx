import React from "react";

export const LeftBar = () => {
  return (
    <div>
      <div
        class="card column is-one-fifth"
        style={{
          width: "130px",
          height: "800px",
          backgroundColor: "black",
          borderRadius: "2rem",
         
        }}
      >
        <div class="card" style={{ backgroundColor: "black" }}>
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src="https://i.ibb.co/pW8xXQb/F-logo-black-2.png"
              alt="logos"
            />
          </figure>
        </div>
        <div className="columns">
          <div className="column"></div>
          <div class="card-content ">
            <div className="content"></div>
            <div class="content">
              <span class=" icon  has-text-white">
                <i class="fas fa-home fa-lg"></i>
              </span>
            </div>
            <br />
            <div class="content">
              <span class=" icon ">
                <i class="fas fa-graduation-cap  fa-lg"></i>
              </span>
            </div>
            <br />
            <div class="content">
              <span class=" icon ">
                <i class="fas fa-user fa-lg "></i>
              </span>
            </div>
            <br />
            <div class="content">
              <span class=" icon  ">
                <i class="fas fa-envelope fa-lg"></i>
              </span>
            </div>
            <br />
            <div class="content">
              <span class=" icon ">
                <i class="fas fa-cog fa-lg"></i>
              </span>
            </div>
            <br />
            <br />
            <div class="content">
              <span class=" icon has-text-white ">
                <i class="fas fa-sign-out-alt fa-2x"></i>
              </span>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  );
};
