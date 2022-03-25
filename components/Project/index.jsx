//styles

import { Article, Container, Img, Tag, Title, Anchor } from './styles';

const Project = ({ item }) => {
  const { title, tag, repository, image, live } = item;

  return (
    <Article>
      <Img src={image} alt={title} width={300} height={200} />
      <Container>
        <Tag>
          <span>{tag}</span>
        </Tag>
        <div>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <Title>{title}.</Title>
          </a>
          <Anchor href={repository} target="_blank" rel="noopener noreferrer">
            View code
          </Anchor>
        </div>
      </Container>
    </Article>
  );
};

export default Project;
