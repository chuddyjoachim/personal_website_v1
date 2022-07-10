import React, { FC } from 'react'
import classNames from 'classnames'
import { sizeType } from '../../lib/types'
import Loader from './Loader'

const classes = {
  accent: {
    filled:
      'bg-purple-x-300 hover:bg-purple-x-400 text-slate-100 focus:ring-4 focus:ring-purple-x-600 focus:ring-opacity-20',
    outlined:
      'border border-purple-x-600 text-purple-x-600 hover:bg-purple-x-600 hover:text-white focus:ring-4 focus:ring-purple-x-600 focus:ring-opacity-20',
    subtle: 'bg-purple-x-600 bg-opacity-10 text-purple-x-600 hover:bg-opacity-20',
    text: 'bg-purple-x-600 bg-opacity-0 text-purple-x-600 hover:bg-opacity-10',
    loader: {
      filled: 'text-white',
      outlined: 'text-purple-x-600',
      text: 'text-purple-x-600',
      subtle: 'text-purple-x-600',
    },
  },
  white: {
    filled:
      'bg-slate-100 hover:bg-slate-200 text-gray-800 focus:ring-4 focus:ring-slate-100 focus:ring-opacity-20',
    outlined:
      'border border-slate-100 text-slate-100 hover:bg-slate-200 hover:text-gray-800 focus:ring-4 focus:ring-slate-100 focus:ring-opacity-20',
    subtle: 'bg-slate-100 bg-opacity-10 text-slate-100 hover:bg-opacity-20',
    text: 'bg-slate-100 bg-opacity-0 text-slate-100 hover:bg-opacity-10',
    loader: {
      filled: 'text-gray-800',
      outlined: 'text-slate-100',
      text: 'text-slate-100',
      subtle: 'text-slate-100',
    },
  },
  black: {
    filled: 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-4 focus:ring-gray-200',
    outlined:
      'border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200',
    subtle: 'bg-gray-600 bg-opacity-10 text-gray-800 hover:bg-opacity-20',
    text: 'bg-gray-600 bg-opacity-0 text-gray-800 hover:bg-opacity-10',
    loader: {
      filled: 'text-white',
      outlined: 'text-gray-600',
      text: 'text-gray-600',
      subtle: 'text-gray-600',
    },
  },
}

interface ButtonProps<T> {
  color?: keyof T
  variant?: keyof T[keyof T]
  disabled?: boolean
  loading?: boolean
  rightIcon?: React.Component | React.ReactNode
  leftIcon?: React.Component | React.ReactNode
  block?: boolean
  size?: sizeType
  onClick: () => {} | void
  className?: string
  children: React.ReactNode
}
type BtnClassType = typeof classes

const Button: FC<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    ButtonProps<BtnClassType>
> = ({
  variant = 'filled',
  color = 'accent',
  size = 'md',
  disabled = false,
  loading = false,
  rightIcon,
  leftIcon,
  block = false,
  onClick,
  className,
  children,
  ...rest
}) => {
  const _className = classNames(
    {
      'px-2 py-[2px] text-[.88rem]': size === 'xs',
      'px-3 py-1 text-[.94rem]': size === 'sm',
      'px-4 py-2': size === 'md',
      'px-6 py-3': size === 'lg',
      'opacity-50 pointer-events-none cursor-not-allowed': disabled,
      'opacity-80 pointer-events-none cursor-default': loading,
      'flex w-full': block,
    },
    classes[color][variant],
    'font-medium rounded-md transition duration-100 inline-flex items-center whitespace-nowrap',
    className
  )

  return (
    <button
      onClick={() => (!disabled && !loading ? onClick() : null)}
      className={_className}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="mx-auto text-5xl">
          <Loader
            className={classNames(
              classes[color].loader[variant as keyof BtnClassType[keyof BtnClassType]['loader']]
            )}
          />
        </span>
      ) : (
        <>
          {!!leftIcon && (
            <>
              <span className="mr-4">{leftIcon}</span>
              <span className="flex-1" />
            </>
          )}
          <span>{children}</span>
          {!!rightIcon && (
            <>
              <span className="flex-1" />
              <span className="ml-4">{rightIcon}</span>
            </>
          )}
        </>
      )}
    </button>
  )
}

Button.displayName = 'Button'

export default Button
