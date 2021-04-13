import React, { useEffect, useState } from 'react';

import { IProduct } from '../../store/modules/cart/types';
import api from '../../services/api';
import { CatalogItem } from '../CatalogItem';
import { Container } from './style';

export const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, []);

  return (
    <Container>

      <h1>Redux Store</h1>

      <div>
        {catalog.map( product => (
          <CatalogItem key={product.id} product={product}/>
        ))}
      </div>
      
    </Container>
  );
}