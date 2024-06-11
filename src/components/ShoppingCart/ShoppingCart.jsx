import React, { useContext } from 'react'
import { GlobalContext } from '../../App'
// ejemplo para importar GlobalContext
import './ShoppingCart.css'
import Gallery from '../Gallery/Gallery'


export default function ShoppingCart() {

    const { cart } = useContext(GlobalContext)

    return (
        <div className='c-shopping-cart'>
            <Gallery list={cart} />
        </div>
    )
}
