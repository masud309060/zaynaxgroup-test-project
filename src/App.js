import './App.scss';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="app">
      <Header /> 
      <Main /> 
      <Blog /> 
    </div>
  );
}

export default App;
