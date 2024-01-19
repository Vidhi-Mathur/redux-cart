import classes from './Header.module.css'
import CartButton from '../Cart/CartButton'

export default function Header() {
    return (
        <header className={classes.header}>
            <h1>Redux Cart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton />
                    </li>
                </ul>
            </nav>
        </header>
    )
}