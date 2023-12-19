import { useState,useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import Filtros from './components/Filtros'


import {generarId} from './helpers'
import IconoNuevo from './img/nuevo-gasto.svg'



function App() {
 
  const [presupuesto,setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0);
  const [isvalid, setIsvalid] = useState(false);
  const [modal,setModal] = useState(false)
  const [AnimModal, setAnimModal] = useState(false)
  const [gastos,setGastos] = useState( localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [] )
  const [gastoEditar,setgastoEditar] = useState({})
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  const GuardarGasto = gasto =>{

    if(gasto.id){

      const GastoActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
        setGastos(GastoActualizado)
    }
    else{
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    

    }
    setAnimModal(false)
    setTimeout(() =>{
        setModal(false)
    },400)
    setgastoEditar({})
   
  }

  const eliminarGasto = id =>{

    const GastoActualizado = gastos.filter(gasto => gasto.id !== id);
    setGastos(GastoActualizado)
  }
  
  useEffect(() => {
    
  
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
      setTimeout(() =>{
        setAnimModal(true)
    },400)
    }
  }, [gastoEditar])
  


  const handleNuevoGasto = () => {
    setModal(true)
    setgastoEditar({})
    setTimeout(() =>{
      setAnimModal(true)
  },400)
  }

  
  useEffect(() => {

    localStorage.setItem('presupuesto',presupuesto ?? 0)
    console.log(presupuesto);
    
    }, [presupuesto])
    
  useEffect(() => {
    if (Number(localStorage.getItem('presupuesto')) > 0 ){

      setIsvalid(true);
    }

  },[]) 

  useEffect(() => {
    if(filtro){
      const GastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro);
     setGastosFiltrados(GastosFiltrados);
    }

  },[filtro]) 

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])

  }, [gastos])
  
  return (
    <div className={modal ? 'fijar' : ''}>
      
      <Header
        gastos = {gastos} 
        setGastos = {setGastos}
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isvalid = {isvalid}
        setIsvalid = {setIsvalid}
      
      />
      {isvalid && (
        <>
          <main>
            <Filtros
              filtro = {filtro}
              setFiltro = {setFiltro}
            />
            <ListadoGastos
            
            gastos = {gastos}
            setgastoEditar = {setgastoEditar}
            eliminarGasto = {eliminarGasto}

            gastosFiltrados = {gastosFiltrados}
            filtro = {filtro}
            />

          </main>
  
          <div className='nuevo-gasto'>
            <img src={IconoNuevo} alt="icono-nuevo" onClick={handleNuevoGasto} />
          </div>

        </>
        
      )}

      {modal && (
      
        <Modal 
      
          setModal = {setModal}
          AnimModal = {AnimModal}
          setAnimModal = {setAnimModal}
          GuardarGasto ={GuardarGasto}
          gastoEditar = {gastoEditar}
          setgastoEditar = {setgastoEditar}
       
        
        />
      )}
      
    </div>
  )
}

export default App
