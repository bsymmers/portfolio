import * as React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'
import './film.css'
import Nav from './nav'
import { motion } from 'framer-motion'

function Film() {
  function importAll(r) {
    return r.keys().map(r)
  }

  const allImages = importAll(require.context('../media/film', false, /\.(png|jpe?g|svg)$/))
  const [images, setImages] = useState({ items: allImages.slice(0, 10), hasMore: true })

  const addImages = (index) => {
    let max = index + 10
    let temp = allImages.slice(0, max)
    return temp
  }

  const fetchMoreData = () => {
    const res = addImages(images.items.length)
    if (images.items.length == 48) {
      setImages({ items: res, hasMore: false })
    } else {
      setImages({ items: res, hasMore: true })
    }
  }
  return (
    <>
      <Nav />
      <InfiniteScroll
        dataLength={images.items.length}
        next={fetchMoreData}
        hasMore={images.hasMore} // Change this to false when all images are loaded
        loader={<h4>Loading...</h4>}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {images.items.map((image, index) => (
          <div key={index} className='image-item'>
            <motion.img src={image} alt={`Image ${index}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} />
          </div>
        ))}
      </InfiniteScroll>
    </>
  )
}

export default Film
