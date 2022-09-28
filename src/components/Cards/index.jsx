import { useStore, filteredPets } from '../../store'
import { Card } from './Card'

export const Cards = () => {
    const pets = useStore(filteredPets)

    return (
        <div>
            {pets.map(pet => <Card key={pet.id} {...pet} />)}
        </div>
    )
}
