import { Container, Stack } from '@mui/system'
import React from 'react'
import BottomSide from '../components/Footer/BottomSide'
import TopSide from '../components/Footer/TopSide'

const Footer = () => {
  return (
    <section id="footer" style={{padding: '50px 0'}}>
        <Container>
            <Stack>
                <TopSide />
                <BottomSide />
            </Stack>
        </Container>
    </section>
  )
}

export default Footer