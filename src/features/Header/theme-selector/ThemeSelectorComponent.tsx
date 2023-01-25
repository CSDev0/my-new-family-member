import { FormControlLabel, Switch, FormGroup } from '@mui/material'
import { themeTypes } from '../WebConfigSlice';

export interface IThemeSelectorComponentProps {
    onToggleTheme: () => any;
    currentTheme: themeTypes;
}
export default function ThemeSelectorComponent(props: IThemeSelectorComponentProps) {
    const { onToggleTheme, currentTheme } = props;
    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Switch checked={currentTheme === 'dark'} onChange={onToggleTheme} />
                }
                label="Dark Mode"
            />
        </FormGroup>
    )
}
