import { useState,useEffect } from "react"

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">

        <form action="">

            <div className="campo">
                <label htmlFor="">Filtrar Gastos</label>

                <select name="" id="" value={filtro} onChange={e => setFiltro(e.target.value)}>

                    <option value="">-- Todas las categorias --</option>
                    <option value="ahorro"> Ahorro </option>
                    <option value="salud"> Salud </option>
                    <option value="servicios"> Servicios </option>
                    <option value="ocio"> Ocio </option>
                    <option value="comida"> Comida </option>
                    <option value="casa"> Casa </option>
                </select>
            </div>


        </form>
    </div>
  )
}

export default Filtros