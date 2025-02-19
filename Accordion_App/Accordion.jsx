import './styles/style.css';
import { useState } from 'react';

const Accordion = ({title,content}) => {
  const[open,isopen]=useState(false);
  return (
    <section className="accordion-card" key={Math.random()}>
      <div className="header" onClick={()=>isopen(!open)}>
        <div className="card-title">{title}</div>
        <div className="icon">{open?'-':'+'}</div>
      </div>
      <div className="content">
     {open && <p className='card-info'>{content}</p>}
      </div>
    </section>
  );
}

export default Accordion
