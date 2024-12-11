import { RFC } from "@shared/types/component"
import { root } from "../config"

export const Common: RFC = () => {
  return (
    <div className='container'>справа краткое описание, слева 3 ссылки</div>
  )
}

Common.url = root + '/common'
