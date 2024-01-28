import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'
import Button from '../Button'
import Tag from '../Tag'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    closeCart()
    navigate('/checkout')
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </CartItem>
              ))}
            </ul>
            <Quantity>{items.length} jogo(s) no carrinho</Quantity>
            <Prices>
              Total de {parseToBrl(getTotalPrice(items))}{' '}
              <span>Em até 6x sem juros</span>
            </Prices>
            <Button
              onClick={goToCheckout}
              type="button"
              title="Clique aqui para continuar com a compra"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-cart-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
