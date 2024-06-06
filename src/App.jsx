
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [city, setCity]=useState('')
  let[wdetails, setWdetails]=useState()
  let getData=(event)=>{
    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=iTtJ7WmhniemahrZjeVFdpY0pTyPGEoK`)
      .then((res) => res.json())
      .then((finalRes) => {
        if(finalRes.cod=="404"){
          setWdetails(undefined)
        }
        else
        {
          setWdetails(finalRes)
        }
      })

    event.preventDefault()
    setCity('')
  }

  useEffect(()=>{
    console.log("James")
  },[])

return(
  <div className='w-[100%] h-[100vh] bg-[#4aacb1]' >
  <div className='max-w-[600px] mx-auto '>
    <h1 className='text-[40px] font-bold py-[50px] text-white'>Simple Weather App</h1>

    <form onSubmit={getData}>
    <input type='text' value={city} onChange={(e) => setCity (e.target.value)} className='w-[300px] h-[40px] pl-[25px] '/>
  <button className='bg-[lightgreen] w-[100px] h-[40px] pl-[5px]'>Submit</button>
    </form>


  <div className='w-[400px] mx-auto bg-[lightblue] shadow-lg mt-[200px] p-[25px]'>
  
  {wdetails!==undefined
  ?
  <>
    <h3 className='font-bold text-[30px] text-black' >Jaipur<span className='bg-[yellow]'> IN </span></h3>
    <h3 className='font-bold text-[30px] text-black'>
      {wdetails.main.temp}
    </h3>
    <img src='http://openweathermap.org/img/w/50d.png' />
    <p className='text-black'>Fog</p>
  </>
  :
  "No Data Found"
  }
  
    </div> 
  </div>
  </div>

)
}
export default App
