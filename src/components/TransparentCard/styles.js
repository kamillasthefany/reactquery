import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 0;

  /* &:hover{
    opacity: 1;
     transform: translateY(-20px);
  } */
  }
`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background: rgba(255, 255, 255, 0.05);
  margin: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.5;
  transition: 0.5s;

  &:hover{
    opacity: 1;
     transform: translateY(-20px);
  }
`;

export const ImgBx = styled.div` 
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid rgba(0, 0, 0, 0.25);
`;


export const Imagem = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const H3 = styled.h3`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin: 20px 0 10px;
  line-height: 1.1em;
`;

export const Span = styled.span`
  font-size: 12px;
  font-weight: 300;
  text-transform: initial;
`;

// .container.card.sci {
//   position: absolute;
//   bottom: 50px;
//   display: flex;
// }

// .container.card.sci li {
//   list - style: none;
//   margin: 0 10px;
//   transform: translateY(40px);
//   transition: 0.5s;
//   opacity: 0;
//   transition - delay: calc(0.1s * var(--i));
// }

// .container.card: hover.sci li {
//   transform: translateY(0px);
//   opacity: 1;
// }

// .container.card.sci li a {
//   color: #fff;
//   font - size: 24px;
// }