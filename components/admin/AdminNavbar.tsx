import { useContext } from 'react';
import NextLink from 'next/link';


import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';


import { UiContext } from '../../context';

export const AdminNavbar = () => {

    const { toggleSideMenu } = useContext( UiContext );
    

    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref>
                    <Link display='flex' alignItems='center' sx={{mt:5 }}>
                    <img src="/logo.png" width='100' height='100' />
                        
                    </Link>  
                </NextLink>

                <Box flex={ 1 } />

                <Button onClick={ toggleSideMenu }>
                    Menú
                </Button>

            </Toolbar>
        </AppBar>
    )
}
