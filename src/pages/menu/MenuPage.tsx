import { units } from '@shared/config/units'
import './styles.scss'
import { RFC } from '@shared/types/component'
import { AnimatedText } from '@shared/ui/AnimatedText'
import { UnitCard } from '@entity/unit'

export const MenuPage: RFC = () => {
  return (
    <div className='menu-container'>
      <header>
        <AnimatedText.Scope>
          <AnimatedText.h1 text='3 семестр. Криптографические методы защиты информации.' />
          <AnimatedText.p className='spoiler' text='Кибервойна уже идет!' />
        </AnimatedText.Scope>
      </header>
      <div className='units'>
        <h2 className='units-text'>Разделы</h2>
        <div className='items'>
          {units.map(UnitCard)}
        </div>
      </div>
    </div>
  )
}

MenuPage.url = '/menu'
