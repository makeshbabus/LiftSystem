import React from "react";

export const LiftMove=()=>{
    const [currentPosition, setCurrentPosition] = React.useState(5);
    const [liftDirection, setLiftDirection] = React.useState("up");

    const handleClick=(liftTo:number)=>{
        if(liftTo>currentPosition){
            setLiftDirection("up");
            let i =currentPosition;
            setTimeout(function go() {
                if (i < liftTo) {
                  setTimeout(go, 1000);
                }
                if(i===liftTo){
                    setLiftDirection("");
                }
                setCurrentPosition(i);
                i++;
              }, 1000);
        }
        if(liftTo<currentPosition){
            setLiftDirection("down");
            let j =currentPosition;
            setTimeout(function go() {
                if (j > liftTo) {
                  setTimeout(go, 1000);
                }
                if(j===liftTo){
                    setLiftDirection("");
                }
                setCurrentPosition(j);
                j--;
              }, 1000);
        }
    }

    return(
        <div>
            <div>
                <div className={liftDirection==="up"? "selectedUp" : "arrowKeyUp"}></div><br/>
                <div>{currentPosition}</div><br/>
                <div className={liftDirection==="down"? "selectedDown" : "arrowDown"}></div>
            </div>

            <div className="container">      
            { [0,1,2,3,4,5,6,7,8,9].map((position,index)=>{
                    return <div key={index} 
                    className={!liftDirection && currentPosition === position ? "itemSelected":"item"} 
                    onClick={()=>handleClick(position)}>{position}</div>
                })}
            </div>
    </div>
    );
}