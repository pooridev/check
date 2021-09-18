import styled from "styled-components"
import { useState } from "react"

import { TASKS_LIST } from "../constants/tasks"
import { theme } from "../components/styles/ThemeStyles"
import Icon from "../components/shared/Icon"
import TaskCard from "../views/tasks/TaskCard"

export default function Home() {
  const [tasks, setTasks] = useState(TASKS_LIST)
  const [isAddMode, setIsAddMode] = useState<boolean>(false)

  const handleChangeComplete = (id: string) => {
    const allTasks = [...tasks]
    const task = allTasks.find(task => task.id === id)

    if (task?.completed !== undefined) task.completed = !task.completed
    setTasks(allTasks)
  }

  return (
    <>
      <Wrapper>
        <Header>
          <Icon name="Inbox" />
          <Title>Inbox</Title>
        </Header>

        <AddTaskCard onClick={() => setIsAddMode(true)}>
          <AddTaskButton>
            <Icon name="Add" />
          </AddTaskButton>
          <AddTaskTitle>Add Task</AddTaskTitle>
        </AddTaskCard>

        <TasksListWrapper>
          {TASKS_LIST.map(task => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              date={task.date}
              file={task.file}
              completed={task.completed}
              priority={task.priority}
              onComplete={handleChangeComplete}
            />
          )).reverse()}
        </TasksListWrapper>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 650px;
`

const Header = styled.header`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
`

const Title = styled.h1`
  font-size: 1.5rem;
`

const AddTaskCard = styled.div`
  margin: 1rem 0;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  background: ${theme.colors.black300};
  user-select: none;
  cursor: pointer;
`

const AddTaskButton = styled.button`
  display: grid;
  place-items: center;
`

const AddTaskTitle = styled.p`
  flex: 1;
  color: ${theme.colors.white300};
`

const TasksListWrapper = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`
