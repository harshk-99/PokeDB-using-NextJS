import Search from '../components/Search'
import Display from '../components/Display'

export default function Main({pokemon}) {
    return (
        <div>
            <Search pokemon={pokemon}></Search>
        </div>
    )
}