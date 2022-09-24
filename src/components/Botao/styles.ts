import styled from "styled-components"

interface CoresBotao {
    [key: string]: string;
}

const coresBotao: CoresBotao = {
    default: "white",
    alert: "yellow",
    danger: "red"
}


interface BotaoDefaultProps{
    cor: string;
}

export const BotaoDefault = styled.button<BotaoDefaultProps>`
    border-radius: 0px 5px 5px 0px;
    border-style: solid;
    border-left: 0;
    border-color: rgba(184, 3, 255, 0.5);
    color: ${(props) => coresBotao[props.cor]};
    width: 25%;
    font-weight: 20px;
    font-size: 20px;
    text-shadow: 2px 1px 2px purple;
    background: rgb(193, 68, 227);
    background: -moz-linear-gradient(273deg, rgba(193, 68, 227, 1) 0%, rgba(186, 111, 178, 0.8743872549019608) 49%, rgba(255, 255, 255, 1) 100%);
    background: -webkit-linear-gradient(273deg, rgba(193, 68, 227, 1) 0%, rgba(186, 111, 178, 0.8743872549019608) 49%, rgba(255, 255, 255, 1) 100%);
    background: linear-gradient(273deg, rgba(193, 68, 227, 1) 0%, rgba(186, 111, 178, 0.8743872549019608) 49%, rgba(255, 255, 255, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c144e3", endColorstr="#ffffff", GradientType=1);
    &:hover{
        cursor: pointer;
    }

`