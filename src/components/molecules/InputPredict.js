import styled from 'styled-components';


const InputPredict = (props) => {
  return (
    <CInputForm>
      <CPredictButton onClick={props.onClickPredict}>예측하기</CPredictButton>
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

const CPredictButton = styled.button`
  width : 300px;
  height : 70px;
  font-size : 20pt;
  margin : 10px;
  border-radius : 1rem;
  background-color : #fff;
  &:active{
    background-color : #000;
    color : #fff;
  }
`;

export default InputPredict;