import React, {useState} from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import { Cronometro } from '../components/Cromnometro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] >([]);
  const [selecionando, setSelecionando ] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
      setSelecionando(tarefaSelecionada);
      
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ?true : false
      })) );
  }
function finalizarTarefa(){
  if(selecionando){
    setSelecionando(undefined);
    setTarefas(tarefasAnteriores => 
      tarefasAnteriores.map(tarefa =>{
        if(tarefa.id === selecionando.id){
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
        }
        return tarefa;
      })
    )
  }
}
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        selecionaTarefa={selecionaTarefa} 
        tarefas={tarefas}
      />
      <Cronometro 
        selecionando={selecionando} 
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
