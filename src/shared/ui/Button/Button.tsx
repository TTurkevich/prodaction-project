import { classNames } from 'shared/lib/classNames/classNames'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { className, children, theme, ...otherProps } = props

  return (
    <button type='button' className={classNames(cls.Button, { [cls[theme]]: true }, [className])} {...otherProps}>
      {children}
    </button>
  )
}
