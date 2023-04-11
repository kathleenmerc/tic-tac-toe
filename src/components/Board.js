import Square from "./Square"

export default function Board ({ squares, onClick }) {
    return (
        <div className="board">

            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}

        </div>
    )
}






/* 
NOTES

Instead of typing out each square, use the map function shown above

    <Square value="0" onClick={() => onClick("click function")} />
    <Square value="1" onClick={() => onClick("click function")} />
    <Square value="2" onClick={() => onClick("click function")} />
    <Square value="3" onClick={() => onClick("click function")} />
    <Square value="4" onClick={() => onClick("click function")} />
    <Square value="5" onClick={() => onClick("click function")} />
    <Square value="6" onClick={() => onClick("click function")} />
    <Square value="7" onClick={() => onClick("click function")} />
    <Square value="8" onClick={() => onClick("click function")} /> 
    
*/