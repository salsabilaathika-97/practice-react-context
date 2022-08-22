import './App.css';
import Card from './component/Card';
import { mainContext } from "./context/mainContext"
import LayoutContextProvider from './context/LayoutContext';
import { LayoutContextNewProvider } from './context/LayoutContextNew';
import MainContextClassProvider, { MainContextClass } from './context/MainContextClass';

function App() {

  return (
    <div className="App">
      <LayoutContextNewProvider>
      {/* <LayoutContextProvider> */}
        {/* <mainContext.Provider value = {mainContextValue}> */}
        <MainContextClassProvider>
          <Card />
        </MainContextClassProvider>
        {/* </mainContext.Provider> */}
      </LayoutContextNewProvider>
    </div>
  );
}

export default App;
