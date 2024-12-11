import { useState, useEffect } from "react";
import { TaskList } from "@/components/task/TaskList";
import * as S from "../styles/Home.styled";
import todoApi from "./api/todoApi";
import { Task } from "@/interface/task";
import { AddButton } from "@/components/ui/Buttons";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");

  //task 데이터 가져오기
  const fetchTasks = async () => {
    try {
      const data = await todoApi.getTasks("qkrco"); // tenantId = "qkrco"
      setTasks(data);
      console.log(data);
    } catch (error) {
      console.error("데이터를 가져오는데 실패했습니다,", error);
    }
  };

  //todo 추가
  const handleAddTodo = async () => {
    if (!taskName.trim()) return;

    try {
      const newTask = await todoApi.addTask(taskName, "qkrco");
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskName("");
    } catch (error) {
      console.error("할 일이 등록되지 않았습니다.", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      <S.TodoAddContainer>
        <S.SearchBarWrapper>
          <S.SearchBar>
            <S.StyledInput
              type="text"
              value={taskName}
              placeholder="할 일을 입력해주세요"
              onChange={(e) => setTaskName(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </S.SearchBar>
        </S.SearchBarWrapper>
        <AddButton
          onClick={handleAddTodo}

        />
      </S.TodoAddContainer>
      <TaskList tasks={tasks} setTasks={setTasks} />
      {/* TaskList에 tasks를 전달 */}
    </div>
  );
}
