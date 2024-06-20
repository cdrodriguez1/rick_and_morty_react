import { useState } from "react"
import PropTypes from 'prop-types';
import "./Contador.scss"


// una forma de hacer el contador, pagina hacia adelante o hacia atrás
export default function Contador({ onChangePage }) {

    const [actualPage, setActualPage] = useState(1);

    const changePage = (newPage) => {
        setActualPage(newPage)
        onChangePage(newPage);
    }

    return (
        <div className="contador-button">
            <button className={actualPage === 1 ? "u-disabled" : ""}
                onClick={() => changePage(actualPage - 1)}>{'<'}</button>
            {actualPage}
            <button onClick={() => changePage(actualPage + 1)}>{'>'}</button>
        </div>
    )
}

// Ahora hay importar(arriba) y definir PropTypes(abajo)
// para todos las props en todos los componentes
Contador.propTypes = {
    onChangePage: PropTypes.func.isRequired,
};


// otra forma de hacer el contador, pagina hacia adelante o hacia atrás
// export default function Contador() {
//     const [contador, setContador] = useState(1)

//     const nextPage = () => {
//         setContador(contador + 1)
//         onChangePage(contador + 1)
//     }

//     const beforePage = () => {
//         setContador(contador - 1)
//         onChangePage(contador - 1)
//     }

//     return (
//         <div>
//             <button onClick={beforePage}>{'<'}</button>
//             <span> {contador} </span>
//             <button onClick={nextPage}>{'>'}</button>
//         </div>
//     )
// }
