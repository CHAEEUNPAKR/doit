import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import todoApi from "@/pages/api/todoApi";
import { Task } from "@/interface/task";
import ImageUploader from "@/components/image/ImageUplaod";
import Image from "next/image";
import * as S from "@/styles/TaskDetail.styled"
import { EditButton, DeleteButton } from "@/components/ui/Buttons";

const TaskDetailPage = () => {
  const router = useRouter();
  const { query, isReady } = useRouter(); // isReady로 query가 초기화되었는지 확인
  const itemId = query.itemId;

  const [taskDetail, setTaskDetail] = useState<Task>();
  const [name, setName] = useState("");
  const [memo, setMemo] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const fetchTaskDetail = async (itemId: number) => {
    try {
      const data = await todoApi.getTaskDetail("qkrco", itemId);
      setTaskDetail(data);

    } catch (error) {
      console.error("데이터를 가져오는데 실패했습니다,", error);
    }
  };

  const EditTaskDetail = async () => {
    try {
      const updatedData = await todoApi.editTask(
        "qkrco",
        Number(itemId),
        name,
        memo,
        taskDetail?.imageUrl || imageUrl,
        isCompleted
      );
      setTaskDetail(updatedData); // 수정 후 상태
      router.push("/");
      console.log(updatedData);

    } catch (error) {
      console.error("수정에 실패했습니다", error);
    }
  };

  const handleImageUpload = (url: string) => {
    setImageUrl(url);
  };

  const handledeleteTask = async () => {
    try {
      const message = await todoApi.deleteTask("qkrco", Number(itemId));
      console.log(message);
      router.push("/");

    } catch (error) {
      console.error("삭제에 실패했습니다", error);
    }
  }

  useEffect(() => {
    if (isReady && itemId) {
      // itemId가 준비되었을 때만 호출
      fetchTaskDetail(Number(itemId));
    }
  }, [isReady, itemId]);

  useEffect(() => {
    if (taskDetail) {
      setName(taskDetail.name || ""); // name이 없으면 빈 문자열로 설정
      setMemo(taskDetail.memo || ""); // memo가 없으면 빈 문자열로 설정
      setIsCompleted(taskDetail.isCompleted); // isComplete가 없으면 false로 설정
      setImageUrl(taskDetail.imageUrl || "")
    }
  }, [taskDetail]);

  if (!isReady || !itemId) {
    return <div>Loading...</div>; // 데이터가 준비되기 전 로딩 화면 표시
  }

  return (
    <main>
      {taskDetail ? (
        <div>
          <S.InputCheckContainer isCompleted={isCompleted}>
            <S.CheckboxWrapper>
              <Image
                src={isCompleted ? "/checked.svg" : "/empty.svg"}
                alt={isCompleted ? "checked" : "empty"}
                width={32}
                height={32}
                onClick={() => setIsCompleted((prev) => !prev)} // 상태 토글
                style={{ cursor: "pointer" }}
              />
            </S.CheckboxWrapper>
            <S.NameInputWrapper>
              {
                !isCompleted ? (
                  <>
                    <S.NameInput
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="할 일을 입력해주세요"
                      style={{ textDecoration: "underline" }}
                    />
                  </>) : (
                  <>
                    <S.NameInput
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="할 일을 입력해주세요"
                      style={{ textDecoration: "line-through" }}
                    />
                  </>)
              }

            </S.NameInputWrapper>
          </S.InputCheckContainer>

          <S.ImageMemoContainer>
            <S.ImageView>
              <Image src="/img.svg" width={64} height={64} alt="img" />
              {imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <S.TaskImage
                  src={imageUrl}
                  alt="Preview"
                />
              )}
              <ImageUploader onImageUpload={handleImageUpload} />
            </S.ImageView>
            <S.MemoContainer>
              <S.MemoTitle>Memo</S.MemoTitle>
              <S.MemoTextarea
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="Memo"
              >
              </S.MemoTextarea>
            </S.MemoContainer>
          </S.ImageMemoContainer>
          <S.ButtonsContainer>
            <EditButton onClick={EditTaskDetail} />
            <DeleteButton onClick={handledeleteTask} />
          </S.ButtonsContainer>
        </div>
      ) : (
        <p>로딩중...</p>
      )
      }
    </main >
  );
};

export default TaskDetailPage;
