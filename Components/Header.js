import Link from "next/link"
export const Header = () => {
  return (
    <div className="bg-white shadow-lg px-8 py-4 flex justify-between w-full items-center">
      <Link href="/"><h1 className="font-bold text-3xl text-black" >Art Gallery</h1>
      </Link>
      <div className="routes gap-10 flex">
        <Link href="/landscape" className="font-bold">landscape</Link>
      </div>
    </div>
  )
}
