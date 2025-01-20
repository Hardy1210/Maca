import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'
import styles from './buttonHeader.module.scss'

interface ButtonHeaderProps {
  children: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  className?: string
  onClick?: () => void // Agregado
}

const ButtonHeader: FC<ButtonHeaderProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  href,
  className,
  onClick,
}) => {
  const buttonClasses = cn(
    styles.button,
    styles[size],
    styles[variant],
    className,
  )

  if (href) {
    return (
      <Link href={href} className={cn(styles.buttonClasses, '', buttonClasses)}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={cn(styles.buttonClasses, '', buttonClasses)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonHeader
