import styled from 'styled-components';
import React from 'react'

export default function InputSelectList(props) {

  const onChangeList = (event) => {
    props.setItem(event.target.value);
  };

  return (
    <CInputForm>
      <CLabelDiv>{props.label}</CLabelDiv>
      <CSelect onChange={onChangeList} value={props.item} defaultValue={props.item}>
        {
        props.list.map((item, index) => 
          <option value={item.english} key={index}>
            {item.korean}
          </option>)
        }
      </CSelect>
    </CInputForm>
  )
}


const CInputForm = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : space-around;
  align-items : center;
  text-align : center;
  width : inherit;
  margin : 30px;
`;

const CLabelDiv = styled.div`
  width : 200px;
  font-size : 20pt;
  margin : 10px;
`;

const CSelect = styled.select`
  width : 730px;
  height : 40px;
  font-size : 15pt;
`;