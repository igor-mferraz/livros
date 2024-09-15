type props = {
    text: string;
    type: "submit" | "button" | "reset"
    onClick?: () => void;
    color: 'bg-green-700' | 'bg-red-700' | 'bg-bgBtnDefault' | 'transparent'
    border?: boolean
}


export const Button = ({text, onClick, type, color, border}:props) => {
    return(
        <button className={`${color} px-4 p-2 rounded-xl font-bold w-full ${border ? 'border border-BorderColor':''} `} type={type} onClick={onClick}>
            {text}
        </button>
    )
}