import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const URL = 'https://pokeapi.co/api/v2/pokemon'
const LIMIT = 25

export default function FetchPokemon(name) {
    const uri = name ? `${URL}/${name}` : `${URL}?limit=${LIMIT}`
    const { data: result, error } = useSWR(uri, fetcher)

    return { result, error }
}