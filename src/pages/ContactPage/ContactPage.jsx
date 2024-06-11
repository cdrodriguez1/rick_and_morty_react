import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ContactPage() {
    // const [name, setName] = useState();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const submit = (dataF) => {
        console.log(dataF);

    }

    console.log(errors);
    console.log(watch('name'));
    console.log(watch());

    return (
        // <div>
        //     <form onSubmit={handleSubmit(submit)}>
        //         {/* <input type='text' value={name} onChange={(e) => setName(e.target.value)} /> */}

        //         <input placeholder='introduce tu nombre' type="text" {...register('name', { required: true, minLength: 3 })} />

        //         {watch('name') && watch('name').length > 3 && <select {...register('role')}>
        //             <option value='teacher'>Teacher</option>
        //             <option value='student'>Student</option>
        //         </select>}

        //         <input placeholder='introduce tu edad' type="number" {...register('age')} />
        //         <input placeholder='introduce tu email' type="email" {...register('email')} />

        //         <button>Enviar</button>

        //     </form>
        // </div>
        <div>
            <form onSubmit={handleSubmit(submit)}>
                {/* <input type='text' value={name} onChange={(e) => setName(e.target.value)} /> */}

                <input placeholder='introduce tu nombre' type="text" {...register('name', { required: true, minLength: 4 })} />

                <input placeholder='introduce tu apellido' type="text" {...register('lastName', { required: true, minLength: 4 })} />
                <input placeholder='introduce tu email' type="email" {...register('email')} />
                <textarea placeholder='introduce tu comentario' {...register('textarea', { required: true, maxLength: 50 })} />

                <button className='btn'>Enviar</button>
            </form>
        </div>
    )
}
