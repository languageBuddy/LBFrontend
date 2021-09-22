import React, { useState, useContext } from 'react';
import { Collapse, Button } from 'reactstrap';
import Media from './Media';

function Player(props) {
  const [isOpen, setIsOpen] = useState(props.submoduleId == 1 ? true : false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ paddingLeft: '36px', paddingRight: '36px', paddingTop: '12px', paddingBottom: '12px', marginLeft: '10px', marginTop: '10px', marginBottom: '1rem' }}>SubModule</Button>
      <Collapse isOpen={isOpen}>
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />
      </Collapse>
    </div>
  );
}

export default Player;