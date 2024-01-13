import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          title="Resident Evil"
          category="Ação"
          system="Windows"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          title="Resident Evil"
          category="Ação"
          system="Windows"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          title="Resident Evil"
          category="Ação"
          system="Windows"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          title="Resident Evil"
          category="Ação"
          system="Windows"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
