import Head from 'next/head';
import { useState } from 'react';

//Components
import Filter from '../components/Filter';
import Project from '../components/Project';

//Data
import data from '../constants/data.json';

//Styles
import {
  Main,
  Content,
  Title,
  Strong,
  Body,
  Anchor,
  Projects,
} from '../styles/HomeStyled.js';

export default function Home() {  
  const dataArray = Object.values(data);

  const [dataFilter, setDataFilter] = useState(dataArray)

  //Filtra datos
  const dataFilterNew = dataArray.filter((item) => {
      return item.tag === 'junior';
    })

  return (
    <>
      <Head>
        <title>Projects solved form frontend mentor - Mooenz</title>
      </Head>

      <Main>
        <Content>
          <Title>
            Portfolio <Strong>Frontend Mentor</Strong>
          </Title>
          <Body>
            This project show all challenges solved from{' '}
            <Anchor
              href="https://www.frontendmentor.io/challenges"
              target="_blank"
              rel="noopener noreferrer"
            >
              here.
            </Anchor>
          </Body>
        </Content>

        <Filter />

        <Projects>
          {dataFilter.map((item) => (
            <Project key={item.title} item={item} />
          ))}
        </Projects>
      </Main>
    </>
  );
}
