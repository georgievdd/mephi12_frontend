import './styles.scss'
import { Unit } from '../types'
import { AnimatedText } from '@shared/ui/AnimatedText'
import { Link } from 'react-router-dom'

export const UnitCard = ({preview, title, description, rating, url, author, name}: Unit) => {
  return (
    <Link to={url} key={name}>
      <section className='card-container hover-shadow'>
        <div className='head'>
          <h1>{title}</h1>
          <img className='preview' src={preview} alt={name} />
        </div>
        <div className='tags'>
          <p className='tag'>{author}</p>
          <p className='tag-success'>{rating}</p>
        </div>
        <p className='description'>{description}</p>
      </section>
    </Link>
  )
}
