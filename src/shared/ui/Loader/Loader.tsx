import { classNames } from 'shared/lib/classNames/classNames'
import type { PropsWithChildren } from 'react'
import './Loader.scss'

interface LoaderProps {
  className?: string
}

export const Loader = (props: PropsWithChildren<LoaderProps>) => {
  const { className } = props

  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
