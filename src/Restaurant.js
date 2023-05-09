import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';


function Restaurant() {

    const [restList, setRest] = useState([])

    //api to access data

    const getData = async () => {
        const result = await fetch('/restaurants.json')
        result.json().then(data => setRest(data.restaurants))
    }
    console.log(restList);

    useEffect(() => {
        getData()
    }, [])

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