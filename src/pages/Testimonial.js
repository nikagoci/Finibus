import { Container } from '@mui/system'
import React from 'react'
import ClientSide from '../components/Testimonial/ClientSide'

const Testimonial = () => {
  return (
    <section id='testimonial' style={{padding: '40px 0'}}>
        <Container>
            <ClientSide />
        </Container>
        </section>
  )
}

export default Testimonial