import styled from 'styled-components';
import { InputDescription, InputTitle, InputSelectList, InputFormat, InputPredict } from '../molecules';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const url = `${BASE_URL}/webtoon`;

const ComponentWebtoonTotalPredict = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [similarWebtoons, setSimilarWebtoons] = useState([]);
  const [recommendPlot, setRecommendPlot] = useState([]);
  const [genre, setGenre] = useState('fantasy');
  const [format, setFormat] = useState('스토리');
  const navigate = useNavigate();


  const onClickPredict = async () => {
    const { data } = await getResponse();
    const { title, description, rating, recommend_plot, similar_webtoon } = data;
    setRating(rating);
    setSimilarWebtoons(similar_webtoon);
  };

  const onClickaa = async () => {
    const data = await getIsSuccess();
    console.log(data);
  }
  
  const getIsSuccess = async () => {
    const { data } = await axios.post(`${url}/binary`, {
      title: title,
      description: description,
      genre: genre,
      format: format
    });
    return data;
  }

  const getResponse = async () => {
    const { data } = await axios.post(url, {
      title: title,
      description: description
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
  const formatList = [
    {
      english: 'episode',
      korean: '에피소드',
    },
    {
      english: 'story',
      korean: '스토리'
    },
    {
      english: 'omniverse',
      korean: '옴니버스'
    }
  ];


  return (
    <div>
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
          <InputFormat list={formatList} label="웹툰 형식" setItem={setFormat} item={format}/>
        </Cdiv>
        <Cdiv>
          <InputPredict onClickPredict={onClickaa} />
        </Cdiv>
      </CInner>
    </div>

  );
};



const CInner = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`;

const ProgressDiv = styled.div`
  
`;

const Cdiv = styled.div`
  width : 1000px;
  height : auto;
`;

export default ComponentWebtoonTotalPredict;