'use client'

// Component Imports
import { Autocomplete } from '../../../@layouts/components/search/Autocomplete'
import { AutocompleteItem } from '../../../@layouts/components/search/AutocompleteItem'

// NavSearch Component
const NavSearch = () => {
  const data = [
    {
      name: 'Apple - MacBook Air® (Latest Model) - 13.3" Display - Intel Core i5 - 4GB Memory - 128GB Flash Storage - Silver',
      description:
        "MacBook Air features fifth-generation Intel Core processors with stunning graphics, all-day battery life*, ultrafast flash storage, and great built-in apps. It's thin, light and durable enough to take everywhere you go &#8212; and powerful enough to do everything once you get there.",
      image: 'https://cdn-demo.algolia.com/bestbuy/1581921_sb.jpg',
      url: 'http://www.bestbuy.com/site/apple-macbook-air-latest-model-13-3-display-intel-core-i5-4gb-memory-128gb-flash-storage-silver/1581921.p?id=1219056464137&skuId=1581921&cmp=RMX&ky=1uWSHMdQqBeVJB9cXgEke60s5EjfS6M1W',
      objectID: '1581921'
    },
    {
      name: 'Moto Edge 40',
      description:
        'Moto edge 40 is the latest android smartphone from Motorola. It has a 6.7-inch display with a 120Hz refresh rate, a 108MP camera, and a 5000mAh battery.',
      image: 'https://cdn-demo.algolia.com/bestbuy/1581921_sb.jpg',
      url: 'http://www.bestbuy.com/site/apple-macbook-air-latest-model-13-3-display-intel-core-i5-4gb-memory-128gb-flash-storage-silver/1581921.p?id=1219056464137&skuId=1581921&cmp=RMX&ky=1uWSHMdQqBeVJB9cXgEke60s5EjfS6M1W',
      objectID: '16894564'
    },
    {
      name: 'iPhone 14 Pro Max',
      description:
        'iPhone 14 Pro Max is the latest iPhone from Apple. It has a 6.7-inch display with a 120Hz refresh rate, a 108MP camera, and a 5000mAh battery.',
      image: 'https://cdn-demo.algolia.com/bestbuy/1581921_sb.jpg',
      url: 'http://www.bestbuy.com/site/apple-macbook-air-latest-model-13-3-display-intel-core-i5-4gb-memory-128gb-flash-storage-silver/1581921.p?id=1219056464137&skuId=1581921&cmp=RMX&ky=1uWSHMdQqBeVJB9cXgEke60s5EjfS6M1W',
      objectID: '16949894'
    }
  ]

  return (
    <Autocomplete
      openOnFocus={true}
      getSources={({ query }) => [
        {
          sourceId: 'products',
          getItems({ query }) {
            return data.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
          },
          getItemUrl({ item }) {
            return item.url
          },
          templates: {
            item({ item, components, html, state }) {
              return state.query ? (
                <AutocompleteItem item={item} components={components} html={html} />
              ) : (
                'Initial Screen when nothing is searched'
              )
            },
            noResults() {
              return (
                <div className='aa-no-results'>
                  <p>No products matching your query.</p>
                </div>
              )
            }
          }
        }
      ]}
    />
  )
}

export default NavSearch
