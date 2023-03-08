import { Box, Card, CardMedia } from '@mui/material';
import Image from "next/image";
import { ShopLayout } from "../../components/layouts"


const PageAbout = () => {
    const image = "./aboutus/background2.gif";    
  return (
    <ShopLayout title={"About Us "} pageDescription={"Acerca de Nosotros"}  >
        
        <Box display='flex' flexDirection='column' sx={{ mt: 10,alignContent: 'center', lg:"12", md: "8", }}  >
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
          <CardMedia component="img" image='/aboutus/background2.gif' sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }} >
         {/*     <img src='/aboutus/background2.gif' /> */}
          </CardMedia>
       </Card>
       <Card>
       <CardMedia component="img" image='/aboutus/background1.png' sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }} >
            {/* <img src='/aboutus/background1.png'/> */}
        </CardMedia>
       </Card>
       </Box>
    </ShopLayout>
    
  )
}

export default PageAbout