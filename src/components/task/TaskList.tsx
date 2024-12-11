import React from "react";
import * as S from "@/styles/TaskList.styled";
import * as I from "@/styles/Icon.styled";
import Image from "next/image";
import { Task } from "@/interface/task";
import Link from "next/link";
import { handleTaskStatus } from "@/lib/todoService";

export interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  // 할 일 상태 변경 함수
  const handleCompleteTask = async (task: Task) => {
    try {
      // isComplete 상태를 true로 업데이트
      const updatedTask = await handleTaskStatus(task);
      // 상태 업데이트
      setTasks((prevTasks) =>
        prevTasks.map((t) =>
          t.id === updatedTask!.id ? { ...t, isCompleted: !t.isCompleted } : t
        )
      );
    } catch (error) {
      console.error("Failed to update task", error);
    }
  };

  return (
    <S.TodoListsContainer>
      {/* 할 일 */}
      <S.TodoListWrapper>
        <Image
          src="/todo.svg"
          alt="todo"
          width={101}
          height={36}
          style={{ margin: "10px 0" }}
        />
        {tasks.filter((task) => !task.isCompleted).length > 0 ? (
          tasks
            .filter((task) => !task.isCompleted)
            .map((task) => (
              <S.TodoTaskDefault key={task.id}>
                <I.emptyIcon
                  onClick={() => handleCompleteTask(task)} // 상태 변경 핸들러
                />
                <Link
                  href={{
                    pathname: "/tasks/[slug]",
                    query: { slug: task.id },
                  }}
                >
                  {task.name}
                </Link>
              </S.TodoTaskDefault>
            ))
        ) : (
          <S.EmptyTaskContainer>
            <S.TodoImage />
            <p>할 일이 없어요.</p>
            <p>TODO를 새롭게 추가해주세요!</p>
          </S.EmptyTaskContainer>
        )}
      </S.TodoListWrapper>

      {/* 다한 일 */}
      <S.TodoListWrapper>
        <Image
          src="/done.svg"
          alt="done"
          width={97}
          height={36}
          style={{ margin: "10px 0" }}
        />
        {tasks.filter((task) => task.isCompleted).length > 0 ? (
          tasks
            .filter((task) => task.isCompleted)
            .map((task) => (
              <S.TodoTaskDone key={task.id}>
                <I.checkedIcon
                  onClick={() => handleCompleteTask(task)}
                />
                <Link
                  href={{
                    pathname: "/tasks/[slug]",
                    query: { slug: task.id },
                  }}
                >
                  <div style={{ textDecoration: "line-through" }}>
                    {task.name}
                  </div>
                </Link>
              </S.TodoTaskDone>
            ))
        ) : (
          <S.EmptyTaskContainer>
            <S.DoneImage />
            <p>아직 다 한 일이 없어요.</p>
            <p>해야 할 일을 체크해 보세요!</p>
          </S.EmptyTaskContainer>
        )}
      </S.TodoListWrapper>
    </S.TodoListsContainer>
  );
};
