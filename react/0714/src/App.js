import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '분당 우동 맛집'])
  let [하트, 하트변경] =useState(0);
  
  function 제목바꾸기(){
    글제목변경(['여자 코트 추천','강남 우동 맛집', '분당 우동 맛집']);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
    
      <button onClick={제목바꾸기}>btn</button>
      <div className="list">
        <h3>{글제목[0]} <span onClick={()=>{하트변경(하트+1)}}>♡</span>{하트}</h3>
        <p>2022.03.01, 서울 강남구</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2022.03.01, 서울 강남구</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2022.03.01, 서울 강남구</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
