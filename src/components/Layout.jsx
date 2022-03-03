import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ShoppingCart from './ShoppingCart'

const Layout = ({children}) => {
    const [cartOpen, setCartOpen] = React.useState(false)

    return (
        <main className={cartOpen ? 'main-cart-open' : null}>
            <Header setCartOpen={setCartOpen} />
            <section>
                {children}
            </section>
            <Footer />
            <ShoppingCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
        </main>
    )
}

export default Layout