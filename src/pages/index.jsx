import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const activate = "aouh4hsdao19m2a0" 
  const submitContact = async (event) => {
    
    let inp = ""
    inp+=event.target.a.value
    inp+=event.target.b.value
    inp+=event.target.c.value
    inp+=event.target.d.value
    if (inp != activate) {
      event.preventDefault();
      alert("Incorrect");
    }
    
  };

  return (
    <div>
      <div className='flex w-full h-full justify-center mt-[2rem]'>
        <Image className='' width={200} height={200} alt={"cilpote"} src={"/cmg-medallion-logo.svg"}></Image>
        
      </div>
      <h1 className='text-center mt-[9rem] font-bold text-xl '>Activation Code</h1>
      <form className='justify-center flex mt-[2rem]' id="verify" onSubmit={submitContact} method='post'>
        <h1 className='text-3xl h-[3rem] ml-[10rem] absolute w-3'>-</h1>
        <h1 className='text-3xl h-[3rem] mr-[10rem] absolute w-3'>-</h1>
        <h1 className='text-3xl h-[3rem] absolute w-3'>-</h1>
        <input className='text-white focus:opacity-100 text-lg font-bold text-center rounded-lg absolute w-[4rem] h-[3rem] mr-[15rem] bg-slate-700 opacity-50 border-slate-900 border-b-4'  type="text" name="a" minLength={4} maxLength={4} required id="a" />
        <input className='text-white text-lg font-bold focus:opacity-100 text-center rounded-lg absolute w-[4rem] h-[3rem] mr-[5rem] bg-slate-700 opacity-50 border-slate-900 border-b-4' type="text" name="b" minLength={4} maxLength={4} required id="b" />
        <input className='text-white text-lg font-bold focus:opacity-100 text-center rounded-lg w-[4rem] h-[3rem] absolute ml-[5rem] bg-slate-700 opacity-50 border-slate-900 border-b-4' type="text" name="c" minLength={4} maxLength={4} required id="c" />
        
        
        <input className='text-white text-lg font-bold focus:opacity-100 text-center rounded-lg w-[4rem] h-[3rem] absolute ml-[15rem] bg-slate-700 opacity-50 border-slate-900 border-b-4' type="text" name="d" minLength={4} maxLength={4} required id="d" />
        
        
      
        <Link href={"/finish"}><button className='mt-[10rem] rounded-lg bg-white text-black h-[2.5rem] w-[8rem] opacity-50 focus:opacity-100'   id="sub" type="submit">Submit</button></Link>
      </form>
        

    </div>
  )
}
