import FifthSection from 'components/FifthSection';
import Footer from 'components/Footer';
import FourthSection from 'components/FourthSection';
import Main from 'components/Main';
import SecondSection from 'components/SecondSection';
import SixthSection from 'components/SixthSection';
import ThirdSection from 'components/ThirdSection';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Main />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </Fragment>
  );
}
