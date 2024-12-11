import styled from "styled-components";

export const TodoListsContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
  }
`;

export const TodoListWrapper = styled.div`
min-width: 550px;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  position: sticky;
@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 10px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 20vh;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 20vh;
  }
`;

export const TodoTaskCheckBox = styled.div`
  margin: 5px;
`;

export const TodoTaskDefault = styled.div`
  display: flex;
  width: 527px;
  height: 50px;
  border-radius: 27px;
  margin: 10px 0;
  padding: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors.slate900};
  align-items: center;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    font-size: 12px;
    padding: 6px;
  }
`;

export const TodoTaskDone = styled(TodoTaskDefault)`
  background-color: ${({ theme }) => theme.colors.violet100};
`;


export const TodoImage = styled.div`
width: 240px;
  height: 240px;
  background-image: url("/Type=Todo, Size=Large.svg");
  background-size: cover;
  background-position: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-image: url("/Type=Todo, Size=Small.svg");
  }
`

export const DoneImage = styled.div`
width: 240px;
  height: 240px;
  background-image: url("/Type=Done, Size=Large.svg");
  background-size: cover;
  background-position: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-image: url("/Type=Done, Size=Small.svg");
  }
`

export const EmptyTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  text-align: center;
  color: #999;

  p {
    margin-top: 10px;
    font-size: 16px;
  }
`;
