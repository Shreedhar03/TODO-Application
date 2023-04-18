import React,{ useContext } from 'react'
// import {useNavigate} from 'react-router-dom'
import { AppContext } from '../App'
import {Link} from 'react-router-dom'


export default function WelcomePage() {

    const {dark} = useContext(AppContext)
    

    // let navigate = useNavigate()
    return (
        <>

            <div className={`flex-1 container-1 flex justify-center text-center`}>
                <div className="hero flex flex-col items-center justify-center max-w-2xl m-auto gap-4 py-20">
                    <p className='text-4xl md:text-6xl'>
                        Organize your<br></br>
                        work and life, finally.
                    </p>
                    <p className='mx-5 md:mx-0 text-lg md:text-2xl max-w-lg'>
                        Become focused, organized, and calm with <span className='theme'>#taskDone.</span> The best task manager and to-do list app.
                    </p>

                    <Link className='cursor-pointer text-xl themebg text-black px-3 py-1 rounded-lg my-8' to={'/dashboard'}>Start for free</Link>

                    {/* <Link to={'/dashboard'} className='cursor-pointer text-2xl themebg text-white px-3 py-1 rounded-lg my-8'>Get Started (Link - to)</Link> */}

                    
                </div>
            </div>
        </>
    )
}

