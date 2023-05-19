import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';
import { getRestuarents } from './actions/restAction';
import { useDispatch, useSelector } from 'react-redux';



function Restaurant() {



    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRestuarents)
    }, [])

    const { restList } = useSelector(state => state.reducer1)
    console.log(restList);

    return (
        <div className='container'>
            <Row>
                {
                    restList.map(rest => (
                        <Col id='c1' lg={4} md={6} sm={12}>

                            <Link id='l1' to={`/viewRest/${rest.id}`}>

                                <Card className='mb-3 mt-5' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={rest.photograph} />
                                    <Card.Body>
                                        <Card.Title>{rest.name}</Card.Title>
                                        <Card.Text>
                                            {rest.address}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Link>

                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Restaurant