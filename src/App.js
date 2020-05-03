import React from 'react';

import './App.css';

import Card from './components/Card/index';
import Default from './components/BasicComponents/Default/index';
import Parameter from './components/BasicComponents/Parameter/index';
import Children from './components/BasicComponents/Children/index';
import Repetition from './components/BasicComponents/Repetition/index';
import Conditional from './components/BasicComponents/Conditional/index';
import FatherDirect from './components/Comunication/Direct/Father/index';
import FatherIndirect from './components/Comunication/Indirect/Father/index';

export default () => (
  <div className='App'>
    <Card title='#01 - Default component' color='#FA6900'>
      <Default />
    </Card>
    <Card title='#02 - Component with parameter' color='#1FDA9A'>
      <Parameter title='Title' subtitle='Subtitle' />
    </Card>
    <Card title='#03 - Component with cildren' color='#E94C6F'>
      <Children>
        <ul>
          <li>Children 1</li>
          <li>Children 2</li>
          <li>Children 3</li>
        </ul>
      </Children>
    </Card>
    <Card title='#04 - Repetition component' color='#FDF200'>
      <Repetition />
    </Card>
    <Card title='#05 - Conditional component' color='#28ABE3'>
      <Conditional number={10} />
    </Card>
    <Card title='#06 - Father/Son direct component' color='#5E412F'>
      <FatherDirect lastName='Montenegro'></FatherDirect>
    </Card>
    <Card title='#07 - Father/Son indirect component' color='#982395'>
      <FatherIndirect></FatherIndirect>
    </Card>
  </div>
);
