import classes from './CartItem.module.css'
import { useDispatch} from 'react-redux';
import { cartActions } from '../../store/cart-slice';

export default function CartItem(props) {
    const {id, title, quantity, totalPrice, price} = props.item

    const dispatch = useDispatch()

    const addItemHandler = () => {
        dispatch(cartActions.addToCart({id, title, price}))
    }

    const removeItemHandler = () => {
        dispatch(cartActions.removeToCart(id))
    }

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${parseFloat(totalPrice).toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${parseFloat(price).toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>x <span>{quantity}</span></div>
                <div className={classes.actions}>
                    <button onClick={removeItemHandler}>-</button>
                    <button onClick={addItemHandler}>+</button>
                </div>
            </div>
        </li>
    )
}