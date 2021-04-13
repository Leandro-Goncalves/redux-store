import { motion } from 'framer-motion';
import React, { useCallback } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';
import { Container } from './style';

interface CatalogItemProps {
  product: IProduct
}

function productPriceFormat(price: number) {
  return price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {

  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])

  return (
    <Container
      as={motion.div}
      initial={{
        y: 100,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
    >
      <img src={product.image} alt={product.title}/>
      <div>{product.title}</div>
      <div>{productPriceFormat(product.price)}</div>
      
      <motion.button
        type="button"
        onClick={handleAddProductToCart}
        disabled={hasFailedStockCheck}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Adicionar
        <HiShoppingCart />
      </motion.button>
    </Container>
  )
}