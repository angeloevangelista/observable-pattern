import React from 'react';
import ReactDOM from 'react-dom';

const observables = () => {
  const observers = [];
  const value = '';

  return {
    subscribe: () => { },
    unsubscribe: () => { },
    next: () => { },
  }
}

function App() {
  return (
    <div id="app">
      <h1>Observable pattern</h1>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);