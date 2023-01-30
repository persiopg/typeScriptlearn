import Botao from "../Botao";
import style from './Cronometro.module.scss'
import Relogio  from "./Relogio";

export function Cronometro (){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escoha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}