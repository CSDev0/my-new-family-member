import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks';
import HeaderComponent from './HeaderComponent'
import { RootState } from '@app/store';
import { decrementFontSize, incrementFontSize, setFontSize, toggleTheme } from './WebConfigSlice';
import { useLocation } from 'react-router-dom';


export default function HeaderLayout() {

    const location = useLocation();
    const dispatch = useAppDispatch();
    const fontSize = useAppSelector((state: RootState) => state.webConfig.fontSize)
    const onIncrementFontSize = () => dispatch(incrementFontSize());
    const onDecrementFontSize = () => dispatch(decrementFontSize());
    const setDefaultFontSize = () => dispatch(setFontSize(15));
    const disableLimits = { default: 15, decrement: 20, increment: 10 };
    const currentTheme = useAppSelector((state: RootState) => state.webConfig.theme);
    
    const onToggleTheme = () => {
        dispatch(toggleTheme());
    }

    return (
            <HeaderComponent
                {...{location}}
                textSizeProps={{ fontSize, onIncrementFontSize, onDecrementFontSize, disableLimits, setDefaultFontSize }}
                themeSelectorProps={{ currentTheme, onToggleTheme }} />
    )
}
