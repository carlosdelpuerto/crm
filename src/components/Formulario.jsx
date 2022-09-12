import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'


const Formulario = () => {

    const navigate = useNavigate()

    const nuevoClienteSchema = Yup.object().shape({
     nombre: Yup.string()
        .min(3, 'El nombre es muy corto')
        .max(20, 'El nombre es muy largo')
        .required('El nombre del cliente es obligatorio'),
     empresa: Yup.string()
        .required('El nombre de la empresa es obligatorio'),
     email: Yup.string()
        .email('Email no válido')
        .required('El email es obligatorio'),
    telefono: Yup.number()
        .positive('Número no válido')
        .integer('Número no válido')
        .typeError('Número no válido'),
    
    
    })
//El content-type es una regla de json.server si vas a usar el method put,patch o post. y se envia en el header para que esa sea la info que llegue primero
    const handleSubmit = async (valores) => {
        try {
            const url = 'http://localhost:4000/clientes'
            const respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                console.log(respuesta)
                const resultado = await respuesta.json()
                console.log(resultado)
            navigate('/clientes')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
    <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>
    <Formik
    initialValues={{
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        notas:'',

    }}
        onSubmit={ async (values, {resetForm}) =>{

            await handleSubmit(values)
            
            resetForm()
        }}
        validationSchema={nuevoClienteSchema}
    >

    {({errors, touched}) => {
        return (
    
        
        <Form className='mt-10'>
        
        <div className='mb-4'>
            <label className='text-gray-800' htmlFor='nombre'>Nombre:</label>
            <Field
             id='nombre'
             type='text'
             className='mt-2 block w-full p-3 bg-gray-50'
             placeholder='Nombre del Cliente'
             name='nombre'
             />

             {errors.nombre && touched.nombre ? (
                <Alerta>{errors.nombre}</Alerta>
             ) : null}

        </div>

        <div className='mb-4'>
            <label className='text-gray-800' htmlFor='empresa'>Empresa:</label>
            <Field
             id='empresa'
             type='text'
             className='mt-2 block w-full p-3 bg-gray-50'
             placeholder='Empresa del Cliente'
             name='empresa'
             />
               {errors.empresa && touched.nombre ? (
                <Alerta>{errors.empresa}</Alerta>
             ) : null}
        </div>
        <div className='mb-4'>
            <label className='text-gray-800' htmlFor='email'>Email:</label>
            <Field
             id='email'
             type='text'
             className='mt-2 block w-full p-3 bg-gray-50'
             placeholder='Email del Cliente'
             name='email'
             />
               {errors.email && touched.nombre ? (
                <Alerta>{errors.email}</Alerta>
             ) : null}
        </div>
        <div className='mb-4'>
            <label className='text-gray-800' htmlFor='telefono'>Teléfono:</label>
            <Field
             id='telefono'
             type='tel'
             className='mt-2 block w-full p-3 bg-gray-50'
             placeholder='Teléfono del Cliente'
             name='telefono'
             />
            {errors.telefono && touched.nombre ? (
                <Alerta>{errors.telefono}</Alerta>
             ) : null}

        </div>
        <div className='mb-4'>
            <label className='text-gray-800' htmlFor='notas'>Notas:</label>
            <Field
            as='textarea'
             id='notas'
             type='text'
             className='mt-2 block w-full p-3 bg-gray-50 h-40'
             placeholder='Notas del Cliente'
             name='notas'
             />
        </div>

        <input 
            type='submit'
            value='Agregar Cliente'
            className='mt-5 w-full bg-blue-800 text-white p-3 uppercase hover:cursor-pointer font-bold text-lg'
        />

        </Form>
        )}}
    </Formik>
    </div>
  )
}

export default Formulario


//!~~~~~~~~~~~~~~~NOTAS~~~~~~~~~~~~~~~~~~
//http://127.0.0.1:5173/clientes/nuevo
//as=textarea es la forma en que accedes en 'formik' a un textarea de html.
//initialValues={} es la forma de colocar estados y valores iniciales en Formik, en vez de usar hook
//si dentro de nuestro formulario de formik envolvemos la funcion validationSchema={nuevoClienteSchema}, entonces Yup se asocia a nuestro Formik para trabajar con las validaciones
//Telefono: Yup.number().typeError('Numero no es válido') use el typeError,porque no respeta si ponemos un texto dentro del number('nro no valido'), entonces creamos nuestro propio error con typeError
//*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~API-REST~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//REST: Representational State Transfer, debe responder a los Request de HTTP: GET,POST,PUT,PATCH,DELETE.
//Get: Para obtener datos, POST: Para enviar datos al servidor/creación, PUT/PATCH: Para actualizar(put es el recomendado), Delete: Para eliminar un registro. Usamos JSON.server para la creacion de nuestra apirest

//?-------ENDPOINTS de una REST API: una rest api cuenta con endpoints para hacer operaciones CRUD--------
//Listar todos los clientes GET /clientes
//Obtener un solo cliente GET /clientes/id
//Crear un nuevo cliente POST /clientes
//Editar un cliente PUT /clientes/id
//Borrar un cliente DELETE /clientes/id