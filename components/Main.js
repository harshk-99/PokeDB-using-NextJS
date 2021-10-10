import Search from '../components/Search'

export default function Main({pokemon}) {
    return (
        <div>
            <Search pokemon={pokemon}></Search>
        </div>
    )
}