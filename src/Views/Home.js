import About from '../Components/About';
import Header from '../Components/Header';
import Logo from '../Components/Logo';
import SocialMedia from '../Components/SocialMedia';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="App">
      <Header/>
      <Logo/>
      <About/>
      <SocialMedia/>
      <Footer/>
    </div>
  );
}

export default Home;
