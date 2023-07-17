import React, { Component } from 'react'
import loading from './loading.gif'  // gif of spinner

const  Spinner = ()=>{

    return (
      <div className='text-center'>
          <img className='my-3' src={loading} height="27px" width="27px"  alt="loading" />
      </div>
    )
  
}

export default Spinner
