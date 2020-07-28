import React from 'react'
import './Button.css'

export default props => {

    let classes = 'button'
    classes += props.operation ? ' operation' : ''
    classes += props.col2 ? ' col2' : ''
    classes += props.col3 ? ' col3' : ''
    
    return (
        <button onClick={e => props.click && props.click(props.label)}
            className={classes}>  
            {props.label} 
        </button>
    )
}


