import styled from 'styled-components';


const Rating = (props) => {
  return (
    <CInputForm>
      <CLabelDiv>예상 평점</CLabelDiv>
      <CRating value={props.rating}/>
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

const CRating = styled.input`
  width : 700px;
  height : 30px;
  border : none;
  padding : 15px;
  font-size : 25pt;
  text-align : center;
`;

export default Rating;