import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './routes/Cart.jsx';
import Item from './routes/Item.jsx';
import Products from './routes/Products.jsx';
import Product from './routes/Product.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/carrito" element={<Cart/>} />
        <Route path="/item" element={<Item/>} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
)
