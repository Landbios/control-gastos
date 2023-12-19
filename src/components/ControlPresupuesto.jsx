import { useState,useEffect } from "react"
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, gastos, setGastos, setPresupuestos,setIsvalid}) => {


    const [porcentaje,setPorcentaje] = useState(0)
    const [disponible,setDisponible] = useState(0)
    const [gastado,setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total,gasto) => gasto.cantidad + total,0)
        const totalDisponible = presupuesto - totalGastado

        const NuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto ) * 100).toFixed(2)

        setTimeout(() => {

            setPorcentaje(NuevoPorcentaje)
            
            
        }, 1500);
        
        setGastado(totalGastado)
        setDisponible(totalDisponible)
    }, [gastos])

    const FormatearCantidad = (cantidad) =>{
        return cantidad.toLocaleString('en-US',{
            style:'currency',
            currency: 'USD'
        })
       
    }

    const handleResetApp = () => {

        const confirmar = confirm('Deseas resetear la app?');

        if( resultado){
            setGastos = {};
            setPresupuestos = 0;
            setIsvalid = false;
        }
    }


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
            styles={buildStyles({
                pathColor:porcentaje > 100 ? '#DC2626' : '#3b82f6',
                trailColor:'#f5f5f5',
                textColor:'#3b82f6'

            })}
            value={porcentaje}
            text={`${porcentaje}% Gastado`}
            
            
            />
        </div>
        <div className='contenido-presupuesto'>
            <button className="reset-app" type="buttonn" onClick={handleResetApp}>Resetea App</button>
            <p>
                <span>Presupuesto: </span> {FormatearCantidad(presupuesto)}
            </p>
            <p className={disponible < 0 ? 'negativo' : ''}>
                <span>Disponible: </span> {FormatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {FormatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto