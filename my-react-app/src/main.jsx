import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Welcome from './MyApp.jsx'
import Product from './Product.jsx'
createRoot(document.getElementById('root')).render(
<StrictMode>
{/*<App/>*/}
<Welcome name= "James"/>
<Product productName="Laptop" price={800} />
</StrictMode>
)

