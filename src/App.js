
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import Navbar from './Components/Navbar';
import Home from './Components/Home'; 
import AboutUs from './Components/AboutUs';
// import { renderToStaticMarkup } from 'react-dom/server';
import Service from './Components/Service';
import Hire from './Components/Hire';
import Blog from './Components/Blog';
import SingleBlogPost from './Components/SingleBlogPost';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/blog" Component={Blog}/>
          <Route path="/blog/:id" element={<SingleBlogPost />} />
                <Route exact path="/aboutus" Component={AboutUs}/>
          <Route exact path='/Service' Component={Service}/>
          <Route exact path='/Hire' Component={Hire}/>
     
          <Route exact path="/" Component={Home}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
