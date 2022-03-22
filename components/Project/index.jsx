//styles

import {
  Article,
  Container,
  Img,
  Tag,
  Title,
  Anchor,
} from './styles';

const Project = ({ item }) => {
  const { title, tag, repository, image, live } = item;

  return (
    <Article>
      <a href={live} target="_blank" rel="noopener noreferrer">
        <Img src={image} alt={title} width={300} height={200} />
      </a>
      <Container>
        <Tag>{tag}</Tag>
        <Title>{title}.</Title>
        <Anchor href={repository} target="_blank" rel="noopener noreferrer">
          View code
        </Anchor>
      </Container>
    </Article>
  );
};

export default Project;
