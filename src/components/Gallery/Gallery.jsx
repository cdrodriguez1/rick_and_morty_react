import React from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'
import { GlobalContext } from '../../App'

// const { cart, setCart } = useContext(GlobalContext)

export default function Gallery({ listCharacters, isTiny }) {

    const modifyCart = (data, index, cart) => {
        if (isTiny) {
            const copyCart = [...cart];
            copyCart.splice(index, 1)
            setCart(copyCart);
        } else {
            setCart([...cart, data])
        }
    }

    return (

        <div className='characters'>
            {listCharacters.map((data, index) =>
                <div className="font-color" key={index}>
                    <img src={data.image} alt={data.name} className='img' />
                    <h2>{data.name}</h2>
                    <p>{data.species}</p>
                    <div>
                        <button onClick={() => modifyCart(data, index, cart)}>Add to car</button>
                        <Link to={"/characters/" + data.id}><button className='btn'>Conóceme!</button></Link>
                    </div>
                </div>
            )}
        </div>


    )
}
