import type { NextPage } from 'next';

import PageLayout from '../components/PageLayout';

const Home: NextPage = () => {
  return (
    <PageLayout title="Homepage" showHero={true} hideContent={true}>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: 'url(https://placeimg.com/1000/800/arch)' }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
