import React, { useState, useEffect } from "react";
import todoApi from "@/pages/api/todoApi";
import * as B from "@/styles/Button.styled";
import * as S from "@/styles/TaskDetail.styled";
import Image from "next/image";

interface ImageUploaderProps {
  onImageUpload: (url: string) => void; // 부모 컴포넌트로 url 전달
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // 영문 파일 이름 검증 
    const fileName = file.name;
    const isEnglishOnly = /^[a-zA-Z0-9_.-]+$/.test(fileName);
    if (!isEnglishOnly) {
      setError("파일 이름은 영문, 숫자, _, ., -만 허용됩니다.");
      return;
    }

    // 이미지 파일인지 검증
    if (!file.type.startsWith("image/")) {
      setError("이미지 파일만 업로드 가능합니다.");
      return;
    }

    // 파일 크기 검증
    if (file.size > 5 * 1024 * 1024) {
      setError("파일 크기는 5MB 이하여야 합니다.");
      return;
    }

    setError(null);
    setIsUploading(true);

    try {
      // 서버로 파일 업로드
      const formData = new FormData();
      formData.append("image", file);

      const response = await todoApi.uploadImage("qkrco", formData);
      console.log(response);

      const url = response.url;

      setImageUrl(url);
      onImageUpload(url); // 부모 컴포넌트로 전달
    } catch (error) {
      setError("이미지 업로드에 실패했습니다.");
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  useEffect(() => {
    if (imageUrl) {
      console.log("Updated imageUrl:", imageUrl);
    }
  }, [imageUrl]);

  return (
    <div>
      <S.FileInputWrapper>
        <div>
          {imageUrl && imageUrl.length > 0 ? (
            <>
              <B.ImageEditBtn>
                <Image
                  src="/Type=Edit.svg"
                  alt="image edit"
                  width={64}
                  height={64}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </B.ImageEditBtn>
            </>
          ) : (
            <>
              <B.ImageAddBtn>
                <Image
                  src="/Type=Plus.svg"
                  alt="image upload"
                  width={64}
                  height={64}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </B.ImageAddBtn>
            </>
          )}
        </div>
        {isUploading && <p>이미지를 업로드 중입니다...</p>}
      </S.FileInputWrapper>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ImageUploader;
