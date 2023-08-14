import styled from 'styled-components';


export default function InputDescription(props){

  const onChangeDescription = (event) => {
    props.setDescription(event.target.value);
  };

  return (
    <CInputForm>
      <CLabelDiv>웹툰 소개글</CLabelDiv>
      <CTextArea onChange={onChangeDescription}/>
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

const CTextArea = styled.textarea`
  width : 700px;
  height : 100px;
  border-radius : 0.4rem;
  padding : 15px;
  font-size : 15pt;
`;