import React from 'react'
import { SwipeableList, LeadingActions,SwipeableListItem,SwipeAction,TrailingActions } from 'react-swipeable-list'


import { FormatearFecha } from '../helpers'
import "react-swipeable-list/dist/styles.css"
import IconoServicios from '../img/icono_suscripciones.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoSalud from '../img/icono_salud.svg'




const Gasto = ({gasto,setgastoEditar,eliminarGasto}) => {
  const {categoria,nombre,cantidad,id,fecha} = gasto

  const diccionarioIconos = {
    ahorro:IconoAhorro,
    salud:IconoSalud,
    servicios:IconoServicios,
    ocio:IconoOcio,
    comida:IconoComida,
    casa:IconoCasa
  }

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => {
        
        setgastoEditar(gasto)
        
      }}>
        Editar
      </SwipeAction>


    </LeadingActions>
  )
  const trailingActions = () => (
    <TrailingActions>

      <SwipeAction onClick={() => eliminarGasto(id)}
      destructive= {true}
      
      >
        Eliminar
      </SwipeAction>

    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      
      >
          <div className='gasto sombra'>
            <div className='contenido-gasto'>
              <img src={diccionarioIconos[categoria]} alt="Icono Categoria" />
              <div className='descripcion-gasto'>
                <p className='categoria'>
                  {categoria}
                </p>
                <p className='nombre-gasto'>
                  {nombre}
                </p>
                <p className='fecha-gasto'>
                  Agregado el {''}
                  <span>{FormatearFecha(fecha)}</span>

                </p>
              </div>
              
            </div>
            <p className='cantidad-gasto'>${cantidad}</p>
          </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto