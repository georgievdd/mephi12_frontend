import { RFC } from "@shared/types/component"
import { root } from "../config"
import { unitByName } from "@shared/config/units"
import { Link } from "react-router-dom"
import { UnitContainerHeader } from "@shared/ui/UnitContainerHeader/UnitContainerHeader"

export const Common: RFC = () => {
  const { description } = unitByName(root.slice(1))
  return (
    <div className='unit-container'>
      <UnitContainerHeader />
      <div className="content">
        <div className="services tag shadow">
          <Link to={`${root}/editorial`}>Материалы</Link>
          <Link to={`${root}/demo`}>Демо</Link>
          <Link to={`${root}/test`}>Тестирование</Link>
        </div>
        <div className="description tag shadow">
          <h3>Аннотация</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

Common.url = root + '/common'
