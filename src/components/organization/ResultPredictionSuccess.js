import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const url = `${BASE_URL}/webtoon`;

const ComponentWebtoonTotalPredict = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [similarWebtoons, setSimilarWebtoons] = useState([]);
  const [recommendPlot, setRecommendPlot] = useState([]);

  const onClickPredict = async () => {
    const {data} = await getResponse();
    const {title, description, rating, recommend_plot, similar_webtoon} = data;
    setRating(rating);
    setSimilarWebtoons(similar_webtoon);
  };

  const getResponse = async () => {
    const {data} = await axios.post(url, {
      title : title,
      description : description
    });
    return data;
  };

  return (
    <CInner>
      <Cdiv>
        예측결과
      </Cdiv>
    </CInner>
  );
};

const CInner = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`;

const Cdiv = styled.div`
  width : 1000px;
  height : auto;
`;

export default ComponentWebtoonTotalPredict;