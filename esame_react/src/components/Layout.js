import { Outlet, Link } from "react-router-dom";
import { useState } from "react"
import './Layout.css';
import Find from './Find'
const Layout = () => {
    // per questioni di tempo non ho ultimato il carrello. L'ho soltanto impostato.
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    return (
        <>
            <section className="findbar">
                <nav>
                    <div className='home'><Link to="/">
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
                            alt='amazon logo'
                        ></img>
                    </Link></div>
                    <div>
                        <Find />
                    </div>
                </nav>
            </section>
            <section className="page">

                <header>
                </header>
                <main>
                    <Outlet />
                </main>
            </section>
            <section className="cart">
                <p className="price">Totale: {total}€</p>
                <button>vai al carrello</button>
                <ul>
                    {cart.map((p) => (<li>
                        <img src={p.thumbnail} alt={p.title}></img>
                        <h4>{p.price}</h4>
                        <button>rimuovi</button>
                    </li>
                    ))}
                </ul>
            </section>
        </>

    )
};

export default Layout;