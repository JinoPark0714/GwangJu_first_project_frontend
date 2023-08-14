import styled from 'styled-components';
import { InputDescription, InputTitle, InputSummary, InputPredict, InputSelectList } from '../molecules';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const url = `${BASE_URL}/webtoon/rating`;

const ComponentWebtoonTotalPredict = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [summary, setSummary] = useState('');
  const [genre, setGenre] = useState('fantasy');
  const [rating, setRating] = useState('');
  const navigate = useNavigate();
  const [isResult, setIsResult] = useState(false);
  const [resultTitle, setResultTitle] = useState('');

  const onClickPredict = async () => {
    const { data } = await getPredictionRating();
    const { rating, title } = data;
    setRating(rating);
    setIsResult(true);
    setResultTitle(title);
  };

  const getPredictionRating = async () => {

    const { data } = await axios.post(url, {
      title: title,
      description: description,
      genre : genre,
      summary : summary
    });
    return data;
  };

  const genreList = [
    {
      english: "daily",
      korean: "일상"
    },
    {
      english: "comic",
      korean: "코믹"
    },
    {
      english: 'fantasy',
      korean: '판타지'
    },
    {
      english: 'action',
      korean: '액션'
    },
    {
      english: 'drama',
      korean: '드라마'
    },
    {
      english: 'pure',
      korean: '순정'
    },
    {
      english: 'sensibility',
      korean: '감성'
    },
    {
      english: 'thrill',
      korean: '스릴'
    },
    {
      english: 'historical',
      korean: '사극'
    },
    {
      english: 'sports',
      korean: '스포츠'
    }
  ];


  return (
    <div>
      <COuter>
        <CInner>
          <Cdiv>
            <InputTitle title={title} setTitle={setTitle} />
          </Cdiv>
          <Cdiv>
            <InputDescription description={description} setDescription={setDescription} />
          </Cdiv>
          <Cdiv>
            <InputSelectList list={genreList} label="웹툰 장르" setItem={setGenre} item={genre}/>
          </Cdiv>
          <Cdiv>
            <InputSummary title={summary} setTitle={setSummary} />
          </Cdiv>
          <Cdiv>
            <InputPredict onClickPredict={onClickPredict} />
          </Cdiv>
        </CInner>
        <CInner>
          {isResult && 
            <CInner>
              <CPredictionRating>
                작품제목 : {resultTitle}
              </CPredictionRating>
              <CPredictionRating>
                예측 평점 : {rating}
              </CPredictionRating>
            </CInner>
          }
        </CInner>
      </COuter>
      
      
    </div>

  );
};


const COuter = styled.div`
display : flex;
flex-direction : row;
justify-content : center;
align-items : center;
`;

const CPredictionRating = styled.div`
  font-size : 15pt;
  width : 500px;
  height : auto;
`;

const CInner = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : flex-start;
`;

const Cdiv = styled.div`
  width : 1000px;
  height : auto;
`;

export default ComponentWebtoonTotalPredict;