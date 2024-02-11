import React, { useState, useEffect } from'react'
import { InputGroup } from 'react-bootstrap'
import Form from'react-bootstrap/Form'
import Button from'react-bootstrap/Button'

function RicercaLocalità(props) {

    return (
        <>
        <Button 
        onClick={() => {
            props.setShowModal(true)
        }}
        variant="outline-primary">Cerca</Button>
        </>
      )
}


export default RicercaLocalità