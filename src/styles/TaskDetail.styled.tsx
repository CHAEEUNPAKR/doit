import styled from "styled-components";

export const InputCheckContainer = styled.div<{ isCompleted: boolean }>`
    display: flex;
    position: relative;
    width: 996px;
    height: 64px;
    border-radius: 24px;
    border: 2px solid ${({ theme }) => theme.colors.slate900};
    align-items: center;
    justify-content: center;
    background-color: ${({ isCompleted, theme }) =>
    isCompleted ? theme.colors.violet100 : "white"};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
  }
`

export const CheckboxWrapper = styled.div`
    display: flex;
    margin-right: 10px;
`

export const NameInputWrapper = styled.div`
    width: auto;
    display: flex;
`

export const NameInput = styled.input`
width: auto;
border: none;
font-size: 20px;
background-color: transparent;
outline: none;
overflow: hidden;

@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
}

`
export const ImageMemoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const ImageView = styled.div`
    display: flex;
    position: relative;
    width: 384px;
    height: 311px;
    border-radius: 24px;
    border: 2px dashed ${({ theme }) => theme.colors.slate300};
    background-color: ${({ theme }) => theme.colors.slate100};
    overflow: hidden;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    height: auto;
    aspect-ratio: 4/2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
  }
`

export const TaskImage = styled.img`
    width: 100%;
    height: 100%;
    z-index: 9999;
    object-fit: cover;
`

export const FileInputWrapper = styled.div`
  input[type="file"] {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
export const MemoContainer = styled.div`
    display: flex;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    margin: 10px 0;
  }

`

export const MemoTextarea = styled.textarea`
    display: flex;
    position: relative;
    width: 588px;
    height: 311px;
    padding: 10%;
    box-sizing: border-box;
    border-radius: 24px;
    border: none;
    outline: none;
    background-image: url("/memo.svg");
    font-family: 'NanumSquare', sans-serif;
    font-size: 16px;
    resize: none;
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    height: auto;
    aspect-ratio: 4/2;
  }
`

export const MemoTitle = styled.div`
display: flex;
position: absolute;
left: 45%;
top: 8%;
font-size: 16px;
font-weight: bold;
    color: ${({ theme }) => theme.colors.amber800};
z-index: 9999;
`

export const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
    align-items: center;
  }
`

