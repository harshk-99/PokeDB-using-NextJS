import { useCallback, useRef, useState } from 'react'
import Magnify from '@material-ui/icons/Search'
import Display from './Display'

export default function Search({pokemon}) {

	const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])
	const	[cards, setCards] = useState(pokemon)

	const onChange = useCallback((event) => {
		const query = event.target.value;
		setQuery(query)

		if (query.length) {
			let [pList, cList] = filterNames(query)
			setResults(pList)
			setCards(cList)
		} else {
			setResults([])
			setCards(pokemon)
		}
	}, [])

	const filterNames = (query) => {
		let pokeList = []
		let cardList = []

		let search = query.toLowerCase()
		pokemon.map((item, index) => {
			if (item.name.startsWith(search)) {
				pokeList.push(item.name)
				cardList.push(item)
			}
		})
		return [pokeList, cardList]
	}

	const onFocus = useCallback(() => {
		setActive(true)
		window.addEventListener('click', onClick)
	}, [])

	const onClick = useCallback((event) => {
		if (searchRef.current && !searchRef.current.contains(event.target)) {
			setActive(false)
			window.removeEventListener('click', onClick)
		}
	}, [])

  return (
		<div>
		<div class="shadow flex">
			<input 
				class="w-full rounded p-2" 
				onChange={onChange}
				onFocus={onFocus}
				value={query}
				type="text" 
				placeholder="Search Pokemon"/>
			<button class="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
				<Magnify/>
			</button>
			</div>

			
		{ active && results.length > 0 && (
			<div className="overflow-y-auto h-64 w-full bg-white shadow-lg lg:w-6/7">
				<ul className="divide-y-2 divide-gray-100">
					{results.map((name, id) => (
						<li className="p-3 hover:bg-blue-600 hover:text-blue-200" key={id}>
							<a>{name}</a>
						</li>
					)
					)}
				</ul>
				</div>
			)}
			<Display pokemon={cards}></Display>
		</div>
    )
}