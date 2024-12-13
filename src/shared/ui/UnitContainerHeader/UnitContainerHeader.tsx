import { Link, useLocation } from 'react-router-dom'
import { getPathParts } from './utils'

export const UnitContainerHeader = () => {
    const location = useLocation()
    const parts = getPathParts(location.pathname)
    return (
        <div className="header">
            <h2 className="tag shadow">
                {parts.slice(0, -1).map(({ label, url }) => (
                    <Link to={url}>{label} / </Link>
                ))}
                {parts.at(-1).label}
            </h2>
        </div>
    )
}
