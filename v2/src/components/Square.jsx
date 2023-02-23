import Container from './Container';
import { SmallTitle, Title } from './TitleVariants';

const Square = ({ title, content, image }) => {
  return (
    <>
      <Container>
        <img src={image} />
        <Title text={title} />
        <SmallTitle content={content} />
      </Container>
    </>
  );
};
export default Square;
