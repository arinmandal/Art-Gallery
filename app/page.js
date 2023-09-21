"use client"
import Gallery from "@/Components/Gallery";
import axios from "axios";
import { useEffect, useState } from "react";
// import Gallery from "@/Components/Gallery"
const page = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setImages(response.data);
  }
  return (
    <div className="bg-gray-400 rounded-md w-full flex flex-wrap justify-evenly
    ">
      {images.map((img) => <Gallery img={img} />)}
    </div>
  )
}

export default page;