import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Contact({ contact }) {
  return (
    <div>
      <Card className='my-3 p-3 rounded h-90'>
        <Card.Img style={{ objectFit: 'contain' }}
          variant='top'
          src={contact.picture.large}
        />
        <Card.Body>
          <Card.Title>
            {`${contact.name.first + "" + contact.name.last}`}
          </Card.Title>
          <Card.Subtitle className='mb-2 text=muted'>
            Addres:
          </Card.Subtitle>
          <Card.Text>
            <div>
              <strong>Number:</strong>
              {contact.location.street.number}
            </div>
            <div>
              <strong>street:</strong>
              {contact.location.street.name}
            </div>
            <div>
              <strong>City:</strong>
              {contact.location.city}
            </div>
            <div>
              <strong>State:</strong>
              {contact.location.state}
            </div>
          </Card.Text>
          <Card.Subtitle className='mb-2 text=muted'>
            Phone:
          </Card.Subtitle>
          <Card.Text>
            <div>
              {contact.phone}
            </div>
          </Card.Text>
          <Card.Subtitle className='mb-2 text=muted'>
            Email:
          </Card.Subtitle>
          <Card.Text>
            <div>
              {contact.email}
            </div>
          </Card.Text>
          <a href={`mailto:${contact.email}`}>
          <Button style={{ borderRadius: '20px' }}
            className='w-100'
            variant='danger'>Contacts</Button>
        </a>
      </Card.Body>
    </Card>
    </div >
  )
}

export default Contact