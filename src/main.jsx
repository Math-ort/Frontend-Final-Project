import ReactDOM from 'react-dom/client'
import RouterApp from './routes/RouterApp.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import { AuthProvider } from './auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ProductProvider>
      <RouterApp />
    </ProductProvider>
  </AuthProvider>
)