import Head from 'next/head';

//Components
import Filter from '../components/Filter';
import Projects from '../components/Projects';

//Filter
import UseFilter from '../hooks/UseFilter';

//Styles
import {
  Main,
  Content,
  Title,
  Strong,
  Body,
  Anchor,
} from '../styles/HomeStyled.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Projects solved form frontend mentor - Mooenz</title>
      </Head>

      <UseFilter>
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
          <Projects />
        </Main>
      </UseFilter>
    </>
  );
}
