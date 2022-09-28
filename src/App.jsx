import { useEffect } from 'react'
import { Filters, Cards } from './components'
import { apiGetDogs } from './api/pets'
import { useStore } from './store'

function App() {
  const { pets, setPets } = useStore()
  useEffect(() => {
    apiGetDogs().then(setPets)
  }, [])
  return (
    <div>
      <Filters />
      <Cards />
    </div>
  )
}

export default App
