import React, { useState, useContext } from 'react';
import { Collapse, Button } from 'reactstrap';
import Media from './Media';

function Player(props) {
  const [isOpen, setIsOpen] = useState(props.submoduleId == 1 ? true : false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

    </div>
  );
}

export default Player;