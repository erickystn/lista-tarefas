
interface TaskContainerProps{
    children: JSX.Element | JSX.Element[] | string
}


export default function TaskContainer(props: TaskContainerProps) {
    return (<ul className="list-items">{ props.children }</ul>)
}