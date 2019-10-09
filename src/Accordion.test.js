import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';
import { configure } from 'enzyme';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


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




it('renders correctly', () => {
  const tree = renderer
    .create(<Accordion sections={sections} 
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders empty when no section supplied', () => {
  const tree = renderer
    .create(<Accordion 
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('opens a clicked section', () => {
  const wrapper = shallow(<Accordion sections={sections} />)
  wrapper.find('button').at(1).simulate('click')
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('opens only one section when multiple are clicked', () => {
  const wrapper = shallow(<Accordion sections={sections} />)
  wrapper.find('button').at(1).simulate('click')
  wrapper.find('button').at(2).simulate('click')
  expect(toJson(wrapper)).toMatchSnapshot()
})