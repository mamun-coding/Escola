import React from 'react'
import Container from '../Container/Container'
import Heding from '../Heding/Heding'
import CourseCard from '../CourseCard/CourseCard'

const Course = () => {
  return (
    <Container className='pt-[122px]'>
         <Heding subHeading="Top Popular Course" heading="Building a better tomorrow"/>
         <CourseCard/>
         
    </Container>
  )
}

export default Course
