import React from 'react';
import styled from 'styled-components';

const Spinner = () => (
  <Container>
    {
      Array(12).fill(1).map((item, index) => <div className={`bar bar${index + 1}`} />)
    }
    <div className="ios-loader">
      <div className="bar bar1" />
      <div className="bar bar2" />
      <div className="bar bar3" />
      <div className="bar bar4" />
      <div className="bar bar5" />
      <div className="bar bar6" />
      <div className="bar bar7" />
      <div className="bar bar8" />
      <div className="bar bar9" />
      <div className="bar bar10" />
      <div className="bar bar11" />
      <div className="bar bar12" />
    </div>
  </Container>
);

const Container = styled.div`
  .loader-android {
    display: none;
  }

  .ios-loader {
    position: relative;
    width: 54px;
    height: 54px;
    top: 50%;
    left: 50%;
    margin-left: -25px;
  }

  .ios-loader .bar {
    width: 3px;
    height: 10px;
    position: absolute;
    left: 44.5%;
    top: 37%;
    border-radius: 12px;
    background-color: #fff;
    animation: fade 1s linear infinite;
  }

  @-webkit-keyframes fade {
    from {
      background: #000
    }
    to {
      background: #fff;
    }
  }
  @keyframes fade {
    from {
      background: #000
    }
    to {
      background: #fff;
    }
  }

  .ios-loader .bar1 {
    transform: rotate(-330deg) translate(0px, -142%);
    animation-delay: -0.916s;
  }

  .ios-loader .bar2 {
    transform: rotate(-300deg) translate(0px, -142%);
    animation-delay: -0.833s;
  }

  .ios-loader .bar3 {
    transform: rotate(-270deg) translate(0px, -142%);
    animation-delay: -0.75s;
  }

  .ios-loader .bar4 {
    transform: rotate(-240deg) translate(0px, -142%);
    animation-delay: -0.666s;
  }

  .ios-loader .bar5 {
    transform: rotate(-210deg) translate(0px, -142%);
    animation-delay: -0.583s;
  }

  .ios-loader .bar6 {
    transform: rotate(-180deg) translate(0px, -142%);
    animation-delay: -0.5s;
  }

  .ios-loader .bar7 {
    transform: rotate(-150deg) translate(0px, -142%);
    animation-delay: -0.416s;
  }

  .ios-loader .bar8 {
    transform: rotate(-120deg) translate(0px, -142%);
    animation-delay: -0.333s;
  }

  .ios-loader .bar9 {
    transform: rotate(-90deg) translate(0px, -142%);
    animation-delay: -0.25s;
  }

  .ios-loader .bar10 {
    transform: rotate(-60deg) translate(0px, -142%);
    animation-delay: -0.166s;
  }

  .ios-loader .bar11 {
    transform: rotate(-30deg) translate(0px, -142%);
    animation-delay: -0.083s;
  }

  .ios-loader .bar12 {
    transform: rotate(-0deg) translate(0px, -142%);
    animation-delay: 0s;
  }
`;

export default Spinner;
