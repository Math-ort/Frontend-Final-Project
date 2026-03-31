
import Nav from './pages/Nav'
import { Routes, Route} from 'react-router-dom'
import { ProductProvider } from "./context/ProductContext";


function App() {
  return (
    <>
    <ProductProvider> 
      <Nav />
      <Routes>
          <Route>

          </Route>
      </Routes>
      </ProductProvider>
    </>
  )
}


export default App;









