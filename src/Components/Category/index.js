import { Link } from "wouter"



const Category = ({name, options= []}) => {
    return (
        <div className='Category'>
            <h3 className='categoryTitle'>{name}</h3>
            <ul className='categoruList'>
                {options.map(option => (
                    <li key={option}>
                        <Link className='categoryLink' to={`/search/${option}`}>
                            {option}
                        </Link>
                    </li>
                ))}
            </ul>
    </div>
)
    
}

export default Category