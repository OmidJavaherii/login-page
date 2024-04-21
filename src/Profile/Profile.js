import React from 'react'
import { CiUser, CiWallet } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';
import { BsTelegram } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

export default function Profile() {
    return (
        <div className='text-white'>
            <div className="pt-5">
                <div className="font-bold pl-4">
                    <h3>Profile</h3>
                </div>
                <div className="text-center flex justify-center items-center flex-col pt-5 font-bold">
                    <img className='rounded-full w-28' src="/img/javaheri.jpg" alt="user" />
                    <h1 className='pt-3'>Omid Javaheri</h1>
                    <h2>Omid138089@gmail.com</h2>
                    <p>Male</p>
                    <p>1380/11/08</p>
                </div>
            </div>
            <div className="text-2xl pt-5 flex pl-4 flex-col gap-4">
                <div className="flex gap-4 items-center">
                    <CiUser />
                    <button>Edit Profile</button>
                </div>
                <div className="flex gap-4 items-center">
                    <CiWallet />
                    <button>Payment</button>
                </div>
                <div className="flex gap-4 items-center">
                    <IoShieldCheckmarkOutline />
                    <button>Security</button>
                </div>
                <div className="text-red flex gap-4 items-center">
                    <TbLogout />
                    <button>Logout</button>
                </div>
            </div>
            <div className="fixed bottom-5 inset-x-0 text-blue">
                <div className='border-t-2 border-black50 border-solid relative'>
                    <div className='flex items-center justify-center drop-shadow-[0_4px_4px] absolute inset-x-0 bottom-0 pb-14'>
                        <BsTelegram className='size-16 bg-bg rounded-full cursor-pointer' />
                    </div>
                    <div className="relative flex justify-center items-end flex-col pt-6 pr-5">
                        <div className="flex flex-col items-center">
                            <FaUser className='size-8' />
                            <p>Profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
