import * as B from "@/styles/Button.styled"

export const AddButton = (props: { onClick: () => void }) => {
    return (
        <B.AddBtnLarge onClick={props.onClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8L14 8" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 14L8 2" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div style={{ marginLeft: "5px" }}>추가하기</div>
        </B.AddBtnLarge >
    )
}

// export const AddButtonSmall = (props: { onClick: () => void }) => {
//     return (
//         <B.SmallAddBtn onClick={props.onClick}>
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M2 8L14 8" stroke="black" strokeWidth="2" strokeLinecap="round" />
//                 <path d="M8 14L8 2" stroke="black" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//         </B.SmallAddBtn >
//     )
// }

export const DeleteButton = (props: { onClick: () => void }) => {
    return (
        <B.DeleteBtnLarge onClick={props.onClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 4L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div style={{ marginLeft: "5px", color: "white" }}>삭제하기</div>
        </B.DeleteBtnLarge >
    )
}

export const EditButton = (props: { onClick: () => void }) => {
    return (
        <B.EditBtnLarge onClick={props.onClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7L6.5 11.5L14 4" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div style={{ marginLeft: "5px" }}>수정 완료</div>
        </B.EditBtnLarge >
    )
}
