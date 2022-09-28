import { useStore } from "../../store"

export const Filters = () => {
    const { filters, changeFilter } = useStore()
    return (
        <div>
            <div>Filters</div>
            {
                Object.entries(filters.age).map(([keyFilter, valueFilter], index) => (
                    <label key={index}>
                        <span>{keyFilter}</span>
                        <input type="checkbox" value={valueFilter} onChange={() => changeFilter("age", keyFilter)} />
                    </label>
                ))
            }
        </div>
    )
}
