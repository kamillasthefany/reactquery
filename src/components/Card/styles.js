import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  //teste
  //margin: 40px 0;

`;

export const CardBox = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
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
  width: 120px;
  height: 120px;
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

export const ContextBox = styled.h3`
  
`;

export const H3 = styled.h3`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin: 10px 0 5px;
  line-height: 1.1em;
  word-wrap: break-word;
  max-width: 170px;
`;

export const Span = styled.span`
  font-size: 12px;
  font-weight: 300;
  text-transform: initial;
`;

export const Sci = styled.ul`
   position: absolute;
   bottom: 50px;
   display: flex;

   li {
   list-style: none;
   margin: 0 10px;
   transform: translateY(40px);
   transition: 0.5s;
   //opacity: 0;
   //transition-delay: calc(0.1s * var(${props => props.teste}));
   transition-delay: calc(0.1s);
   &:hover{
   transform: translateY(0px);
   opacity: 1;
  }
  }

  li a {
   color: #fff;
   font-size: 24px;
  }
 
`;
