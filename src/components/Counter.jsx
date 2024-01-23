import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'


function Counter() {
  const [amount,setAmount]=useState('')

  // dispatch hook 
  const dispatch=useDispatch()

// hook
const state=useSelector((state)=>state.counter.count)

const handleIncrement=()=>{

if(amount==""){
  alert('please enter a value')
}
else{
  dispatch(incrementByAmount(Number(amount)))
}
  
}

  return (
    <div style={{height:"70vh"}} className='d-flex justify-content-center align-items-center'>
      <div style={{backgroundColor:'lightblue'}} className='d-flex justify-content-center flex-column align-items-center border rounded p-5 w-25'>
        <h1 style={{fontSize:'100px'}}>{state}</h1>
        
         <div className='d-flex justify-content-between w-100'>
        <div className='btn btn-warning' onClick={()=>dispatch(increment())}>Increment</div>
        <div className='btn btn-success' onClick={()=>dispatch(decrement())}>Decrement</div>
        <div className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</div>
      </div>
      <div className='mt-5'>
        <input onChange={(e)=>setAmount(e.target.value)} type="text" placeholder='enter amount to be increment ' className='form-control' />
        <button onClick={handleIncrement} className='btn btn-primary mt-3'>Increment amount  </button>
      </div>
      </div>

      
      
    </div>
  )
}

export default Counter