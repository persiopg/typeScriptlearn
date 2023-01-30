import React,{useState} from 'react';
import style from './Lista.module.scss'
import Item from "./Item";

function Lista(){
    const [tarefas, setTaferas] = useState([{
        tarefa:"React",
        tempo: "02:00:00"
    },
    {
        tarefa:"javascript",
        tempo: "01:00:00"
    },
    {
        tarefa:"Typescript",
        tempo: "03:00:00"
    }
]);

    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={()=> {
                setTaferas([...tarefas,{tarefa:"Estudar estado" , tempo: "05:00:00"}])
            }}> Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}
export default Lista;