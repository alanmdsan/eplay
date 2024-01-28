import { useDispatch } from 'react-redux'
import { parseToBrl } from '../../utils'
import { Banner, Infos } from './styles'
import Tag from '../Tag'
import Button from '../Button'

import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <Infos>
          <h2>{game.name}</h2>
          {game.prices.current && (
            <>
              <p>
                {game.prices.discount && (
                  <>
                    De <span>{parseToBrl(game.prices.old)}</span>
                    <br />
                  </>
                )}
                Por {parseToBrl(game.prices.current)}
              </p>
              <Button
                type="button"
                title="Clique aqui para adicionar este jogo ao carrinho"
                onClick={addToCart}
              >
                Adicionar ao carrinho
              </Button>
            </>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
