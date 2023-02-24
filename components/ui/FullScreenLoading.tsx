
import { Box, Card, CircularProgress, Typography,CardMedia } from '@mui/material'

import Presentacion from './Presentacion'


export const FullScreenLoading = () => {
  
console.log('loading')
  return (
    <Box 
        display='flex' 
        flexDirection='column'
        justifyContent='center' 
        alignItems='center' 
        height='calc(100vh - 200px)'
    >
      {/*   <Typography sx={{ mb: 3 }} variant="h2" fontWeight={ 200 } fontSize={ 20 }>Cargando...</Typography> */}
        {/* <CircularProgress thickness={ 2 } /> */}
      
        <img src="/presenta.gif" width='350' height='350' />
    </Box>
  )
}
