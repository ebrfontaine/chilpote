import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Drivers = () => {
  const back = "<--"
  return (
    <div>
      <div className='top-0 left-0 absolute -z-10 h-screen w-[100%]'>
      <div className="absolute left-5 top-4 flex">
            <Link href={"/"}><h1 className="text-sm z-20">{back}</h1></Link>
            <Link href={"/"}><h1 className="text-sm underline cursor-pointer ml-1">Home</h1></Link>
            <h1 className="text-sm">/</h1>
            <Link href={"/drivers"}><h1 className="text-sm underline cursor-pointer">Drivers</h1></Link>
        </div>
        <h1 className='font-bold absolute -z-10 text-white text-6xl text-center w-full'>Drivers</h1>
        <hr className='relative border-2 mt-20 w-[80%] left-1/2 -translate-x-1/2'></hr>
        <h1 className='relative w-1/2 left-1/2 mt-[.5rem] -translate-x-1/2 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore. Praesentium eos officiis illo consequuntur. Porro, recusandae maiores sunt laboriosam nesciunt quo commodi ad nam iure minima incidunt harum soluta!</h1>
        
        
        <div className='flex gap-[3rem] mt-3 -z-20 overflow-hidden'>
          
          <div className='border-white opacity-50 bg-gray-600 h-48 border-4 rounded-md relative w-1/3 left-[15%] flex overflow-hidden hover:opacity-100 hover:scale-[101%]'>
            
            <Image width={400} height={200} alt={"blind lol"} src={"/download.jpg"} className='rounded-full z-20 border-2 object-cover w-[11.52rem] ml-1 h-[11.5rem] left-1'></Image>
            <hr className='border-2 w-[60%] border-white absolute top-1/2 left-[25%] z-10'></hr>
            <h1 className='font-bold text-4xl w-full flex justify-center absolute left-[15%] z-0 top-[20%]'>Amelia Smith</h1>
            <h1 className='absolute top-1/2 w-full mt-4 flex justify-center left-[15%] z-0 text-2xl'>⭐⭐⭐☆☆</h1>
            <Link href={"/reviews"} ><h1 className='absolute flex justify-center cursor-auto left-[15%] w-full mt-[9.5rem] z-10 text-center text-sm underline text-blue-400'>View Reviews</h1></Link>
            
          </div>
          <div className='w-1/3 border-white bg-gray-600 h-48 border-4 opacity-50 hover:opacity-100 rounded-md relative hover:scale-[101%] left-[15%] flex'>
            <Image width={400} height={200} alt={"blind lol"} src={"/download (1).jpg"} className='rounded-full border-2 object-cover z-10 w-[11.52rem] h-[11.52rem] absolute right-1'></Image>
            <hr className='border-2 w-[60%] border-white absolute top-1/2 right-[25%] z-0'></hr>
            <h1 className='font-bold text-4xl w-full absolute flex justify-center right-[15%] z-0 top-[20%]'>Jack Shelley</h1>
            <h1 className='absolute top-1/2 w-full mt-4 flex justify-center right-[15%] z-0 text-2xl'>⭐⭐⭐⭐⭐</h1>
            <Link href={"/poo"} ><h1 className=' cursor-auto absolute w-full flex justify-center right-[15%] mt-[9.5rem] z-10 text-sm underline text-blue-400'>View Reviews</h1></Link>
          </div>
        </div>
        <div className='flex gap-[3rem] mt-3 -z-20 overflow-hidden'>
          
          <div className='border-white opacity-50 mt-12 bg-gray-600 h-48 border-4 rounded-md relative w-1/3 left-[15%] flex overflow-hidden hover:opacity-100 hover:scale-[101%]'>
            
            <Image width={400} height={200} alt={"blind lol"} src={"/download (2).jpg"} className='rounded-full z-20 border-2 object-cover w-[11.52rem] ml-1 h-[11.5rem] left-1'></Image>
            <hr className='border-2 w-[60%] border-white absolute top-1/2 left-[25%] z-10'></hr>
            <h1 className='font-bold text-4xl w-full flex justify-center absolute left-[15%] z-0 top-[20%]'>Marcus Shmarcus</h1>
            <h1 className='absolute top-1/2 w-full mt-4 flex justify-center left-[15%] z-0 text-2xl'>⭐⭐⭐⭐☆</h1>
            <Link href={"/poo"} ><h1 className='absolute flex justify-center cursor-auto left-[15%] w-full mt-[9.5rem] z-10 text-center text-sm underline text-blue-400'>View Reviews</h1></Link>

          </div>
          <div className='w-1/3 mt-12 border-white bg-gray-600 h-48 border-4 opacity-50 hover:opacity-100 rounded-md relative hover:scale-[101%] left-[15%] flex'>
            <Image width={400} height={200} alt={"blind lol"} src={"/download (3).jpg"} className='rounded-full border-2 object-cover z-10 w-[11.52rem] h-[11.52rem] absolute right-1'></Image>
            <hr className='border-2 w-[60%] border-white absolute top-1/2 right-[25%] z-0'></hr>
            <h1 className='font-bold text-4xl w-full absolute flex justify-center right-[15%] z-0 top-[20%]'>Oskar Laing</h1>
            <h1 className='absolute top-1/2 w-full mt-4 flex justify-center right-[15%] z-0 text-2xl'>⭐⭐☆☆☆</h1>
            <Link href={"/poo"} ><h1 className=' cursor-auto absolute w-full flex justify-center right-[15%] mt-[9.5rem] z-10 text-sm underline text-blue-400'>View Reviews</h1></Link>
          </div>
        </div>
        <div className='flex gap-[3rem] mt-12 w-full'>
          <h1 className='w-1/3 border-white hover:scale-[101%] opacity-50 hover:opacity-100 bg-gray-600 h-48 border-4 rounded-md relative left-[15%] top-[3%] flex'></h1>
          <h1 className='w-1/3 border-white hover:scale-[101%] opacity-50 hover:opacity-100 bg-gray-600 h-48 border-4 rounded-md top-[3%] relative left-[15%] flex'></h1>
        </div>
        {/* <h1 className='w-1/2 border-white relative h-48 border-4 bg-gray-600 rounded-md top-[3%] left-1/2 mt-10 -translate-x-1/2'>
          
        </h1>
        <h1 className='w-1/2 border-white relative h-48 border-4 bg-gray-600 rounded-md top-[3%] left-1/2 mt-10 -translate-x-1/2'></h1> */}
      </div>
    </div>
  )
}
export default Drivers