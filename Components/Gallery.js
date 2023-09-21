const Gallery = ({ img }) => {
  return (
    <div className=''>
      <div className='bg-white w-72 mx-4 my-2 rounded-lg overflow-hidden'>
        <img src={img.download_url} alt="" />
        <p className='bg-white p-4'>📷{img.author}</p>
      </div>

    </div>
  )
}

export default Gallery;