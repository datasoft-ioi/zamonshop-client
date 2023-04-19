import {Routes , Route ,Navigate} from 'react-router-dom';
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import SignUp from '../pages/Signup'
import product from '../assets/data/products'
import ProductList from '../pages/ProductList';
import ProductLists from '../pages/ProductList';
import notFound from '../pages/notFound';

function Routers({productUrl}) {
    return <Routes>
        {/* <Route path='' element={Navigate} to='home'/> */}
        <Route path='*' element={<notFound/>} />
        <Route path='/' element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='shop/:id' element={<ProductDetails/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path={productUrl} element={<ProductLists/>} />
    </Routes>;
}

export default Routers;