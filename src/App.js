import React from 'react';

import './App.css';

import Card from './components/Card/index';
import First from './components/First/index';
import Parameter from './components/Parameter/index';
import Children from './components/Children/index';
import Repetition from './components/Repetition/index';
import Conditional from './components/Conditional/index';

export default () => (
  <div className='App'>
    <Card title='#01 - First component'>
      <First />
    </Card>
    <Card title='#02 - Component with parameter'>
      <Parameter title='Title' subtitle='Subtitle' />
    </Card>
    <Card title='#03 - Component with cildren'>
      <Children>
        <ul>
          <li>Children 1</li>
          <li>Children 2</li>
          <li>Children 3</li>
        </ul>
      </Children>
    </Card>
    <Card title='#04 - Repetition component'>
      <Repetition />
    </Card>
    <Card title='#05 - Conditional component'>
      <Conditional number={10}></Conditional>
    </Card>
  </div>
);
