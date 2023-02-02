import React, {useState} from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import { Cronometro } from '../components/Cromnometro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTaferas] = useState<ITarefa[] >([]);
  const [selecionando, setSelecionando ] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
      setSelecionando(tarefaSelecionada);
      
      setTaferas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ?true : false
      })) );
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTaferas={setTaferas}/>
      <Lista selecionaTarefa={selecionaTarefa} tarefas={tarefas}/>
      <Cronometro selecionando={selecionando}/>
    </div>
  );
}

export default App;
