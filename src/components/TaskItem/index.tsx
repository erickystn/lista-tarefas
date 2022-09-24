import { Item } from "./styles";

interface TaskItemProps {
    titulo: string;
    done: boolean;
    concluirTarefa: () => void;
    excluirTarefa: () => void;
}


export default function TaskItem(props: TaskItemProps) {
    return (
        <Item done={props.done}>
            <span className="seletor" onClick={props.excluirTarefa}> ❌ </span>
            <p>{props.titulo}</p>
            <span className="seletor" onClick={props.concluirTarefa}> ✅ </span>
        </Item>
    )
}