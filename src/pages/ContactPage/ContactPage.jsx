// import React, { useState } from 'react' --> con useState para hacerlo sin formatos reactivos
import { useForm } from 'react-hook-form'

export default function ContactPage() {

    // const [name, setName] = useState(""); ---> sin formatos reactivos
    // const { register, handleSubmit, watch, formState: { errors } } = useForm(); --> con el observador y los errores

    const { register, handleSubmit } = useForm();

    const submit = (dataF) => {
        console.log(dataF);
    }

    // console.log(errors);
    // console.log(watch('name'));
    // console.log(watch());

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                {/* <input type='text' value={name} onChange={e => setName(e.target.value)} /> ---> sin formatos reactivos */}
                <input type="text" placeholder='introduce tu nombre' {...register('name', { required: true, minLength: 4 })} />
                {/* {watch('name')?.length > 3 && <select {...register('role')}>
                <option value='teacher'>Teacher</option>
                <option value='student'>Student</option>
                </select>} */}
                <input type="text" placeholder='introduce tu apellido' {...register('lastName', { required: true, minLength: 4 })} />
                <input type="email" placeholder='introduce tu email' {...register('email')} />
                <textarea placeholder='introduce tu comentario' {...register('textarea', { required: true, maxLength: 50 })} />

                <button className='btn'>Enviar</button>
            </form>
        </div>
    )
}
