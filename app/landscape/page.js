'use client'
import axios from "axios";
import Gallery from "@/components/Gallery";
import { useState, useEffect } from "react"
const page = () => {
  const [grayImages, setGrayImages] = useState([]);

  useEffect(() => {
    getGrayImages()
  }, []);


  const getGrayImages = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
    // console.log(response.data)
    setGrayImages(response.data)
  }
  return (
    <div className="bg-gray-400 w-full items-center flex flex-wrap justify-evenly">.
      {grayImages.map((img) => <Gallery img={img} />)}

    </div>
  )
}

export default page