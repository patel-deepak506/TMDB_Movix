import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Img = ({src , className}) => {
  return (
    <LazyLoadImage 
    className={className || ''}
    alt = "hello moto"
    effect='blur'
    src={src}
     />
      
  )
}

export default Img
