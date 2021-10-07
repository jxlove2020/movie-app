import React from 'react';
import './About.css';

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>Movie App (React JS)</span>
      <span>
        Movie Database API 를 활용하여 영화 데이터의 정보를 보여주는 사이트
        입니다.
      </span>
      <span>− Joseph</span>
    </div>
  );
}

export default About;
