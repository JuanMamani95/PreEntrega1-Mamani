import './styles.css'

export const ItemLinkContainer = (props) => {
    const {router} = props

    return (
        <div className='itemContainer'>
            {router.map((ruta) => (
                <a href="#" key={ruta}>{ruta}</a>
            ))}
        </div>
    )
}