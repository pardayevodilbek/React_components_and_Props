import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Student from './pages/Student'
import Teachers from './pages/Teachers'
import { Link, NavLink, Route, Routes } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Student', to: '/student' },
  { label: 'Teachers', to: '/teachers' },
]

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <header className="border-b border-ink">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="font-display text-lg font-bold">
            TDIU
          </Link>
          <nav className="flex gap-6 text-sm">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  isActive ? 'font-semibold' : 'text-mute hover:text-ink transition-colors'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </main>

      <footer className="border-t border-line py-6">
        <p className="max-w-3xl mx-auto px-6 text-xs text-mute">
          Digital Economics Faculty — TDIU
        </p>
      </footer>
    </div>
  )
}

export default App
