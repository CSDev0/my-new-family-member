import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react'
import LogoIcon from '@assets/svg/LogoIcon';
import TextSizeComponent, { ITextSizeComponentProps } from './text-size/TextSizeComponent'
import ThemeSelectorComponent, { IThemeSelectorComponentProps } from './theme-selector/ThemeSelectorComponent'

export interface IHeaderComponentProps {
    location: any;
    textSizeProps: ITextSizeComponentProps;
    themeSelectorProps: IThemeSelectorComponentProps;
};

export default function HeaderComponent(props: IHeaderComponentProps) {
    return (

        <Box sx={{ flexGrow: 1 }} width={1}>
            <AppBar color='inherit' position="fixed" sx={{ height: '90px' }}>
                <Toolbar>
                    <Grid container justifyContent="flex-start" alignItems="center">
                        <Grid item>
                            <LogoIcon size={'lg'} />
                        </Grid>
                        <Grid item display={{ xs: 'none', md: 'flex' }}>
                            <Typography variant={"h6"} color={'secondary'}>My New Family Member</Typography>
                        </Grid>
                    </Grid>
                    <Grid display={{ xs: 'none', md: 'flex' }} sm={6} lg={12} container justifyContent="flex-center" alignItems="center" columnSpacing={1}>
                        <Grid item xs={'auto'}>
                            <Button color={location.pathname === '/' ? 'primary' : 'inherit'} >
                                Home
                            </Button>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Button color={location.pathname === '/contact' ? 'secondary' : 'inherit'}>
                                Contact
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid display={{ xs: 'none', md: 'flex' }} xs="auto" container justifyContent="flex-end" alignItems="center">
                        <Grid item >
                            <TextSizeComponent {...props.textSizeProps} />
                        </Grid>
                        <Grid item >
                            <ThemeSelectorComponent {...props.themeSelectorProps} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>

    )
}
