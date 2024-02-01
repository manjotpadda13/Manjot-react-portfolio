import { useState } from 'react';
import Header from '../Header';
import "./style.css";
import AboutMe from '../Pages/AboutMe';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';
import Resume from '../Pages/Resume';
import Footer from '../Footer';

function App() {
  const [selectedOption, setSelectedOption] = useState(1);
  return (
    <>
     <Header setSelectedOption={setSelectedOption}/>
     <div id='content'>
        {selectedOption === 1 && <AboutMe/>}
        {selectedOption === 2 && <Portfolio/>}
        {selectedOption === 3 && <Contact/>}
        {selectedOption === 4 && <Resume/>}
        <Footer/>
     </div>     
    </>
  )
}

export default App