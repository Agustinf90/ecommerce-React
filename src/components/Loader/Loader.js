import React from 'react'
import {Spinner} from 'react-bootstrap'


export const Loader = () => {
    return (
        <div>
            <Spinner animation="border" style={{color: "green", marginLeft: "auto", marginRight: "auto"}}/>
        </div>
    )
}
