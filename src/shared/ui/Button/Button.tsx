import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    CLEAR= 'clear',
    DARK_THEME= 'dark-theme'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme: ThemeButton
}

const Button:FC <ButtonProps> = (props) => {

    const {className, theme, children, ...otherProps} = props

    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])}
        {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;