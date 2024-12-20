import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import PostList from './components/PostList';
import Posts from './components/Posts';

import './App.css';

const App = () => {
  return (
    <>
      <div className='App'>
        <Router>
          <Nav />

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='about' element={<About />} />
            <Route exact path='contact' element={<Contact />} />
            <Route exact path='posts' element={<Posts />}>
              <Route path='postlist' element={<PostList />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
