import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { scroller } from 'react-scroll'
import { AppButton } from './AppButton'
import MobileNav from './MobileNav'
import AnimatedMenuIcon from './AnimatedMenuIcon'
import Highlight from '../layouts/Highlight'

function Nav() {
  const router = useRouter()
  const scrollToContact = () =>
    scroller.scrollTo('contact', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setScrolled(true) : setScrolled(false)
    })
    return () =>
      window.removeEventListener('scroll', () => {
        window.scrollY > 80 ? setScrolled(true) : setScrolled(false)
      })
  })

  return (
    <div
      className={`fixed top-0 z-30 flex items-center transition duration-300 justify-center w-screen m-auto p-6 sm:px-12 ${
        scrolled ? 'bg-white bgopacity-95' : 'bg-transparent'
      }`}
    >
      <div className="flex cursor-pointer items-center justify-between w-full max-w-6xl">
        <Link href="/">
          <img src="/MOG_Logo_vr2_DIY.png" alt="logo" className="h-10" />
        </Link>
        <div className="justify-around hidden m-auto text-lg font-thin w-96 lg:flex">
          <div className="min-w-max">
            <Highlight classes="transform transition origin-left scale-0 mt-1 -ml-2 group-hover:scale-100">
              <Link href="/case-study">Case Study</Link>
            </Highlight>
          </div>
          <div className="min-w-max">
            <Highlight classes="transform transition origin-top-left scale-0 mt-1 -ml-2 group-hover:scale-100">
              <Link href="/about">About Us</Link>
            </Highlight>
          </div>
          <div className="min-w-max">
            <Highlight classes="transform transition origin-left scale-0 mt-1 -ml-2 group-hover:scale-100">
              <Link href="/dashboard">Admin</Link>
            </Highlight>
          </div>
        </div>
        <div className="hidden lg:flex">
          <AppButton
            text="Contact Us"
            btnType="btn-secondary"
            action={() =>
              router.pathname === '/'
                ? scrollToContact()
                : router.push('/#contact')
            }
          />
        </div>
        <AnimatedMenuIcon
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
          className="relative z-50 flex items-center justify-start w-8 h-8 cursor-pointer text-myblue lg:hidden"
        />
      </div>
      <div
        className={`fixed top-0 -left-0 z-40 left-full transform transition duration-700 w-screen h-screen bg-gray-50 ${
          menuOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  )
}

export default Nav
