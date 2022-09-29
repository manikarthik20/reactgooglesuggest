import './App.css';
import Example from './components/Example';
//import Google from './components/Google';
import GoogleSuggest from './components/GoogleSuggest';

function App() {
  return (
    <div className="App">
        {/* <Google/> */}
        <GoogleSuggest/>
        {/* <Example/> */}
    </div>
  );
}

export default App;
