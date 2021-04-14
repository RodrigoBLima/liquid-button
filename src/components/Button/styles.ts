import styled from "styled-components";

export const Container = styled.a`
  position: relative;
  padding: 20px 50px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  width: 200px;
  overflow: hidden;

  a:hover .liquid {
    top: -120px;
  }

  span {
    position: relative;
    z-index: 1;
    color: #000;
    font-size: 20px;
    letter-spacing: 8px;
  }

  .liquid {
    position: absolute;
    left: 0;
    top: -80px;
    width: 200px;
    height: 200px;
    background: #f4f754;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  .liquid:before,
  .liquid:after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  .liquid:before {
    border-radius: 45%;
    background: rgba(20, 20, 20, 1);
    animation: animate 5s linear infinite;
  }

  .liquid:after {
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
    animation: animate 10s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`;
