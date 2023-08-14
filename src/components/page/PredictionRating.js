import React from 'react'
import styled from 'styled-components';
import {InputFormForRating, ResultPredictionRating} from "../Organization";
export default function PredictionRating() {
  return (
    <div>
      <COuter>
        <InputFormForRating/>
      </COuter>
    </div>
  )
}


const COuter = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : flex-start;
`;
