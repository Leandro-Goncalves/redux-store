import { useDispatch, useSelector } from "react-redux"
import { IState } from "../../store"
import { ICartItem } from "../../store/modules/cart/types"
import { Container, Box, Item, Actions } from "./style"
import {FaCheck} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import { buyProducts, cancelProducts } from "../../store/modules/cart/actions"
import { useCallback } from "react"

import { toast } from 'react-toastify';
import { motion } from "framer-motion"

function productPriceFormat(price: number) {
  return price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}


export function ModalCart() {

  const dispatch = useDispatch();

  const modalCart = useSelector<IState, boolean>(state => state.modal.isModalCartOpen)
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)

  const total = cart.reduce((accumulator, currentValue) => accumulator + currentValue.product.price * currentValue.quantity, 0)

  const handleBuyCart = useCallback(() => {
    dispatch(buyProducts());
    toast.success("Compra efetuada com sucesso!")
  }, [dispatch])

  const handleCancelCart = useCallback(() => {
    dispatch(cancelProducts())
  }, [dispatch])

  return (
    <Container isOpen={modalCart && cart.length > 0}>
      <Box>
        <main>
          {cart.map( item => (
            <Item key={item.product.id}>
              <span>{item.quantity}x</span>
              <strong>{item.product.title}</strong>
              <span>{productPriceFormat(item.product.price)}</span>
            </Item>
          ))}
        </main>
        <Actions>

          <motion.button
            className="close"
            onClick={handleCancelCart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdClose
              color="white"
              size="3em"
            />
          </motion.button>

            {productPriceFormat(total)}

          <motion.button
            className="check"
            onClick={handleBuyCart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaCheck
              color="white"
              size="2em"
            />
          </motion.button>

        </Actions>
      </Box>
      <div className="square"/>
    </Container>
  )
}