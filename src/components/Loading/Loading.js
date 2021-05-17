import React from 'react';
import styled from 'styled-components';

const LoadingDotFirst = styled.span`
  
  color: black;
  font-size: 20px;
  animation: loading 1s infinite;

  @keyframes loading {
    0% {
      opacity: 0.1;
    }
    25% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LoadingDotSecond = styled.span`
  
  color: black;
  font-size: 20px;

  animation: loading 2s infinite;
  
  @keyframes loading {
    0% {
      opacity: 0.1;
    }
    25% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LoadingDotThird = styled.span`
  
  color: black;
  font-size: 20px;
  animation: loading 3s infinite;
  
  @keyframes loading {
    0% {
      opacity: 0.1;
    }
    25% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Loading = () => {
  return (
    <div>
      Loading <LoadingDotFirst>.</LoadingDotFirst><LoadingDotSecond>.</LoadingDotSecond><LoadingDotThird>.</LoadingDotThird>      
    </div>
  )
}

export default Loading;
