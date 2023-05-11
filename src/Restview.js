import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Operatingtime from './Operatingtime';
import Review from './Review';


function Restview() {


  const [restList, setRest] = useState([])

  //api to access data

  const getData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => setRest(data.restaurants))
  }
  //object create for useParams
  const params = useParams()
  console.log(params.id);

  //find single restaurant data
  const singleRest = restList.find(i => i.id == params.id)
  console.log(singleRest);


  useEffect(() => {
    getData()
  }, [])



  return (
    <div className='container'>

      {singleRest ?
        (<Row>
          <Col lg={6} md={6}>
            <img className='w-100 container p-5' style={{ height: '650px' }}
              src={singleRest.photograph}
            />
          </Col>

          <Col lg={6} md={6} className=' mt-5 fs-5'>
            <ListGroup className='ps-1'>
              <ListGroup.Item><h1 className='text-primary'>{singleRest.name}</h1></ListGroup.Item>
              <ListGroup.Item>Address <strong> {singleRest.address}</strong> </ListGroup.Item>
              <ListGroup.Item>Neighborhood <strong> {singleRest.neighborhood}</strong></ListGroup.Item>
              <ListGroup.Item>Cuisine Type <strong> {singleRest.cuisine_type}</strong></ListGroup.Item>
              <ListGroup.Item>
                <Operatingtime workingTime={singleRest.operating_hours} ></Operatingtime >

                <Review reviewList={singleRest.reviews}></Review>

              </ListGroup.Item>
            </ListGroup>
          </Col>

        </Row>) : ""
      }
    </div>
  )
}

export default Restview