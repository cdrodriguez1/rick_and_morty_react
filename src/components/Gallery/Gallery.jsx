import PropTypes from 'prop-types';
import './Gallery.css'
import { Link } from 'react-router-dom';


export default function Gallery({ listCharacters }) {

    return (

        <div className='characters'>
            {listCharacters.map((data, index) =>
                <div className="font-color" key={index}>
                    <img src={data.image} alt={data.name} className='img' />
                    <h2>{data.name}</h2>
                    <p>{data.species}</p>

                    <Link to={"/characters/" + data.id}><button className='btn'>Conóceme!</button></Link>
                </div>
            )}
        </div>
    )
}

// Importar(arriba) y definir(abajo) las props
// Así
Gallery.propTypes = {
    listCharacters: PropTypes.func.isRequired,
};
// o así
// Gallery.propTypes = {
//     listCharacters: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//             name: PropTypes.string.isRequired,
//             species: PropTypes.string.isRequired,
//             image: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };



// -------------------------------------------

// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import './Gallery.css';
// import { GlobalContext } from '../../App';

// export default function Gallery({ listCharacters }) {
//     const { cart, setCart } = useContext(GlobalContext);

//     const isTiny = false; // Ajusta esto según tu lógica

//     const modifyCart = (data, index, cart) => {
//         if (isTiny) {
//             const copyCart = [...cart];
//             copyCart.splice(index, 1);
//             setCart(copyCart);
//         } else {
//             setCart([...cart, data]);
//         }
//     };

//     return (
//         <div className='characters'>
//             {listCharacters.map((data, index) => (
//                 <div className="font-color" key={data.id || index}>
//                     <img src={data.image} alt={data.name} className='img' />
//                     <h2>{data.name}</h2>
//                     <p>{data.species}</p>
//                     <div>
//                         <button onClick={() => modifyCart(data, index, cart)}>Add to cart</button>
//                         <Link to={"/characters/" + data.id}>
//                             <button className='btn'>Conóceme!</button>
//                         </Link>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// Gallery.propTypes = {
//     listCharacters: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//             name: PropTypes.string.isRequired,
//             species: PropTypes.string.isRequired,
//             image: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };

