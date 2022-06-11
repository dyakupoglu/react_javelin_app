import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import DropDown from './components/Navbar/DropDown';
import GlobalStyle from './GlobalStyles';

function App() {
  const [dropDownIsOpen, setdropDownIsOpen] = useState(false);

  const toggle = () => {
    setdropDownIsOpen(!dropDownIsOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown dropDownIsOpen={dropDownIsOpen} toggle={toggle} />
      <Hero />
      <Info />
    </>
  );
}

export default App;
