import { CardLayout } from 'components';
import { type NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive details form</title>
        <meta
          name='description'
          content='Frontend Mentor challenge'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
      </Head>
      <main>
        <CardLayout />
      </main>
    </>
  );
};

export default Home;
