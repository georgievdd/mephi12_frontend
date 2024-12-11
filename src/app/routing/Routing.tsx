import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { routes } from './routes'

export const Routing = () => (
    <Router>
        <Routes>
        {routes.map((Component) => (
          <Route key={Component.url} path={Component.url} element={<Component />} />
        ))}
      </Routes>
    </Router>
)
