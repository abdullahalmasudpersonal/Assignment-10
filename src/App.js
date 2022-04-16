

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Blogs from './Page/Blogs/Blogs';
import Contact from './Page/Contact/Contact';
import Galleries from './Page/Galleries/Galleries';
import Home from './Page/Home/Home/Home';
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';
import Notfound from './Page/Shared/Notfound/Notfound';
import Services from './Page/Shared/Services/Services';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/galleries' element={<Galleries />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<About />}></Route>
        <Route path='/register' element={<About />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
