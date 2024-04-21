import React, { useState } from 'react'
import { gender } from '../datas'

export default function DropDown() {

    const [showMenu, setShowMenu] = useState(false)
    const [genders, setGenders] = useState(gender)
    const [selectedGender, setSelectedGender] = useState('Gender')

    const dropdownHandler = () => {
        setShowMenu(prevState => !prevState)
    }
    return (

        <div className='relative w-full'>

            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="bg-bg border-1 w-full rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button" onClick={dropdownHandler}>{selectedGender} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdown" className={`z-10 ${showMenu ? '' : 'hidden'}  absolute top-12 border rounded-lg border-10 shadow w-full`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 bg-bg rounded" aria-labelledby="dropdownDefaultButton">
                    {genders.map((item, index) => (

                        <li key={index}>
                            <a href="#" className="block px-4 py-2 " onClick={() => {
                                setShowMenu(false)
                                setSelectedGender(item)
                            }}>{item}</a>
                        </li>
                    ))}
                </ul>
            </div >

        </div>
    )
}
