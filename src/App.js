import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { CoreValue } from './components/CoreVale';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { ContactUs } from './components/ContactUs';
import { Footer } from "./components/Footer";
import { BookButton } from './common/BookButton';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <CoreValue />
      <Services />
      <Reviews />
      <ContactUs />
      <Footer />
      <BookButton />
    </div>
  );
}

export default App;
