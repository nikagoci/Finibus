import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const ButtonSide = () => {
  return (
    <Stack flexBasis='50%' direction='row' alignItems='center' justifyContent='end' >
        <Button variant="contained" className='quote-button'>Get In Touch</Button>
    </Stack>
  )
}

export default ButtonSide