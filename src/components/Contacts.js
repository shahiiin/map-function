import { Col, Row } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"
import Contact from './Contact'


const Contacts = () => {

  useEffect(() => {
    getContacts()
  }, [])

  const [contacts, setContacts] = useState([])

  const [loading, setLoading] = useState(false)

  const getContacts = async () => {
    try {
      const res = await axios.get('https://randomuser.me/api/?results=12')
      setContacts(res.data.results)
      setLoading(true)
    }
    catch (err) {
      alert(err.massage)
    }
  }

  return (
    <>
      <Row>
        {loading && contacts.map((contact) => {
          return (
            <Col sm={12} md={6} lg={4} key={contact.login}>
              <Contact contact={contact} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Contacts