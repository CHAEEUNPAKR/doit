import styled from "styled-components";

export const BtnStyle = styled.div`
    height: 56px;
    border-radius: 24px;
    border: 2px solid ${({ theme }) => theme.colors.slate900};
    box-shadow: 5px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`

export const BtnLarge = styled(BtnStyle)`
    width: 168px;
    margin: 10px;
`

export const AddBtnLarge = styled(BtnLarge)`
    background-color: ${({ theme }) => theme.colors.slate200};
    box-shadow: 5px 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 56px;
    max-height: 56px;
    border-radius: 24px;
    font-size: 0; /* 텍스트 숨기기 */
  }

    &:active{
        background-color:${({ theme }) => theme.colors.violet600};
    }

`
export const DeleteBtnLarge = styled(BtnLarge)`
    background-color: ${({ theme }) => theme.colors.rose500};
`

export const EditBtnLarge = styled(BtnLarge)`
    background-color: ${({ theme }) => theme.colors.slate200};
    &:active{
        background-color:${({ theme }) => theme.colors.lime300};
    }
`

export const ImageAddBtn = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  position: absolute;
  background-color: transparent;
  right: 10px;
  bottom: 10px;
`
export const ImageEditBtn = styled.button`
    border: none;
    display: flex;
    position: absolute;
  background-color: transparent;
  right: 10px;
  bottom: 10px;
  z-index: 99999;
`