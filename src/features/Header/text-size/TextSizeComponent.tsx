import { Box, ButtonGroup, Button, IconButton } from '@mui/material'
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import React from 'react'

export interface ITextSizeComponentProps {
    fontSize: number;
    onIncrementFontSize: () => any;
    onDecrementFontSize: () => any;
    setDefaultFontSize: () => any;
    disableLimits: {
        default: number,
        decrement: number,
        increment: number,
    }
}

export default function TextSizeComponent(props: ITextSizeComponentProps) {
    const { fontSize, onIncrementFontSize, onDecrementFontSize, setDefaultFontSize, disableLimits } = props;
    return (
        <Box p={5}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <IconButton color='primary' disabled={fontSize >= disableLimits.decrement} onClick={onDecrementFontSize}><TextDecreaseIcon /></IconButton>
                <IconButton color='secondary' disabled={fontSize === disableLimits.default} onClick={setDefaultFontSize}>< SettingsBackupRestoreIcon/></IconButton>
                <IconButton color='primary' disabled={fontSize <= disableLimits.increment} onClick={onIncrementFontSize}><TextIncreaseIcon /></IconButton>
            </ButtonGroup>
        </Box >
    )
}