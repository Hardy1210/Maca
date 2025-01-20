'use client'

import { oswald } from '@/fonts/fonts'
import { cn } from '@/lib/utils'
import Hamburger from 'hamburger-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { RecipeIcon } from '../ui/icons/RecipeIcon'
import styles from './navBar.module.scss'

interface NavBarProps {
  className?: string
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  //animation menuBar from up to bottom
  useEffect(() => {
    if (menuRef.current) {
      if (navIsOpen) {
        menuRef.current.style.maxHeight = '100vh'
        document.body.style.overflow = 'hidden'
      } else {
        menuRef.current.style.maxHeight = '0'
        document.body.style.overflow = 'auto'
      }
    }
  }, [navIsOpen])

  return (
    <>
      <nav
        className={cn(
          styles.navBar,
          'py-4 md:py-7 px-4 md:px-3 max-w-5xl m-auto flex flex-row justify-between items-center gap-10 md:gap-20 lg:gap-56 text-lg text-foreground',
          oswald.className,
          className,
        )}
      >
        <div className="flex flex-row justify-between items-center md:items-end  w-full">
          <div className="z-20 flex flex-row items-center gap-2 max-w-xs md:max-w-md h-auto">
            {/* Logo 1 */}
            <div className="max-w-10 ">
              <Image
                src="/images/logos/maca-logo.webp"
                alt="Maca logo"
                width={500}
                height={505}
                priority={true}
              />
            </div>
            {/* Logo 2 */}
            <div className="max-w-32 ">
              <Image
                src="/images/logos/maca-logo-2.webp"
                alt="Maca logo"
                width={913}
                height={273}
                priority={true}
              />
            </div>
          </div>
          <div className="hidden md:block">
            <ul className={cn(styles.navList, 'flex flex-row gap-5 md:gap-7')}>
              <li>Accueil</li>
              <li>À propos</li>
              <li>Recettes</li>
              <li>Noel</li>
            </ul>
          </div>
          <div className="z-20 hidden sm:block md:hidden">
            <Hamburger toggled={navIsOpen} toggle={setNavIsOpen} size={30} />
          </div>
        </div>
        <div className="hidden md:block">
          <RecipeIcon className="text-foreground" width={30} />
        </div>
        <div className="z-20 fixed pl-1 bottom-60 right-0 bg-green-500 rounded-s-full sm:hidden">
          <Hamburger toggled={navIsOpen} toggle={setNavIsOpen} size={30} />
        </div>
      </nav>
      <div
        ref={menuRef}
        className={cn(
          styles.menuBar,
          'z-10 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden border-b-4 border-b-neutral-800',
        )}
        style={{ maxHeight: 0 }}
      >
        <ul className="flex flex-col items-center gap-5 p-5  space-y-8">
          <li>
            <a className="text-4xl" href="#accueil">
              Accueil
            </a>
          </li>
          <li>
            <a className="text-4xl" href="#apropos">
              À propos
            </a>
          </li>
          <li>
            <a className="text-4xl" href="#recettes">
              Recettes
            </a>
          </li>
          <li>
            <a className="text-4xl" href="#noel">
              Noel
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
