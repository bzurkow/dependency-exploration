import logo from './logo.svg';
import './App.css';
import ObjectDependency from './object-dependency';
import StringDependency from './string-dependency';
import MemoizedObjectDependency from './memo-dependency';
import PropDependency from './prop-dependency';

function App() {
  return (
    <div className="App">
      <ObjectDependency />
      <StringDependency />
      <MemoizedObjectDependency />
      <PropDependency object={{a:1}}/>      
    </div>
  );
}

export default App;
