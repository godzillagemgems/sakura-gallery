import './App.css';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="text-effect-wrapper">
          <h1 class="text" contenteditable>Sakura gallery</h1>
        </div>
      </header>
      <main>
        <Slideshow />
      </main>

    </div>
  );
}

export default App;
