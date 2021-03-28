import React from "react";
import courses from "../../assets/DummyData";
import StatusCard from "../StatusCard/StatusCard";

const CardList = () => {
  
  return (
    <div>
      <h1 className="title"> Courses</h1>
      <div class="tabs">
        <ul>
          <li class="is-active">
            <a href="/">
              <strong>All courses</strong>
            </a>
          </li>
          <li>
            <a href="/">The Newest</a>
          </li>
          <li>
            <a href="/">Top rated</a>
          </li>
          <li>
            <a href="/">Most Popular</a>
          </li>
        </ul>
      </div>
      {courses.map((course) => (
        <StatusCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default CardList;
