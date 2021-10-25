
import './App.css';
import Counter from './Counter';
function App() {
  
    const {increment,counterVal} = Counter();
  return (
    <div className="App">
      
      <button onClick={increment}>Increment</button>
      {counterVal}
    </div>
  );
}

export default App;
