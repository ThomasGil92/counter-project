import './App.css';
import { useState, useCallback } from 'react';
import styled from 'styled-components';

// Style CSS avec Styled-components
const Title = styled.h1`
  font-size: 3rem;
  color: #1b2f63;
`;
const Counter = styled.p`
  font-size: 2rem;
  color: #1b2f63;
`;
const Button = styled.button`
  font-size: 2rem;
  color: #1b2f63;
  border: 2px solid #1b2f63;
  padding: 6px 10px;
  background-color: #ffffff;
  margin: 15px;
  &:hover {
    color: blue;
    border: 2px solid blue;
  }
  &:active {
    color: white;
    border: 2px solid white;
    background-color: #1b2f63;
  }
`;

function App() {
  // State du composant
  const [count, setCount] = useState(0);

  // Fonctions de mises à jour du state avec le hook useCallback
  const increment = useCallback(() => setCount((counter) => counter + 1), []);
  const decrement = useCallback(() => setCount((counter) => counter - 1), []);
  const reset = useCallback(() => setCount(() => 0), []);

  return (
    <div className="App">
      <main>
        <Title>Apprendre React</Title>
        <h2>Compteur:</h2>
        {/* Affichage de la valeur du state */}
        <Counter>{count}</Counter>
        <div>
          {/* Bouton avec fonctions de mise à jour du state au clic */}
          <Button type="button" onClick={decrement}>
            -1
          </Button>
          <Button type="button" onClick={reset}>
            0
          </Button>
          <Button type="button" onClick={increment}>
            +1
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
