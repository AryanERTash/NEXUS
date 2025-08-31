import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

import Dock from "./components/Dock";
import { VscHome, VscArchive, VscAccount, VscOrganization, VscCallIncoming, VscCalendar, VscMail } from "react-icons/vsc";
import { navLinks } from './constants';
const iconMap = {
  about: <VscHome size={18} />,
  work: <VscCalendar size={18} />,
  contact: <VscMail size={18} />,
  feedback: <VscOrganization size={18} />,
};

const App = () => {
  const handleClick = (sectionId) => () => {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

  const items = navLinks.map(link => ({
    icon: iconMap[link.id] || <VscHome size={18} />,
    label: link.title,
    onClick: handleClick(link.id),
  }));
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='relative'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Dock
       items={items}
       panelHeight={68}
       baseItemSize={50}
       magnification={70}
      />

    </BrowserRouter>
  );
}



export default App;
