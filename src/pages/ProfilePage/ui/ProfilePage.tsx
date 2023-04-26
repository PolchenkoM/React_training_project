import { profileReducer } from 'app/entities/Profile';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// import Input from 'shared/ui/Input/Input';

const reducers:ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('Profile page')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
