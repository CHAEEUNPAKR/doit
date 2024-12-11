import styled from "styled-components";

export const Icon = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 20px;
    cursor: pointer;
`

export const emptyIcon = styled(Icon).attrs({
    src: "/empty.svg",
    alt: "empty",
})``

export const checkedIcon = styled(Icon).attrs({
    src: "/checked.svg",
    alt: "checked",
})``