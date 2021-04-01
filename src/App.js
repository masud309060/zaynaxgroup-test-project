import './App.scss';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="app">
      <Header /> 
      <Main /> 
      <Blog /> 
      <Service /> 
      <Footer /> 
    </div>
  );
}

export default App;
