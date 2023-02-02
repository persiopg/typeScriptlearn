import { tempoParaSegundo } from "../../common/utils/time";
import React, {useState,useEffect} from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from './Cronometro.module.scss'
import Relogio  from "./Relogio";

interface Props {
    selecionando:ITarefa | undefined
}


export function Cronometro ({selecionando}: Props){
    const [tempo, setTempo] = useState<number>()
    useEffect(() => {
        if(selecionando?.tempo){
        setTempo(tempoParaSegundo(selecionando.tempo));
    }
    }, [selecionando])
    function regressiva(contador:number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador -1);
                return regressiva(contador-1);
            }
            
        }, 1000);
    }
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escoha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar
            </Botao>
        </div>
    )
}