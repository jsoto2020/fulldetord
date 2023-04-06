import { Box, Card, CardMedia, Paper } from '@mui/material';
import Image from "next/image";
import { ShopLayout } from "../../components/layouts"


const imagen = '/static/blank.png';
const styles = {
  paperContainer: {
      backgroundImage: `url(${imagen})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100%"
  }
};

const PageAbout = () => {
    const image = "./aboutus/background2.gif";    
  return (
    <Paper style={styles.paperContainer}>

    
    <ShopLayout title={"About Us "} pageDescription={"Acerca de Nosotros"}  >
        
        <Box display='flex' flexDirection='column' sx={{ mt: 11,alignContent: 'center', lg:"12", md: "8", }}  >
    {/*     <Image
                width={320}
                height={580}  
                src="/aboutus/background2.gif"
                alt="Default Image"
                objectFit="cover"
    />
    </Box>
    <Box display='flex' flexDirection='column' sx={{ mt:1,alignContent: 'center', lg:"12", md: "8", }}  >
     <Image
                width={320}
                height={4300}  
                src="/aboutus/background1.png"
                alt="Default Image"
                objectFit="cover"
    />
 */}  
       <Card>
          <CardMedia component="img" image='/aboutus/background2.gif' sx={{ borderBlock:0, objectFit: "contain" }} >
         {/*     <img src='/aboutus/background2.gif' /> */}
          </CardMedia>
       </Card>
       <Card>
       <CardMedia component="img" image='/aboutus/background1.png' sx={{ borderBlock:0, objectFit: "contain" }} >
            {/* <img src='/aboutus/background1.png'/> */}
        </CardMedia>
       </Card>
       </Box>
    </ShopLayout>
    </Paper>
  )
}

export default PageAbout