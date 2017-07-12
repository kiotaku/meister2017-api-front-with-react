import React from 'react';
import ReactDom from 'react-dom';
import CounterCard from './CounterCard';

const App = () => (
  <CounterCard />
);

ReactDom.render(
  <App />,
  document.getElementById('app')
);
