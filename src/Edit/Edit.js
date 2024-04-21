import React, { useState } from 'react'
import Calender from '../Calender/Calender'
import { Link } from 'react-router-dom'
import DropDown from '../DropDown/DropDown'
import { FaArrowLeft } from 'react-icons/fa'

export default function Edit() {

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const dates = today.getDate();
    const currentDate = year + "-" + (month > 10 ? month : ('0' + month)) + "-" + dates;
    const [date, setDate] = useState(currentDate)

    return (
        <div className='text-white text-center pt-5'>
            <Link to='/'>
                <div className='text-left pl-4 flex items-center gap-6'>
                    <FaArrowLeft />
                    <h3 className='font-bold'>Edit Profile</h3>
                </div>
            </Link>
            <div className='flex justify-center w-full p-10 my-4'>
                <form action="#" className='flex flex-col items-center justify-center gap-4 w-full text-center'>
                    <input type="text" placeholder='Omid Javaheri' className='bg-bg border-1 w-full rounded-lg px-5 py-2.5' />

                    <input type="text" placeholder='Omid' className='bg-bg border-1 w-full rounded-lg px-5 py-2.5' />

                    <input type="date" value={date} onChange={(event) => setDate(event.target.value)} pattern="\d{4}-\d{2}-\d{2}" className='bg-bg border-1 rounded-lg w-full px-5 py-2.5' />
                    {/* <input
                        type="text"
                        placeholder='MM/DD/YYYY'
                        className='bg-bg border-1 rounded-lg w-full px-5 py-2.5'
                        onChange={(e) => console.log(e.target.value)}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                    /> */}
                    {/* <Calender/> */}

                    <input type="email" placeholder='omid138089@gmail.com' className='bg-bg w-full border-1 rounded-lg px-5 py-2.5' />

                    <input type="number" placeholder='+98 9138100702' className='bg-bg w-full border-1 rounded-lg px-5 py-2.5' />
                    <DropDown />

                    <div className='fixed w-full px-5 bottom-20 inset-x-0'>
                        <button type='submit' className='bg-blue pt-3 pb-3 w-full rounded-xl text-bg'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
