import React from 'react';
import styled from 'styled-components';

import courses from '../../assets/DummyData';

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
`

function PlayBox ({close, visuals}) {
    
   

    
    return(
        <>
        
        <BoxedShadow onClick = {close}/>
        <Boxed>
            
            <BoxedBanner />
             { courses.map (videos => 
              <ReactPlayer url = {visuals} controls = {true} />
           
                )}
           
        </Boxed>
       
        </>

    );
}

export default PlayBox;