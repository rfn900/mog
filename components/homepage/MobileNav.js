import Image from 'next/image'
import { AppButton } from './AppButton'
import { RiFacebookFill } from 'react-icons/ri'
import { FiInstagram } from 'react-icons/fi'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { scroller } from 'react-scroll'
export default function MobileNav({ menuOpen, setMenuOpen }) {
  const opacityTransition = menuOpen ? 'opacity-100' : 'opacity-0'
  const scrollToContact = () =>
    scroller.scrollTo('contact', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })

  return (
    <div
      className={`shadow-xl px-6 pt-4 pb-12 overflow-scroll h-full flex flex-col transition duration-500 ${opacityTransition}`}
    >
      <div className="flex pr-4 gap-4">
        <div className="h-16 w-16 bg-white rounded-full p-2 shadow-lg">
          <Image
            src="/MOG_logo.png"
            width={300}
            height={300}
            objectFit="contain"
            alt="logo"
          />
        </div>
      </div>
      <div className="h-px bg-gray-200 mt-4 text-gray-100"></div>
      <div className="flex flex-col py-8 text-gray-400 px-2 gap-4">
        <div className="text-xl p-2">
          <a href="/about">About Us</a>
        </div>
        <div className="text-xl p-2">
          <a href="/case-study">Case Study</a>
        </div>
        <div className="text-xl p-2">
          <a href="/dashboard">Admin</a>
        </div>
        <AppButton
          text="Contact Us"
          btnType="btn-secondary"
          className="px-2 mt-4 w-1/2 mx-0"
          action={() => {
            scrollToContact()
            setMenuOpen(false)
          }}
        />
      </div>
      <div className="mt-16 flex gap-8 w-full justify-center items-center">
        <div className="relative z-10">
          <RiFacebookFill className="w-8 h-8 text-indigo-600 relative z-10" />
          <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-0 rounded-full transform rotate-12 rounded-lg"></span>
        </div>
        <div className="relative z-10">
          <FiInstagram className="w-8 h-8 text-indigo-600 relative z-10" />
          <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-0 rounded-full transform rotate-12 rounded-lg"></span>
        </div>
        <div className="relative z-10">
          <RiLinkedinBoxLine className="w-9 h-9 text-indigo-600 relative z-10" />
          <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-0 rounded-full transform rotate-12 rounded-lg"></span>
        </div>
      </div>
      <div className="mx-auto mt-4">
        <p className="text-sm text-gray-400">Marsian Online Group AB ©</p>
      </div>
    </div>
  )
}
