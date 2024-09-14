type props = {
    text: string;
    type: "submit" | "button" | "reset"
    onClick?: () => void;
    color: 'bg-green-700' | 'bg-red-700' | 'bg-bgBtnDefault'
}


export const Button = ({text, onClick, type, color}:props) => {
    return(
        <button className={`${color} px-4 p-2 rounded-xl font-bold w-full`} type={type} onClick={onClick}>
            {text}
        </button>
    )
}