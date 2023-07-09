import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Homepage from './homepage/pages/homepage';
import News from './homepage/pages/news';
import NavBar from './homepage/components/navBar';



function App() {
  const [projectDropdown, setProjectDropdown] = useState(false)
  const [contactDropdown, setContactDropdown] = useState(false)
  function handleDropdownClose() {
    setContactDropdown(false)
    setProjectDropdown(false)
  }
  return (
    <React.Fragment>
      <NavBar projectDropdown={projectDropdown} setProjectDropdown={setProjectDropdown} contactDropdown={contactDropdown} setContactDropdown={setContactDropdown}/>
      <BrowserRouter>
        <Routes>
          <Route path="/news" element={<Navigate replace to="/news/latest" />} />
          <Route path="/news/:id" element={<News onDropdownClose={handleDropdownClose} /> } />
          <Route path='/homepage' element={<Homepage onDropdownClose={handleDropdownClose}/>} />
          <Route path="/" element={<Navigate replace to="/homepage" />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
