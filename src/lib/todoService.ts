import todoApi from "@/pages/api/todoApi";
import { Task } from "@/interface/task";

export const handleTaskStatus = async (task: Task) => {
  // 할 일 상태 변경 함수

  try {
    // isComplete 상태를 true로 업데이트
    const updatedTask: Task = await todoApi.editTask(
      "qkrco",
      task.id,
      task.name || "",
      task.memo || "",
      task.imageUrl || "",
      task.isCompleted // 상태 변경
    );
    return updatedTask;
  } catch (error) {
    console.error("Failed to update task", error);
  }
};
