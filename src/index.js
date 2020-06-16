import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const observable = initialValue => {
  const observers = [];

  return {
    value: initialValue || '',

    /**
     * armazena funcoes em 'observers', 
     * estas sao chamadas quan ha uma 
     * atualizacao de 'value' => observable.next('novo valor') 
     */
    subscribe: fn => observers.push(fn) - 1, // retorna a posicao no array

    /**
     * remove o observer de posicao indicada
     */
    unsubscribe: index => observers.splice(index, 1),

    // atualiza o 'value' do observable
    next(nextValue) {
      this.value = nextValue;
      observers.forEach(observer => observer(nextValue));
    },
  }
}

// const subject = observable('inicial');

// const subscription_01 = subject.subscribe(value => console.log(`disparada no em 'next' => ${value}`));
// const subscription_02 = subject.subscribe(value => console.log('disparada no segundo observer'));

// console.log(`Valor inicial => ${subject.value}`);

// subject.next('novo valor');

// console.log(`Valor após alteração => ${subject.value}`);

// subject.unsubscribe(subscription_02);

// subject.next('Após remoção');

const subject = observable(1);

function App() {
  const [state, setState] = React.useState(subject.value);

  useEffect(() => {
    const sub_01 = subject.subscribe(newValue => setState(newValue));
    const sub_02 = subject.subscribe(newValue => console.log(`Atualização: ${newValue}`));
  }, []);

  return (
    <div id="app">
      <h1>Observable pattern</h1>

      <span>{state}</span>
      <button onClick={() => subject.next(state + 1)}>Adicionar</button>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);