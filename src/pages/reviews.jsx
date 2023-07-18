import Link from "next/link"
import Image from 'next/image'
const Reviews = () => {
    const back = "<--"
    return(
        <div className="overflow-hidden">
            <div className="absolute left-5 top-4 flex">
                <Link href={"/drivers"}><h1 className="text-sm z-20">{back}</h1></Link>
                <Link href={"/"}><h1 className="text-sm underline cursor-pointer ml-1">Home</h1></Link>
                <h1 className="text-sm">/</h1>
                <Link href={"/drivers"}><h1 className="text-sm underline cursor-pointer">Drivers</h1></Link>
                <h1 className="text-sm">/</h1>
                <Link href={"reviews"}></Link><h1 className="text-sm underline cursor-pointer">Reviews</h1>
            </div>
            
            <h1 className="Absolute w-full text-center text-4xl mt-5 font-bold">Amelia Smith</h1>
            <div className="flex w-full">
                <Image src={"/download.jpg"} height={200} width={400} className="relative mt-4 left-1/2 -translate-x-1/2 w-64 h-64 object-cover rounded-full"></Image> 
                
            </div>
            <h1 className="absolute left-1/2 -translate-x-1/2 text-xl mt-4">⭐⭐⭐☆☆</h1> 
            <hr className="border-2 mt-14 w-1/2 translate-x-1/2"></hr>
            <div className="flex">
                <div className="flex border-2 mt-4 h-60 w-1/4 absolute left-[23%] hover:scale-[101%] rounded-md">
                    <h1 className="font-bold text-2xl text-center w-full">Statistics</h1>
                    <hr className="border-2 w-1/2 absolute top-9 left-1/2 -translate-x-1/2"></hr>
                    <ul className="absolute top-[3.5rem] w-full">
                        <li className="text-center">Driver Since 2018</li>
                        <li className="text-center">DOB: June 3rd, 1983</li>
                        <li className="text-center">100+ rides</li>
                        <li className="text-center w-2/3 translate-x-1/4">" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita at eaque vel voluptates."</li>
                    </ul>
                </div>
                <div className="flex border-2 mt-4 h-60 w-1/4 absolute right-[23%] hover:scale-[101%] rounded-md">
                    <h1 className="font-bold text-2xl text-center w-full">Reviews</h1>
                    <hr className="border-2 w-1/2 absolute top-9 left-1/2 -translate-x-1/2"></hr>
                    <h1 className="absolute top-[3rem] w-full text-center">Top Review</h1>
                    <h1 className="absolute top-[4.5rem] text-lg w-full text-center">⭐⭐⭐⭐⭐</h1>
                    <h1 className="absolute top-[6.5rem] w-[90%] left-1/2 -translate-x-1/2 text-center">Amelia was a pleasure to ride with. From the bar in the back, to the cheery attitude up front we couldn't have asked for a more pleasureable ride!</h1>
                    <h1 className="absolute top-[11.5rem] w-[90%] left-1/2 -translate-x-1/2 text-center">-Emanuel Mitchell</h1>
                </div>
                <Link href={"mailto:odierouth@gmail.com"}><button className="absolute top-[42rem] border-2 px-5 py-1 rounded-md left-1/2 -translate-x-1/2 hover:bg-white hover:text-gray-800">Contact Me</button></Link>
                <hr className="border-2 w-1/2 absolute top-[46rem] left-1/2 -translate-x-1/2"></hr>
                <div className="border-2 w-1/3 left-1/2 absolute -translate-x-1/2 top-[50rem] h-[40rem] rounded-lg">
                    <h1 className="font-bold text-4xl mt-2 text-center w-full">All Reviews</h1>
                    <hr className="border-2 mt-2 w-1/2 -translate-x-1/2 absolute left-1/2"></hr>
                    <h1 className="absolute left-1/2 -translate-x-1/2 text-xl mt-4">⭐⭐⭐☆☆</h1> 
                    <div className="rounded-lg w-3/4 border-2 h-[9rem] relative top-[4rem] left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 hover:scale-[101%]">
                        <h1 className="w-full text-center text-xl">⭐☆☆☆☆</h1>
                        <h1 className="w-full text-center text-sm">Riding with Amelia was a terrible experience. She showed up 15 minutes late, and was rude for the entire ride. Would not recommend. </h1>
                        <h1 className="w-full text-center text-xl">-Alex Gomez</h1>
                    </div>
                    <div className="rounded-lg w-3/4 border-2 h-[9rem] relative top-[5rem] left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 hover:scale-[101%]">
                        <h1 className="w-full text-center text-xl">⭐⭐⭐⭐⭐</h1>
                        <h1 className="w-full text-center text-sm">Amelia was a pleasure to ride with. From the bar in the back, to the cheery attitude up front we couldn't have asked for a more pleasureable ride!</h1>
                        <h1 className="w-full text-center text-xl">-Emanuel Mitchell</h1>
                    </div>
                    <div className="rounded-lg w-3/4 border-2 h-[9rem] relative top-[6rem] left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 hover:scale-[101%]">
                        <h1 className="w-full text-center text-xl">⭐⭐⭐☆☆</h1>
                        <h1 className="w-full text-center text-sm">Although Amelia was a few minutes late, the ride was enjoyable and shee was very chatty and friendly.</h1>
                        <h1 className="w-full text-center text-xl">-Grace Lilly</h1>
                    </div>
                </div>
                
            </div>
        </div>
    )
} 
export default Reviews