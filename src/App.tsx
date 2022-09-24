import React, { useEffect, useState } from 'react';
import Botao from './components/Botao';
import TaskContainer from './components/TaskContainer';
import TaskItem from './components/TaskItem';
import "./styles/style.css";
import { useDispatch } from 'react-redux'
import { removeUser, setUser } from './store/modules/user';

interface Tarefa {
  titulo: string;
  done: boolean;
}

function App() {

  const [tarefas, setTarefas] = useState<Tarefa[]>([])
  const [tituloTarefa, setTituloTarefa] = useState<string>("")
  const dispatch = useDispatch();

  function adicionarTarefa(event: React.FormEvent) {
    event.preventDefault();

    if (tituloTarefa !== '') {
      setTarefas([...tarefas,
      {
        titulo: tituloTarefa,
        done: false
        }])
      setTituloTarefa("")
    }

  }

  function concluirTarefa(posicao: number) {
    const novaLista = [...tarefas]; // se passar o tarefas direto ele ao inves de copiar, ele aponta pro end de memoria de tarefas
    novaLista[posicao].done = !(novaLista[posicao].done)
    setTarefas(novaLista)
    dispatch(setUser({
      token: "tokenzinho",
      email:"email@email.com"
    }))
  }

  const excluirTarefa = (posicao: number)=>{
    const novaLista = [...tarefas];
    novaLista.splice(posicao, 1);
    setTarefas(novaLista)

    dispatch(removeUser({}))
  }

  useEffect(() => {
  

  }, [tarefas])

  return (
    <main className='container'>
      <h1 className='title'>📝 Lista de Tarefas</h1>
      <form id='new-task' className='new-task' onSubmit={adicionarTarefa}>
        <input type="text" className='input-task' id="inputTask" value={tituloTarefa} onChange={(e) => setTituloTarefa(e.target.value)} />
        <Botao texto='Add' cor='default' />
      </form>
      <TaskContainer>
        {
          (tarefas.length > 0) ? tarefas.map((tarefa, index) => <TaskItem titulo={tarefa.titulo} done={tarefa.done} excluirTarefa={() => excluirTarefa(index) } concluirTarefa={() => concluirTarefa(index)} />) : "Nao há tarefas"
        }
      </TaskContainer>

    </main>
  );
}

export default App;
