import { Link } from 'react-router-dom'
import Image from '../assets/Portfolio.png'

const Portfolio = () => {
  return(
    <>
      <div className="bg-mybgcolor w-screen h-screen flex items-center justify-center">
        <div className="bg-mycolor w-4/5 h-4/5 relative flex rounded-lg shadow-xl">
          <div className="m-5 container">
            <div className="mt-10 mx-10 w-max font-bold text-4xl text-white">
              THIS IS MY PORTFOLIO
            </div>
            <div className="mt-40 mx-10 w-max font-bold text-2xl text-white">
              DANDY MAULANA AINUL YAQIN
            </div>  
            <div className="mb-8 mt-5 mx-10 text-white font-thin">
            A student of Telkom Surabaya Institute of Technology who is interested in the world of IT, especially in terms of programming.
            </div>
            <div className="flex items-center justify-center">
              <div className="inline-flex gap-5 mt-5" role="group">
                <Link className="rounded-lg px-6 py-2.5 bg-blue-700 text-white font-medium text-xs uppercase hover:bg-mycolor2 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" to="/">Portfolio</Link> 
                <Link className="rounded-lg px-6 py-2.5 bg-mybgcolor text-white font-medium text-xs uppercase hover:bg-mycolor2 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" to="Prof">Profile</Link>
                <Link className="rounded-lg px-6 py-2.5 bg-mybgcolor text-white font-medium text-xs uppercase hover:bg-mycolor2 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" to="Edu">Education</Link>
                <Link className="rounded-lg px-6 py-2.5 bg-mybgcolor text-white font-medium text-xs uppercase hover:bg-mycolor2 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" to="Cont">Contact</Link>
              </div>
            </div>
          </div>
          <div className="container flex justify-center my-4">
            <img src={Image} alt="Picture"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio