
import Header from './components/Header';
import Clock from './components/Clock';
import ProfileSection from './components/ProfileSection';
import SubscriptionSection from './components/SubscriptionSection';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

// MainContent component to handle profile data and pass to both ProfileSection and SubscriptionSection
const MainContent = () => {

  return (
    <>
      <ProfileSection />
    </>
  );
};

function App() {
  return (
    <div className="max-w-[1120px] mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/:name" element={<MainContent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;