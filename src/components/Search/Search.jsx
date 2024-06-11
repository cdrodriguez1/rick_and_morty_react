import React from 'react'
import { useForm } from 'react-hook-form'

export default function Search({ setActualPage, onFilter }) {

    const { register, handleSubmit } = useForm();

    const submit = (dataF) => {
        // console.log(filter);
        setActualPage(1);
        onFilter(1, dataF);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='introduce nombre' type="text" {...register('name')} />
                <button className='btn'>Search</button>
            </form>
        </div>
    )
}
