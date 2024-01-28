import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburger,
  HeaderRow,
  NavMobile
} from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton role="button" onClick={openCart}>
          {items.length}
          <span>&nbsp;-&nbsp;produto(s)</span>
          <img src={cart} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link
              title="Clique aqui para acessar a página de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
