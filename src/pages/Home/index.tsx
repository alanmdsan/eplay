import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import star_wars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror.',
    title: 'Resident Evil 4',
    system: 'Windows',
    image: resident,
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Os jogadores enfrentam hordas de monstros, exploram masmorras, coletam tesouros e lutam contra chefes poderosos em sua jornada para derrotar o Senhor do Terror.',
    title: 'Diablo',
    system: 'PS5',
    image: diablo,
    infos: ['10%', 'R$ 290,00']
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'Após Ganon e seus lacaios invadirem o reino para roubar a Triforce, a princesa Zelda divide a Triforce da sabedoria em oito pedaços para impedir o vilão de obtê-la.',
    title: 'Zelda',
    system: 'XBox 360',
    image: zelda,
    infos: ['15%', 'R$ 279,00']
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Você — um padawan que virou fugitivo — precisa lutar por sua sobrevivência enquanto explora os mistérios de uma civilização há muito extinta, na esperança de reerguer a Ordem Jedi.',
    title: 'Star Wars',
    system: 'Windows',
    image: star_wars,
    infos: ['10%', 'R$ 250,00']
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Você — um padawan que virou fugitivo — precisa lutar por sua sobrevivência enquanto explora os mistérios de uma civilização há muito extinta, na esperança de reerguer a Ordem Jedi.',
    title: 'Star Wars',
    system: 'Windows',
    image: star_wars,
    infos: ['15/01']
  },
  {
    id: 6,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror.',
    title: 'Resident Evil 4',
    system: 'Windows',
    image: resident,
    infos: ['16/01']
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Os jogadores enfrentam hordas de monstros, exploram masmorras, coletam tesouros e lutam contra chefes poderosos em sua jornada para derrotar o Senhor do Terror.',
    title: 'Diablo',
    system: 'PS5',
    image: diablo,
    infos: ['17/01']
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Após Ganon e seus lacaios invadirem o reino para roubar a Triforce, a princesa Zelda divide a Triforce da sabedoria em oito pedaços para impedir o vilão de obtê-la.',
    title: 'Zelda',
    system: 'XBox 360',
    image: zelda,
    infos: ['18/01']
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
