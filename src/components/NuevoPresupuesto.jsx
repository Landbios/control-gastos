import { useState } from "react";
import Mensaje from "./Mensaje";



const NuevoPresupuesto = ({
        presupuesto,
        setPresupuesto,
        setIsvalid
}) => {
    const [mensaje,setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if(!(presupuesto) || (presupuesto) < 0){
        setMensaje('No es un presupuesto valido')
        return
    }
    
        setMensaje('');
        setIsvalid(true);
    
  }
  return (
    <div className='contenedor-presupuesto sombra contenedor'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label htmlFor="" >Definir Presupuesto</label>
                <input 
                    type="number" 
                    className='nuevo-presupuesto' 
                    placeholder='añade tu presupuesto'
                    value={presupuesto}
                    onChange={e => setPresupuesto(Number(e.target.value))} />
            </div>
            <input type="submit" value="Añadir" />
            {mensaje && <Mensaje tipo="error" >{mensaje}</Mensaje>}


        </form>
    </div>
  )
}

export default NuevoPresupuesto