import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const [value,setValue]=useState('')
  return (
    <>
    <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center w-100 
'>
    <h2 className='mb-3 text-danger'>Calculator</h2>
       <div style={{height:'450px'}} className='bg-danger p-5 '>
           <div className='bg-white p-3'>

                <form >
                  <input value={value} type="text" className='form-control bg-dark text-light'/>
        
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                        <button   type='button' className='btn  calbtn border border-secondary-subtle ps-4 pe-4' onClick={(e)=>setValue('')}>AC</button>
                        <button type='button' className='btn calbtn border border-secondary-subtle ps-4 pe-4 ' onClick={(e)=>setValue(value.slice(0,-1))}>DEL</button>
                        <button value='/'  type='button' className='btn calbtn border border-secondary-subtle ' onClick={(e)=>setValue(value + e.target.value)}>/</button>
                    </div>
        
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <button  value='7' type='button' className='calbtn btn border border-secondary-subtle' onClick={(e)=>setValue(value + e.target.value)}>7</button>
                        <button value='8' type='button' className='btn calbtn border border-secondary-subtle 'onClick={(e)=>setValue(value + e.target.value)}>8</button>
                        <button value='9'  type='button' className='btn calbtn border border-secondary-subtle 'onClick={(e)=>setValue(value + e.target.value)}>9</button>
                        <button value='*'  type='button' className='btn  calbtn border border-secondary-subtle'onClick={(e)=>setValue(value + e.target.value)}>*</button>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-3 '>
                        <button value='4'  type='button' className='btn calbtn border border-secondary-subtle ' onClick={(e)=>setValue(value + e.target.value)}>4</button>
                        <button value='5'  type='button' className='btn calbtn border border-secondary-subtle ' onClick={(e)=>setValue(value + e.target.value)}>5</button>
                        <button value='6'  type='button' className='btn calbtn border border-secondary-subtle ' onClick={(e)=>setValue(value + e.target.value)}>6</button>
                        <button value='+'  type='button' className='btn calbtn border border-secondary-subtle ' onClick={(e)=>setValue(value + e.target.value)}>+</button>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-3 '>
                        <button value='1'  type='button' className='btn calbtn border border-secondary-subtle ' onClick={(e)=>setValue(value + e.target.value)}>1</button>
                        <button value='2'  type='button' className='btn calbtn border border-secondary-subtle ' onClick={(e)=>setValue(value + e.target.value)}>2</button>
                        <button value='3'  type='button' className='btn  calbtn border border-secondary-subtle' onClick={(e)=>setValue(value + e.target.value)}>3</button>
                        <button value='-'  type='button' className='btn calbtn border border-secondary-subtle ' onClick={(e)=>setValue(value + e.target.value)}>-</button>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-3 '>
                        <button value='0'  type='button' className='btn calbtn border border-secondary-subtle ' onClick={(e)=>setValue(value + e.target.value)}>0</button>
                        <button value='.'  type='button' className='btn calbtn border border-secondary-subtle ' onClick={(e)=>setValue(value + e.target.value)}>.</button>
                        <button type='button' className='btn  calbtn border border-secondary-subtle ' onClick={(e)=>setValue(eval(value))}>=</button>
                    </div>
        
                    {/* </div> */}
                </form>
           </div>
       </div>
    </div>
    </>
  )
}

export default Calculator