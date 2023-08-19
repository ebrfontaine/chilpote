import Image from 'next/image'
import Link from 'next/link'

const Finish = () => {
    const redeem = async (e) => {
        document.getElementById("card").style.opacity = "0"
        document.getElementById("text").style.opacity = "100"
        document.getElementById("free").style.opacity = "100"
        e.target.style.opacity = "0"
        e.target.style.cursor = "default"
    }
    return (
        <div>
            <div className='flex w-full h-full justify-center relative mt-[2rem]'>
                <Image className='' width={200} height={200} alt={"cilpote"} src={"/cmg-medallion-logo.svg"}></Image>
            </div>
            <h1 className='mt-5 left-1/2 -translate-x-1/2 absolute text-xl font-bold'>Happy Birthday</h1>
            <h1 className='mt-[4rem] left-1/2  underline -translate-x-1/2 absolute text-4xl font-black'>QUINN!!!</h1>
            <div className='flex justify-center'>
                <div  className='top-[55%] -translate-y-1/2 absolute w-[312px] h-[194px] rounded-xl bg-[#e9eaea] animate-bounce'>
                    <h1 id="text" className='left-[10%] absolute top-1/2 -translate-y-1/2 text-2xl font-bold opacity-0 text-black'>098fd-suio-hdsu-9d32</h1>
                    <Image className='opacity-100 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' value="poop" id="card" width={200} height={100} alt={"cilpote"} src={"/chipotle.png"}></Image>
                </div>
            </div>
            <h1 className='top-[77%] left-1/2 -translate-x-1/2 absolute text-2xl font-bold opacity-0 text-center' id="free">$20 Chipotle gift card <br></br> + <br></br> One time free pickup</h1>
            <button className=' px-10 py-2 rounded-full text-[#220a01] font-bold text-l bg-white top-[85%] left-1/2 -translate-x-1/2 absolute' onClick={redeem}>REDEEM NOW!</button>
            
            
        </div>
    )

    
}
export default Finish