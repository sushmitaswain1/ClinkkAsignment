import React, {useState} from "react";

import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Boxed = styled.div`
 width: 640px;
 height: 450px;
 background-color: white;
 position: fixed;
 top: 75px;
 z-index: 5;
 max-height: calc(100% - 100px);
 left: calc(50% - 250px);


`;

const BoxedBanner = styled.div`
min-height: 20px;
margin-bottom: 10px;

`;

const BoxedShadow = styled.div`
position: fixed;
height: 100%;
width: 100%;
top: 0px;
background-color: black;
opacity: 0.7;
z-index: 4;
`;


const StatusCard = ({ course }) => {

  const[openBox, setOpenBox] = useState();

  function close(){
    setOpenBox();
  }
  return (
    <div>
      <div class="card" style={{ backgroundColor: "#E4E5E8" }}>
        <div class="card-content">
          <div class="content columns">
            <div className="column box is-1">
              <img src={course.url} alt="logos" />
            </div>
            <div class="column is-4">
              <p>
                <strong>{course.courseName}</strong>
              </p>
              <p>by {course.author}</p>
            </div>
            <div className="column is-3">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-clock"></i>
                </span>
                <span>{course.duration}</span>
              </span>
            </div>
            <div className="column is-2">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-fire"></i>
                </span>
                <span>{course.rating}</span>
              </span>
            </div>
            <div className="column">
              <button onClick={() => setOpenBox(!openBox)}
                        className="button is-outlined">
              
              View Course</button>
             {openBox ?  <div>  
                               <BoxedShadow onClick = {close}/>
                                   <Boxed>
            
                                   <BoxedBanner />
                                
                                   <ReactPlayer url = {course.vid} controls = {true} />
                                
                                </Boxed>

                          </div> : null }

            </div>
          </div>
        </div>
      </div>
      <section className="Section" style={{ paddingTop: "10px" }}></section>
    </div>
  );
};

export default StatusCard;
