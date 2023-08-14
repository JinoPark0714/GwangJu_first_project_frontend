import {InputFormForRating, ResultPredictionRating} from "./components/organization"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/result" element={<ResultPredictionRating/>}/>
        <Route path="/" element={<InputFormForRating/>}/>
      </Routes>
      {/* <ComponentWebtoonTotalPredict/> */}
    </div>
  );
}

export default App;
