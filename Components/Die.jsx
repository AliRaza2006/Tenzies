export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    const pattern={
        1:[4],
        2:[0,8],
        3:[0,4,8],
        4:[0,2,6,8],
        5:[0,2,4,6,8],
        6:[0,2,3,5,6,8]
    }
    return (
        <button 
            style={styles}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
        >
            {(()=>{
                const spans=[]
                for(let i=0;i<9;i++)
                {
                    if(pattern[props.value].includes(i))
                    spans.push(<span className="dot"></span>)
                    else
                    spans.push(<span></span>)   
                }
                return spans
            })()}
        </button>
    )
}