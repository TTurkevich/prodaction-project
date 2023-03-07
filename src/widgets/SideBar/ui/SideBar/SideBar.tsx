/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames'

import { PropsWithChildren, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import cls from './SideBar.module.scss'

interface SideBarProps {
  className?: string
}

export const SideBar = (props: PropsWithChildren<SideBarProps>) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
      <button type='button' onClick={onToggle}>
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}
