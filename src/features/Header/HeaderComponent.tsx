import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react'
import LogoIcon from '@assets/svg/LogoIcon';
import TextSizeComponent, { ITextSizeComponentProps } from './text-size/TextSizeComponent'
import ThemeSelectorComponent, { IThemeSelectorComponentProps } from './theme-selector/ThemeSelectorComponent'
import SidebarComponent from './sidebar/SidebarComponent';

export interface IHeaderComponentProps {
    location: any;
    textSizeProps: ITextSizeComponentProps;
    themeSelectorProps: IThemeSelectorComponentProps;
};

export default function HeaderComponent(props: IHeaderComponentProps) {

    const Anchors = () =>
        <>
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
        </>


    return (

        <Box sx={{ flexGrow: 1 }} width={1}>
            <AppBar color='inherit' position="fixed" sx={{ pb: 1, pt: 1, height: 'fit-content', maxHeight: '90px' }}>
                <Toolbar>
                    <Grid container justifyContent="flex-start" alignItems="center">
                        <Grid item display={{ xs: 'none', md: 'flex' }}>
                            <LogoIcon size={'lg'} />
                        </Grid>
                        <Grid item display={{ xs: 'flex', md: 'none' }}>
                            <LogoIcon size={'md'} />
                        </Grid>
                        <Grid item display={{ xs: 'none', md: 'flex' }}>
                            <Typography variant={"h6"} color={'secondary'}>My New Family Member</Typography>
                        </Grid>
                        <Grid item display={{ xs: 'flex', md: 'none' }}>
                            <Typography variant={"subtitle1"} sx={{fontSize: 13}} color={'secondary'}>My New Family Member</Typography>
                        </Grid>
                    </Grid>
                    <Grid display={{ xs: 'none', md: 'flex' }} container justifyContent="flex-center" alignItems="center" columnSpacing={1}>
                        <Anchors />
                    </Grid>
                    <Grid display={{ xs: 'none', md: 'flex' }} container justifyContent="flex-end" alignItems="center">
                        <Grid item >
                            <TextSizeComponent {...props.textSizeProps} />
                        </Grid>
                        <Grid item >
                            <ThemeSelectorComponent {...props.themeSelectorProps} />
                        </Grid>

                    </Grid>
                    <Grid display={{ xs: 'flex', md: 'none' }}>
                        <SidebarComponent anchors={
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="center"
                            >
                                <Anchors />
                                <Grid item >
                                    <TextSizeComponent {...props.textSizeProps} />
                                </Grid>
                                <Grid item >
                                    <ThemeSelectorComponent {...props.themeSelectorProps} />
                                </Grid>
                            </Grid>} />
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>

    )
}
