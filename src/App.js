import {
  Card,
  Container,
  H1,
  P,
  Tag,
  ButtonContainer,
  Image,
  Content,
} from "./Container.styled";
import imgSrc from "./img/logo512.png";

function App() {
  return (
    <Container>
      <Card>
        <Content>
          <Tag color="#4361ee">EXCLUSIVE</Tag>
          <H1>React Styled Components</H1>
          <P>
            Exclusive React JS with styled components where you will learn why
            we need this & how to use it
          </P>
          <ButtonContainer>
            <a href="#">Watch now</a>
            <a href="#">Github Repo</a>
          </ButtonContainer>
        </Content>
        <Image src={imgSrc} alt="img" width="250px" />
      </Card>
    </Container>
  );
}

export default App;
