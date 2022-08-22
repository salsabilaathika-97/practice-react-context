import './App.css';
import Card from './component/Card';
import LayoutContextProvider from './context/LayoutContext';
import { LayoutContextNewProvider } from './context/LayoutContextNew';
import { MainContextProvider } from './context/MainContext';
import MainContextClassProvider from './context/MainContextClass';

function App() {

  return (
    <div className="App">
      <LayoutContextNewProvider>
        {/* <MainContextClassProvider> */}
        <MainContextProvider>
          <Card />
        {/* </MainContextClassProvider> */}
        </MainContextProvider>
      </LayoutContextNewProvider>
    </div>
  );
}

export default App;
