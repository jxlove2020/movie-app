import React from 'react';
import './About.css';

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <h3>Movie App (React JS)</h3>
      <span>
        Movie Database API 를 활용하여 영화 데이터의 정보를 보여주는 사이트
        입니다.
      </span>
      <span>− Joseph</span>
    </div>
  );
}

export default About;
