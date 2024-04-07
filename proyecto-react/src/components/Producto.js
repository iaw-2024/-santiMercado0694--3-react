import React, { useState } from 'react';
import { useGlobalContext } from '../Context.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Pagination from './layouts/Pagination.js';
import Loading from './layouts/Loading.js';
import '../App.css'; 

export default function Producto() {
  const { productos, loading } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  // Lógica para obtener los productos de la página actual
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productos.slice(indexOfFirstPost, indexOfLastPost);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="main-container">
      <div className="card-container">
        {currentPosts.map((producto, index) => (
          <Card
            key={producto.id}
            sx={{
              maxWidth: 400,
              minWidth: 350,
              marginBottom: '20px',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {producto.nombre}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="300" 
              width="300" 
              image={producto.imagen}
              alt={producto.nombre}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Typography variant="h5" color="text.secondary">
                Precio: {producto.precio}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={productos.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
