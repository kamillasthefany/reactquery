import React from 'react';
import { Container, ContextBox, Content, ImgBx, H3, Span, Imagem, CardBox, Sci } from './styles';

export const Card = ({ title, subtitle, image }) => {
  return (
    <Container>
      <CardBox>
        <Content>
          <ImgBx>
            {/* <Imagem src="https://avatars.githubusercontent.com/u/36460097?v=4" alt="imagem" /> */}
            <Imagem src={image} alt="imagem" />
          </ImgBx>
          <div class="contentBx">
            {/* <H3>Someonaaaaaaaaae Famous<br /><Span>Creative</Span></H3> */}
            <H3>{title}<br /><Span>{subtitle}</Span></H3>
          </div>
        </Content>
        {/* <Sci>
          <li teste={1}>
            <a href="#">teste</a>
          </li>
          <li i="1">
            <a href="#">
              <i class="fa fa-facebook" aria-hidden="true">teste</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </Sci> */}
      </CardBox>
    </Container>
  );
};

