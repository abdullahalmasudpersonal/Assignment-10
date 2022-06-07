
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Blogs from './Page/Blogs/Blogs';
import Contact from './Page/Contact/Contact';
import Galleries from './Page/Galleries/Galleries';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login/Login';
import Register from './Page/Login/Register/Register';
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';
import Notfound from './Page/Shared/Notfound/Notfound';
import Services from './Page/Shared/Services/Services';
import CheckOut from './Page/CheckOut/CheckOut';
import ServicesDetail from './Page/Shared/ServicesDetail/ServicesDetail';
import RequireAuth from './Page/Login/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';

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
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/services/:servicesId' element={<ServicesDetail />}></Route>
        <Route path='checkout' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>

        }></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
