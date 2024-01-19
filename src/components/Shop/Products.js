import classes from './Products.module.css'
import ProductItem from './ProductItem'
const dummy_product = [
    {
        id: 'p1',
        price: 5,
        title: 'First book',
        description: 'First book written'
    },
    {
        id: 'p2',
        price: 6,
        title: 'Second book',
        description: 'Second book written'
    }
]
export default function Products() {
    return (
        <section className={classes.products}>
            <h2>BUY YOUR FAVOURITE PRODUCTS</h2>
            <ul>
                {
                    dummy_product.map(item => (
                        <ProductItem key={item.id} id={item.id} title={item.title} price={item.price} description={item.description} />
                    ))
                }
            </ul>
        </section>
    )
}