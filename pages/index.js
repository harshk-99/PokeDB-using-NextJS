import Layout from '../components/Layout'
import Main from '../components/Main'

export default function Home({ pokemon }) {

  return (
    <Layout title="Pokemon Database">
      <h1 className="text-4xl mb-8 text-center">Poke-search</h1>
      <Main pokemon={pokemon}></Main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1500');
  const { results } = await res.json();
  const pokemon = results.map((poke, index) => {
    const Id = ('00' + (index + 1)).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${Id}.png`;
    return { ...poke, image };
  });
  return {
    props: { pokemon },
  };
}
