import { useEffect, useState } from "react"

export default function History(props) {
    return(
        <div className="w-[30vw] h-[100vh] bg-[#555353e1]">
            <h2 className="text-[25px] font-bold text-center py-5 shadow-xl">History</h2>
            {
                props.name.map(
                    (d,i)=>{
                        return(
                        <Element data={d} key={i} hist={props.gethistory} ></Element>
                        )
                    }
                )
            }
        </div>

    )
}
function Element(props) {
       
    return(
       
        <div className="text-center text-[25px] p-5 my-2 cursor-pointer hover:text-[#51a1fc] hover:shadow-lg" onClick={()=>{props.hist(props.data)}}>{props.data}</div>
    )
}