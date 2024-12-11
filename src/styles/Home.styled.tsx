import styled from "styled-components";

export const TodoAddContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const SearchBar = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 56px;
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.colors.slate900};
  box-shadow: 5px 5px;
  display: flex;
  align-items: center;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 518px; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 280px;
  }
`;

export const StyledInput = styled.input`
  width: 95%;
  height: 100%;
  position: absolute;
  padding: 0 25px;
  border: none;
  outline: none;
  background-color: transparent;
  font-family: "NanumSquare", sans-serif;
  overflow: hidden;
  align-items: center;
  font-size: 16px;
`;