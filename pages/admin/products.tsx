import NextLink from 'next/link';
import { AddOutlined, CategoryOutlined, DeleteOutline } from '@mui/icons-material';
import { Box, Button,  CardMedia,  Grid, Link } from '@mui/material'

import { DataGrid,  GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import useSWR from 'swr';

import { AdminLayout } from '../../components/layouts'
import { IProduct  } from '../../interfaces';
import { useState } from 'react';
import { tesloApi } from '../../api';





const ProductsPage = () => {
 //   const [selectedRows, setSelectedRows] = useState([]);
 
 const [selecTed, setSelected  ] = useState<String[]>()  

    const { data, error } = useSWR<IProduct[]>('/api/admin/products');

    if ( !data && !error ) return (<></>);
    

    const columns:GridColDef[] = [

    
    { 
        field: 'img', 
        headerName: 'Foto',
        renderCell: ({ row }: GridValueGetterParams ) => {
            return (
                <a href={ `/product/${ row.slug }` } target="_blank" rel="noreferrer">
                    <CardMedia 
                        component='img'
                        alt={ row.title }
                        className='fadeIn'
                        image={row.img }
                    />
                    
                </a>
            )
        }
    },
    { 
        field: 'title', 
        headerName: 'Title', 
        width: 250,
        renderCell: ({row}: GridValueGetterParams) => {
            return (
                <NextLink href={`/admin/products/${ row.slug }`} passHref>
                    <Link underline='always'>
                        { row.title}
                    </Link>
                </NextLink>
            )
        }
    },
    { field: 'gender', headerName: 'Género' },
    { field: 'type', headerName: 'Tipo' },
    { field: 'inStock', headerName: 'Inventario' },
    { field: 'price', headerName: 'Precio' },
    { field: 'sizes', headerName: 'Tallas', width: 250 },      

];

    const rows = data!.map( product => ({
        

        id: product._id,
        img: product.images[0],
        title: product.title,
        gender: product.gender,
        type: product.type,
        inStock: product.inStock,
        price: product.price,
        sizes: product.sizes.join(', '),
        slug: product.slug
    }));
    
const eliminaDato = async(item: any) =>{
    
  
    try {
        const { data } = await tesloApi({
            url: '/admin/products',
            method:  'DELETE',  
            data: item
        });


    } catch (error) {
        console.log(error);

    }
}
   
  return (
    <AdminLayout 
        title={`Productos (${ data?.length })`} 
        subTitle={'Mantenimiento de productos'}
        icon={ <CategoryOutlined /> }
        
    >
        <Box display='flex' justifyContent='end' sx={{ mb: 2 }}>
           <Button
                startIcon={ <AddOutlined /> }
                color="secondary"
                href="/admin/products/new"
            >
                Crear producto
            </Button>
            <Button
                sx={{ ml:2 }}
                startIcon={ <DeleteOutline /> }
                color="error"
                onClick={()=>{
                  eliminaDato(selecTed)
                }}
            >
                Eliminar
            </Button>
        
        </Box>
   

         <Grid container className='fadeIn' sx={{ backgroundColor:'whitesmoke'}}>
        

            <Grid item xs={12} sx={{ height:650, width: '100%' }}>
                <DataGrid 
                    rows={ rows }
                    columns={ columns }
                    pageSize={ 10 }
                    rowsPerPageOptions={ [10] }
                    checkboxSelection
                    onSelectionModelChange={(ids) => {
                        const selectedIds = new Set(ids);
                        const selectedRows = rows.filter((row) => selectedIds.has(row.id))
                        const idslist = selectedRows.map(id =>{
                        
                           return id.id
                        })
                        
                        setSelected(idslist)
                    }} 

                />

            </Grid>
        </Grid>
        
    </AdminLayout>
  )
}

export default ProductsPage;