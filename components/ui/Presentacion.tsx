import { Box, Card, CardMedia } from '@mui/material'


const Presentacion = () => {
  return (
    <Box flex={ 1}>
        <Card sx={{ maxWidth: 400}}>
            <CardMedia 
            
                sx={{ height:140 }}
                image="/presenta.gif"
            
            />
                
             
        </Card>
        
    </Box>
  )
}

export default Presentacion