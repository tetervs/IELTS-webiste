import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Review from './Components/Review/Review';
import StudentReview from './Components/Student-Review/StudentReview';
import Text from './Components/Text/Text';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Text/>
      <Review/>
      <StudentReview/>
      <Footer/>
    </div>
  );
}

export default App;
