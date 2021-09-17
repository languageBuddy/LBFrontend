import React, { useState } from 'react';
import { Collapse, Button  } from 'reactstrap';
import Hero from './Hero';

const player = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{paddingLeft:'36px',paddingRight:'36px',paddingTop:'12px',paddingBottom:'12px',marginLeft:'10px',marginTop:'10px', marginBottom: '1rem' }}>Toggle</Button>
      <Collapse isOpen={isOpen}>
        <Hero/>
        <Hero/>
        <Hero/>
        <Hero/>
        <Hero/>
        <Hero/>
        <Hero/>
        <Hero/>
      </Collapse>
    </div>
  );
}

export default player;