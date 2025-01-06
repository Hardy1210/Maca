'use client'
import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

import NavBar from '../NavBar/NavBar'
import styles from './header.module.scss'

export const Header = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <header
      className={cn(styles.header, 'max-w-[90rem] pt-3 m-auto h-screen ')}
    >
      <NavBar className="z-[2]"></NavBar>
      {props.children}
    </header>
  )
}
//max-w-7xl m-auto bg-header
