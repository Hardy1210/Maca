'use client'
import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'
import styles from './section.module.scss'

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn(styles.section, 'max-w-7xl m-auto')}>
      {props.children}
    </section>
  )
}
