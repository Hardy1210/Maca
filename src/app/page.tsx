import Button from '@/components/Buttons/ButtonHeader'
import { Header } from '@/components/Header/Header'
import { londrina } from '@/fonts/fonts'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <Header className="">
        <div
          className={cn(
            styles.headerMain,
            'flex flex-row mt-10 px-7 justify-between items-center',
          )}
        >
          <div className="flex-1 max-w-[50%] pb-10">
            <h1
              className={cn(
                styles.logoText,
                ' text-[154px]',
                londrina.className,
              )}
            >
              Maca
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              illo sunt ut repellat nesciunt ducimus molestias numquam
              voluptatum, optio assumenda, a pariatur commodi sed veniam quia
              rem magni laborum. Qui.
            </p>
            <Button size="medium" variant="primary" href="#">
              Allons si !
            </Button>
          </div>
          <div className=" min-w-96">
            <Image
              src="/images/meals/withoutBack/medium/recipe1/recipe1.webp"
              alt="Riz printanier"
              width={600}
              height={600}
              className="drop-shadow-[-10px_20px_20px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </Header>
    </>
  )
}
