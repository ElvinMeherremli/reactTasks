function Products() {
    let data = [
        {
            id: 1,
            name: 'title 1',
        },
        {
            id: 2,
            name: 'title 2',
        },
        {
            id: 3,
            name: 'title 3',
        },
    ]
  return (
    <div>
        <ul>
            {data.map(elem => {
                return <li key={elem.id}>{elem.name}</li>
            })}
        </ul>
    </div>
  )
}
export default Products