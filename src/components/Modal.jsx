import React, { useState, useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'




const Modal = ({setModal,AnimModal,setAnimModal,GuardarGasto,gastoEditar,setgastoEditar}) => {
    const [mensaje,setMensaje] = useState('')
    const [nombre,setNombre] = useState('')
    const [cantidad,setCantidad] = useState(0)
    const [categoria,setCategoria] = useState ('')
    const [id,setId] = useState('')
    const[fecha,setFecha] = useState ('')




    const ocultarModal = () =>{
     
        setAnimModal(false)
        setTimeout(() =>{
            setModal(false)
        },400)
        setgastoEditar({})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('enviando')
        if([nombre,categoria,cantidad].includes('')){
            setMensaje('Todos los campos son obligatorios')
            setTimeout(() =>{
                setMensaje('')
            },3000)
            return
        }
        GuardarGasto({nombre,cantidad,categoria,id,fecha})


    }

    useEffect(() =>{
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    },[])

  return (
    <div className='modal'>
      
    
        <div className='cerrar-modal'>
            <img src={CerrarBtn} alt="boton de cierre" onClick={ocultarModal} />
            
        </div>
        <form
            onSubmit={handleSubmit} 
            className={`formulario ${AnimModal ? "animar" : "cerrar"}`
        
        }>
            <legend>{gastoEditar.nombre ? "Editar Gasto" : "Ingrese su Gasto"}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            <div className='campo'>
                <label htmlFor="nombre">Nombre Del Gasto</label>

                <input 
                    type="text"  
                    id="nombre" 
                    placeholder='Ingrese el nombre del gasto'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)} 
                />
            </div>
            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>

                <input 
                    type="number"  
                    id="cantidad" 
                    placeholder='Ingrese la cantidad del gasto. ej: 300'
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))} 
                />
            </div>
            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>

               <select 
               
               id="categoria"
               value={categoria}
               onChange={e => setCategoria(e.target.value)} 
               >

                    <option value="">-- Seleccione --</option>
                    <option value="ahorro"> Ahorro </option>
                    <option value="salud"> Salud </option>
                    <option value="servicios"> Servicios </option>
                    <option value="ocio"> Ocio </option>
                    <option value="comida"> Comida </option>
                    <option value="casa"> Casa </option>

               </select>
            </div>
            <input type="submit" value={gastoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"} />
        </form>
    </div>

  )
}

export default Modal