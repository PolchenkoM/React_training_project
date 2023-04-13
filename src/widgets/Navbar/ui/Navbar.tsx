import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
                <Modal
                    isOpen={isAuthModal}
                    onClose={onToggleModal}
                >
                    {/* eslint-disable-next-line */}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut repellat nemo, quos soluta iusto alias distinctio nihil, nostrum doloribus accusamus, voluptate facere quasi veritatis beatae odit. Id, vero dolor! Accusantium?

                </Modal>

            </div>
        </div>
    );
};
