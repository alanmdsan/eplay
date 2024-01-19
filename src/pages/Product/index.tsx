import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import resident from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Tempora inventore at error sapiente modi? Nulla fugiat ea
          repudiandae nemo soluta adipisci, quibusdam eum necessitatibus
          praesentium sed? Delectus dolores porro odit.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> PS5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games <br />
          <b>Idiomas:</b> O jogo oferece Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ex quam qui nobis iste reprehenderit eligendi
          molestias ipsum expedita, quis ratione illum consequatur velit
          consectetur repellendus quasi debitis nemo, optio laborum?
        </p>
      </Section>
      <Gallery name="Jogo teste" defaultCover={resident} />
    </>
  )
}

export default Product
