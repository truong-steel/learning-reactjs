import React, { useEffect } from 'react'
import './Display.css'

const Display = (props) => {
    console.log({
        props
    });

    const callback = () => {
        console.log('DISPLAY MOUNTING')

        return () => {
            console.log('DISPLAY UNMOUNTING')
        }
    }

    useEffect(callback,[])  // cách 2 

  return (
    <p className ={`${props.data !== 0? 'Display' : 'disabled' }`}> Count : {props.data}
    </p>
  )
}

export default Display