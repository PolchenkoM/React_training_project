import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import Loader from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.asyc';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void
}

const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);

export default LoginModal;
