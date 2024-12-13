import { RFC } from '@shared/types/component'
import { UnitHeader } from '@shared/ui/UnitHeader'
import { root } from '../config'

export const Test: RFC = () => {
  return (
    <div className='unit-container'>
        <UnitHeader />
    </div>
  )
}

Test.url = root + '/test'
