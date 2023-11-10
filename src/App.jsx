import styles from './style';

import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from './components';

import MyTabs from './components/MyTabs';
import SearchBar from './components/SearchBar';
import ShipCategories from './components/ShipCategories';
import CapsuleCategories from './components/CapsuleCategories';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <div className='flex items-center justify-center flex-1 mx-auto w-full space-x-48 '>
          <SearchBar />
          {/* <div className='pt-[20vh] w-[40%] m-auto flex flex-col items-center min-w-[200px]'>
            
          </div> */}
          <MyTabs />
        </div>
        <ShipCategories />
        <CapsuleCategories />
        {/* <Business /> */}
        {/* <Billing /> */}
        {/* <CardDeal /> */}
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
