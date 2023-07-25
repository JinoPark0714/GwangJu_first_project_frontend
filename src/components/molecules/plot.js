import styled from 'styled-components';


const SimilarList = (props) => {
  const similarWebtoons = props.similarWebtoons;
  return (
    <CInputForm>
      <CLabelDiv>유사 웹툰 추천</CLabelDiv>
      {similarWebtoons.map(webtoon => 
        <CWebtoon>
          {webtoon}
        </CWebtoon>
      )}
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

const CWebtoon = styled.div`
  width : 700px;
  height : auto;
  border-radius : 0.4rem;
  padding : 5px;
  font-size : 15pt;
  text-align : center;
  justify-content: center;
  align-items : center;
`;

export default SimilarList;