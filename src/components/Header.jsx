import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'



const Header = ({
    presupuesto, 
    setPresupuesto,
    isvalid,
    setIsvalid,
    gastos,
    setGastos
  }) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {isvalid ? (
            <ControlPresupuesto
              gastos = {gastos}
              setGastos = {setGastos}
              presupuesto = {presupuesto}
              setPresupuesto = {setPresupuesto}
              setIsvalid = {setIsvalid}
            />
        ) : 
        (
            <NuevoPresupuesto
              presupuesto = {presupuesto}
              setPresupuesto = {setPresupuesto}
              setIsvalid = {setIsvalid}
            />

        )}
        
    </header>
  )
}

export default Header