import Link from 'next/link'
import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'


export default function Display({pokemon}) {

    let i = 0

    const [data, setData] = useState(pokemon.slice(i, i+25));
    const [hasMore, setHasMore] = useState(true);
    const [state, setState] = useState("Loading...");

    const getMoreData = () => {
        i += 25
        const newData = pokemon.slice(i, i+25)
        setData((data) => [...data, ...newData])
    }

    useEffect (() => {
        if (pokemon.length) {
            setData(pokemon.slice(i, i+25))
        } else {
            setData([])
            setState("No results.")
        }
    }, [pokemon])

    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

    return (
        <InfiniteScroll
                dataLength={data.length}
                next={getMoreData}
                hasMore={hasMore}
                loader={<h3> {state}</h3>}
                endMessage={<h4>Nothing more to show</h4>} >
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4">
          { data.map((item, index) => (
            <div key={index}>
              <Link href={`/pokemon/${index + 1}`}>
                <a className="border p-14 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 mr-3"
                  />
                </a>
              </Link>
              <h1 className="mr-5 font-bold text-center">
                    {index + 1}. {capitalizeFirstLetter(item.name)}
                  </h1>
            </div>
          ))}
      </div>
      </InfiniteScroll>
    )
}