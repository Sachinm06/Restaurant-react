import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function Operatingtime({ workingTime }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Operating Hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Monday <strong>{workingTime.Monday}</strong></ListGroup.Item>
                        <ListGroup.Item>Tuesday <strong>{workingTime.Tuesday}</strong></ListGroup.Item>
                        <ListGroup.Item>Wednesday <strong>{workingTime.Wednesday}</strong></ListGroup.Item>
                        <ListGroup.Item>Thursday <strong>{workingTime.Thursday}</strong></ListGroup.Item>
                        <ListGroup.Item>Friday <strong>{workingTime.Friday}</strong></ListGroup.Item>
                        <ListGroup.Item>Saturday <strong>{workingTime.Saturday}</strong></ListGroup.Item>
                        <ListGroup.Item>Sunday <strong>{workingTime.Sunday}</strong></ListGroup.Item>

                    </ListGroup>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Operatingtime