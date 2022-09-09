import { Box, Typography } from '@mui/material'
import React from 'react'

const ProjectSide = () => {
  return (
    <Box flexBasis="50%">
        <Typography variant="h6" component="h4" marginBottom='15px' className="section-info">
        Let's Talk
      </Typography>
      <Typography variant='h3' component='h2' lineHeight={1.5} fontWeight={700} textTransform='uppercase'>
        About Your Next <span className='project'>Project</span> Your Mind
      </Typography>
    </Box>
  )
}

export default ProjectSide