
import Nav from './pages/Nav'
import { Routes, Route} from 'react-router-dom'
import { ProductProvider } from "./context/ProductContext";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <ProductProvider> 
      <Nav />
      <Routes>
          <Route>
            <Dashboard />

          </Route>
      </Routes>
      </ProductProvider>
    </>
  )
}


export default App;









