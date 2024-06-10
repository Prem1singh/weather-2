import { useEffect, useState } from 'react'
import History from './history'
import Input from './input'
import Container from './Container'

function App() {
  const [data,setdata]=useState('')
  const [name,setname]=useState([]);
  const [histname,sethistname]=useState('')
  function getdata(inp,name1) {
    setdata(inp);
    for (let i = 0; i < name.length; i++) {
      if (name[i]==name1) {
        name.splice(i,1)
      }
    }
    setname([name1,...name]);
  }
  function gethistory(hisname) {
    sethistname(hisname);
  }
  return (
    <div className='flex bg-[#3498db] text-white'>
    <History name={name} set={setname} gethistory={gethistory}></History>
    <div>
    <Input getdata={getdata} sethistname={sethistname} histname={histname}></Input>
    <Container data={data}></Container>
    </div>
    </div>
  )
}
export default App