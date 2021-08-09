import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Carousel from './Components/Carousel/Carousel';
import Teams from './Components/Teams/Teams';
import Blogs from './Components/Blogs/Blogs';
import EmailForm from './Components/EmailForm/EmailForm';
import Footer from './Components/Footer/Footer';
import {images,industries} from './Data Files/Data';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Services/>
      <Carousel pageHeading="Industries we've worked with" logo={industries}/>
      <Carousel pageHeading="Our Clients" images={images}/>
      <Teams/>
      <Blogs/>
      <EmailForm/>
      <Footer/>
    </div>
  );
}

export default App;
