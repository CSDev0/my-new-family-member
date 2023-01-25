import { Box, Button, Drawer } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
export default function SidebarComponent({ anchors }: any) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer =(open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                setIsOpen(!isOpen);
            };

    return (
        <React.Fragment>
            <Button color="secondary" onClick={toggleDrawer(true)}><MenuIcon sx={{ fontSize: 38 }}/></Button>
            <Drawer
                anchor={'right'}
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                >
                    {anchors}
                </Box>
            </Drawer>
        </React.Fragment>
    )
}
