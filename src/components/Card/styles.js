import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  width: 250px;
  height: 350px;
  /* top: calc(50% - 175px);
  left: calc(50% - 125px); */
  background: inherit;
  border-radius: 2px;
  overflow: hidden;
  border-radius: 8px;


&:after{
 content: '';
 width: 300px;
 height: 300px;
 background: inherit;
 position: absolute;
 left: -25px;
 right: 0;
 top: -25px;
 bottom: 0;
 box-shadow: inset 0 0 0 200px rgba(255,255,255,0.05);
 filter: blur(10px);
}
`;

export const ImageBox = styled.span`
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 50%;
  background-size: contain;
  
`;