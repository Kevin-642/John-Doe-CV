import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import Github from './pages/GitHub/Github';

function App() {
    return(
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Service' element={<Service/>} />
                <Route path='/Portfolio' element={<Portfolio/>} />
                <Route path='/Blog' element={<Blog/>} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/LegalNotice' element={<LegalNotice/>} />
                <Route path='/Github' element={<Github/>} />
            </Routes>
        </div>
    )
};
export default App;