import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-[#0F0F0F] pt-16 px-8 pb-26 md:pb-6'>
      <div className="container max-w-[1400px] mx-auto flex  justify-between flex-wrap gap-10">
        <div>
          <Link to='/'>
            <img src={Logo} alt="" width={200} />
          </Link>
          <p className='text-sm mt-2 max-w-64 text-[#6B7280] font-semibold'>UzMovie - Maroqli hordiq tilaymiz! Eng yangi kino, serial va animelar!</p>
        </div>
        <div className='flex flex-col items-start gap-2'>
          <strong className='mb-1'>Xizmatlarimiz</strong>
          <Link className='hover:text-[#1AB196] transition duration-150'>Tarjimonlik</Link>
          <Link className='hover:text-[#1AB196] transition duration-150'>Ovozberish</Link>
          <Link className='hover:text-[#1AB196] transition duration-150'>Reklama</Link>
          <Link className='hover:text-[#1AB196] transition duration-150'>Hamkorlik</Link>
        </div>
        <div className='flex flex-col items-start gap-2'>
          <strong className='mb-1'>Companiy</strong>
          <a href='tel:+998500070141' className='hover:text-[#1AB196] underline transition duration-150'>Bog'lanish</a>
          <a href='https://t.me/axrorxonovdev' className='hover:text-[#1AB196] underline transition duration-150'>Yangiliklar</a>
          <Link className='hover:text-[#1AB196] transition duration-150'>Manzilimiz (frilanser)</Link>
        </div>
        <div className='flex flex-col items-start gap-2'>
          <strong className='mb-1'>Qo'llab quvvatlash</strong>
          <Link className='hover:text-[#1AB196] underline transition duration-150'>Donate</Link>
          <p className='max-w-96 text-[#9CA3AF] hover:text-white transition duration-150'>Bizni Qo'llab quvvatlash uchun "donate" qiling yoki ijtioiy tarmoqlarda bizni kuzatib boring. ♥</p>
        </div>

      </div>
      <div className="container max-w-[1400px] mx-auto">
        <p className='mt-10 text-sm text-gray-400'>© 2025 axrorxonovdev — <a className='text-gray-500 underline' href="https://t.me/axrorxonovdev">t.me/axrorxonovdev</a></p>
      </div>
    </div>
  )
}

export default Footer