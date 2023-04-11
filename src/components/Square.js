export default function Square({ value, onClick }) {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}




/* 
NOTES

// Destructuring props breakdown

const props = {
    onClick: () => "function",
    value: "X"
}

const { value } = props

*/