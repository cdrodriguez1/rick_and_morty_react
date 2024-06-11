import React, { useState } from 'react'



export default function Pagination({ actualPage, setActualPage, onChangePage }) {

    const changePage = (newPage) => {
        setActualPage(newPage)
        onChangePage(newPage);
    }

    return (
        <div className='font-color'>
            <button className={actualPage === 1 ? 'u-disabled' : ''} onClick={() => changePage(actualPage - 1)}>{'<'}</button>
            {actualPage}
            <button onClick={() => changePage(actualPage + 1)}>{'>'}</button>
        </div>
    )
}
