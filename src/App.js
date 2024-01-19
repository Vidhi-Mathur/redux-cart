import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart'
import Products from './components/Shop/Products'
import { useSelector } from 'react-redux'

export default function App() {
    const toggleCart = useSelector(state => state.ui.cartVisible)
    return (
        <>
        <Layout>
            {toggleCart && <Cart />}
            <Products />
        </Layout>
        </>
    )
}