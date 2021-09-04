import React from 'react';
import { Container, Content, ImgBx, H3, Span, Imagem, Card } from './styles';

export const TransparentCard = () => {
  return (
    <Container>
      <Card>
        <Content>
          <ImgBx>
            <Imagem src="https://avatars.githubusercontent.com/u/36460097?v=4" alt="imagem" />
          </ImgBx>
          <div class="contentBx">
            <H3>Someone Famous<br /><Span>Creative</Span></H3>
          </div>
        </Content>
        {/* <ul class="sci">
          <li style="--i: 1">
            <a href="#">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li style="--i: 2">
            <a href="#">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li style="--i: 3">
            <a href="#">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul> */}
      </Card>
    </Container>
  );
};