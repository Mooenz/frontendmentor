//styles

import { Article, Tag } from './styles';

const Project = ({ item }) => {
  const { title, tag, repository, image, live } = item;

  return (
    <a href={live} target="_blank" rel="noopener noreferrer">
      <Article image={image}>
        <Tag>{tag}</Tag>
        <h2>{title}</h2>
        
      </Article>
    </a>
  );
};

export default Project;
