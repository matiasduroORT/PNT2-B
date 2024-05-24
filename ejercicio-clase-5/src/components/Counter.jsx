import { useCounter } from '../context/CounterContext';

export const Counter = () => {

    // const {count, incrementar, reducir} = useContext(CounterContext)

    // const count = ContextDelContador.count

    const { count, incrementar, reducir } = useCounter();

    return (
      <div>
        <h1>Contador: {count}</h1>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={reducir}>Reducir</button>
      </div>
    );
}
