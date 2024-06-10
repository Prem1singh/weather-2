import { useEffect, useState } from "react"

export default function Input(props) {
    const [name,setname]=useState('')
    const [help,sethelp]=useState(true)
    const key=(e)=>{
        if (e.key=='Enter') {
            fetchdata();
        }
    }
    async function fetchdata() {
        var response= await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=21805bff7224936fa25d6cec016a0a4b&units=metric')
        if (response.status==200) {
          const data= await response.json();  
          props.getdata(data,name);
        }
    }  
   
    useEffect(
        ()=>{
           sethelp(!help);
           setname(props.histname);
        },[props.histname]
    )
    useEffect(
        ()=>{
            fetchdata()
        },[help]
    )
    return(
        <div className="w-[70vw] text-center">
            <form onSubmit={(e)=>{e.preventDefault()}}>
            <input  className="text-black border rounded-lg w-[50vw] p-4 mx-auto mt-5 shadow-lg text-[20px] focus:outline-none focus:shadow-2xl shadow-blue " type="text" onKeyUp={key} value={name} onChange={(e)=>{setname(e.target.value)}} />
            </form>
        </div>
    )
}