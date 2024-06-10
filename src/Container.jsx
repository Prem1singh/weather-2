
export default function Container(props) {
    // console.log(props.data)
    return(
        <div className="p-5 flex items-center justify-center min-h-[80vh]">
           
                {
                    (props.data? <div className=" flex items-center justify-center flex-col p-10 rounded-xl text-center shadow-2xl w-[300px]">
                        <h2 className="text-[25px] font-[600] mb-5 ">{props.data.sys.country} </h2>
                      <img className="w-[100px]"  src= {'http://openweathermap.org/img/wn/' + props.data.weather[0].icon + '.png'} alt="" /> 
                         <h2 className="text-[25px] font-[600] mb-5">{props.data.name} </h2> <h2 >Temp : <span className="font-bold text-[20px] text-[#f42424]"> {(props.data.main.temp)} &deg; C</span></h2>
                    <h2>Condition : {props.data.weather[0].description
}</h2>
                    
                    </div>:'')
                         
                }
                
               
            
        </div>
    )
}