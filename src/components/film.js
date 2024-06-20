import * as React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'
import { Image } from '@chakra-ui/react'
import './film.css'

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
    <InfiniteScroll
      dataLength={images.items.length}
      next={fetchMoreData}
      hasMore={images.hasMore} // Change this to false when all images are loaded
      loader={<h4>Loading...</h4>}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {images.items.map((image, index) => (
        <div key={index} className='image-item'>
          <Image src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </InfiniteScroll>
  )
}

export default Film
