import { Stack } from '@mui/system'
import React from 'react'
import PortfolioBottom from '../components/Portfolio/PortfolioBottom'
import PortfolioTop from '../components/Portfolio/PortfolioTop'

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <Stack marginBottom="40px">
            <PortfolioTop />
        </Stack>
        <Stack marginBottom="40px">
            <PortfolioBottom />
        </Stack>
    </section>
  )
}

export default Portfolio