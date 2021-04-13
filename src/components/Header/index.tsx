
import { Container, Badge } from "./styles";
import {HiShoppingCart} from 'react-icons/hi'
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStateModalCartRequest } from '../../store/modules/modal/actions';
import { IState } from "../../store";
import { ICartItem } from "../../store/modules/cart/types";

function CalculateItens(cart:ICartItem[], breakPoint?: number) {
  const cartItensValue = cart.map(item => item.quantity);
  const value = cartItensValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  if(breakPoint && value > breakPoint){
    return `${breakPoint}+`
  }
  return value
}


export function Header() {

  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)
  

  const dispatch = useDispatch();

  const handleChangeStateModalCart = useCallback(() => {

    const CartLength = CalculateItens(cart)
    dispatch(changeStateModalCartRequest(Number(CartLength)))

  }, [dispatch, cart])

  return(
    <Container>
      <button
        onClick={handleChangeStateModalCart}
      >
        {cart.length > 0 && (
          <Badge>
            {CalculateItens(cart,9)}
          </Badge>
        )}
        <HiShoppingCart size="3em" color="white"/>
      </button>
    </Container>
  )
}