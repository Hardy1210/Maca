import { Header } from '@/components/sections/Header/Header'
import Button from '@/components/ui/Buttons/button_generic/ButtonHeader'
import { londrina } from '@/fonts/fonts'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <Header className={cn(styles.header, 'relative')}>
        <div className="absolute w-2/2 sm:w-1/2 top-40 opacity-10 sm:-left-[20%] sm:top-56 -rotate-45 ">
          <Image
            src="/images/others/monstera-leaft.webp"
            alt="Monstera Leaft"
            width={1200}
            height={1200}
          />
        </div>
        <div className={cn(styles.details, 'absolute right-[10%] top-16')}>
          <Image
            src="/images/others/menta.webp"
            alt="A leaft"
            width={272}
            height={654}
          />
        </div>

        <div
          className={cn(
            styles.headerMain,
            'm-auto max-w-5xl flex flex-col-reverse sm:flex-row mt-5 md:mt-5 px-4 md:px-7 justify-evenly items-center',
          )}
        >
          <div className="flex-1 w-full md:max-w-[50%] pb-10">
            <h1
              className={cn(
                styles.logoText,
                'text-[154px] text-center md:text-start leading-none -mb-24 sm:-mb-0',
                londrina.className,
              )}
            >
              Maca
            </h1>
            <div className="sm:hidden min-w-80">
              <Image
                src="/images/meals/withoutBack/medium/recipe1/recipe1.webp"
                alt="Riz printanier"
                width={600}
                height={600}
                className="drop-shadow-[-10px_20px_20px_rgba(0,0,0,0.5)]"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              illo sunt ut repellat nesciunt ducimus molestias numquam
              voluptatum, optio assumenda, a pariatur commodi sed veniam quia
              rem magni laborum. Qui.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                size="large"
                variant="primary"
                href="/generate"
                className="mt-10"
              >
                Allons si !
              </Button>
            </div>
          </div>
          <div className="relative hidden sm:flex-row sm:flex min-w-56">
            <div>
              <Image
                src="/images/meals/withoutBack/medium/recipe1/recipe1.webp"
                alt="Riz printanier"
                width={600}
                height={600}
                className="drop-shadow-[-10px_20px_20px_rgba(0,0,0,0.5)]"
              />
            </div>
            <div className="w-20 -ml-20 mt-10">
              <Image
                src="/images/utensils/fork-1.webp"
                alt="Fork"
                width={112}
                height={700}
                className="drop-shadow-[-10px_20px_20px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </Header>
    </>
  )
}
