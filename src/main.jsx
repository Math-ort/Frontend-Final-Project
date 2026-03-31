import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RouterApp from './routes/RouterApp.jsx'
import { ProductProvider } from './context/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <ProductProvider>
    <RouterApp> 
        <App />
    </RouterApp> 
  </ProductProvider>
)
