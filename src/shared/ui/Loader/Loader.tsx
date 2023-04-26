import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string
}

const Loader = memo(({ className }:LoaderProps) => (
    <div className={classNames('Loader', {}, [className])}>
        <div />
        <div />
    </div>
));

export default Loader;
