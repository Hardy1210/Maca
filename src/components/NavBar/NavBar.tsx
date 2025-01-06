'use client'
import { oswald } from '@/fonts/fonts'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { RecipeIcon } from '../Icons/RecipeIcon'
import styles from './navBar.module.scss'

interface NavBarProps {
  className?: string
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <>
      <nav
        className={cn(
          styles.navBar,
          'py-4 md:py-7 px-2 md:px-3 max-w-[87rem] m-auto flex flex-row justify-between items-center gap-10  md:gap-20 lg:gap-56 text-lg text-foreground',
          oswald.className,
          className,
        )}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center gap-2 max-w-xs md:max-w-md h-auto">
            {/* Logo 1 */}
            <div className="w-7 md:w-10">
              <Image
                src="/images/logos/maca-logo.webp"
                alt="Maca logo"
                layout="responsive" // Hace que sea responsivo automáticamente
                width={40} // Proporción base
                height={10} // Proporción base
                priority={true}
              />
            </div>
            {/* Logo 2 */}
            <div className="w-24 md:w-32">
              <Image
                src="/images/logos/maca-logo-2.webp"
                alt="Maca logo"
                layout="responsive" // Hace que sea responsivo automáticamente
                width={120} // Proporción base
                height={10} // Proporción base
                priority={true}
              />
            </div>
          </div>
          <div>
            <ul className={cn(styles.navList, 'flex flex-row gap-5 md:gap-7')}>
              <li>Accueil</li>
              <li>À propos</li>
              <li>Recettes</li>
              <li>Noel</li>
            </ul>
          </div>
        </div>
        <div className="hidden sm:block">
          <RecipeIcon className="text-foreground" width={30} />
        </div>
      </nav>
    </>
  )
}
export default NavBar
