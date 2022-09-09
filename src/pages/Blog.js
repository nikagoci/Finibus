import { Container, Stack } from '@mui/system'
import React from 'react'
import BlogSide from '../components/Blog/BlogSide'
import NewsSide from '../components/Blog/NewsSide'

const Blog = () => {
  return (
    <section id="blog">
        <Container>
            <Stack direction='row'>
                <BlogSide />
                <NewsSide />
            </Stack>
        </Container>

        </section>
  )
}

export default Blog