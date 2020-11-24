import React, { ReactElement, useState } from 'react';
import './Accordian.css';

function Accordian({Header, Contents}: { Header: ReactElement, Contents: ReactElement}) {
  const [isOpen, setOpen] = useState(false); 
  return (
    <div className="Accordian">
      <button onClick={() => setOpen(!isOpen)} className="Accordian-header">
        {Header}
      </button>
      {isOpen ? Contents : ''}
    </div>
  );
}

export default Accordian;
