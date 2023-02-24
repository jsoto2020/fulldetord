import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';

import { ProductList } from '../components/products';
import { useProducts } from '../hooks';

import { FullScreenLoading } from '../components/ui';
import { useEffect, useState } from 'react';
import Presentacion from '../components/ui/Presentacion';


const HomePage: NextPage = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);


  
    const { products, isLoading } = useProducts('/products');
  
  


  return (
    <ShopLayout title={'FulldetoRD - Home'} pageDescription={'Encuentra Productos Divertidos'}>
        
        <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
        
        {
          loading
          
            ? <FullScreenLoading />
            : <ProductList products={ products } />
        }

        
    

    </ShopLayout>
  )
}

export default HomePage
