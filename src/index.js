import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import HelloWorld from './HelloWorld';
//import Bomb from './Bomb';
//import RouletteGun from './RouletteGun';
import Accordian from './Accordion';

const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
];

ReactDOM.render(<Accordian section={sections}/>, document.getElementById('root'));