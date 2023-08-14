import styled from 'styled-components';

export default function InputSummary (props) {

  const onChangeTitle = (event) => {
    props.setTitle(event.target.value);
  };

  return (
    <CInputForm>
      <CLabelDiv>웹툰 개요</CLabelDiv>
      <CTitleInput onChange={onChangeTitle}/>
    </CInputForm>
  );
};

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

const CTitleInput = styled.input`
  width : 700px;
  height : 30px;
  border : 1px solid #000;
  border-radius : 0.4rem;
  padding : 15px;
  font-size : 15pt;
`;