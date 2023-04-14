import React, { useContext } from 'react'
import { AppContext } from '../App.js'
import todoLogo from './Images/todoLogo.png'

export default function Navbar() {

    const { dark, setDark } = useContext(AppContext)

    return (
        <>
            <nav className={`flex-none logo ${dark ? 'bg-black' : ''} flex items-center justify-around md:justify-between md:px-24 pt-4 pb-12`}>

                <div className="logo flex items-center">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="44" height="44"
                        viewBox="0,0,256,256"
                        style={{ fill: '#000000' }}>
                        <g fill="#ec360e" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.33333,5.33333)"><path d="M37,6h-26c-2.761,0 -5,2.239 -5,5v5.29l6.406,3.7c0.309,0.178 0.689,0.179 0.999,0.001l12.747,-7.329c0.152,-0.087 0.338,-0.089 0.492,-0.004l1.666,0.923c0.34,0.189 0.344,0.677 0.007,0.871l-14.917,8.572c-0.309,0.178 -0.689,0.177 -0.998,-0.001l-6.402,-3.694v3.045l6.406,3.7c0.309,0.178 0.689,0.179 0.999,0.001l12.747,-7.329c0.152,-0.087 0.338,-0.089 0.492,-0.004l1.666,0.923c0.34,0.189 0.344,0.677 0.007,0.871l-14.917,8.572c-0.309,0.178 -0.689,0.177 -0.998,-0.001l-6.402,-3.694v3.045l6.406,3.7c0.309,0.178 0.689,0.179 0.999,0.001l12.747,-7.329c0.152,-0.087 0.338,-0.089 0.492,-0.004l1.666,0.923c0.34,0.189 0.344,0.677 0.007,0.871l-14.917,8.572c-0.309,0.178 -0.689,0.177 -0.998,-0.001l-6.402,-3.694v5.503c0,2.761 2.239,5 5,5h26c2.761,0 5,-2.239 5,-5v-26c0,-2.761 -2.239,-5 -5,-5z"></path></g></g>
                    </svg> */}

                    <img src={todoLogo} alt="" style={{ width: '30px', margin: '0 5px 0 0' }} />
                    <p className='text-2xl theme font-bold'>taskDone</p>
                </div>

                <div className="mode">
                    <p className={`${dark ? 'text-white' : ''} cursor-pointer`} onClick={() => {
                        setDark(!dark)
                        document.body.classList.toggle('bg-black')
                    }}>
                        <i className={`bx ${!dark ? 'bx-moon' : 'bx-sun'} text-2xl`}></i>
                    </p>
                </div>

            </nav>
        </>
    )
}
