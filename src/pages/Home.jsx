import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p className="text-sm text-mute mb-3">Toshkent Davlat Iqtisodiyot Universiteti</p>
      <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
        Digital Economics
        <br />
        Faculty
      </h1>
      <p className="text-mute max-w-md mb-6">
        Fakultet talabalari va o'qituvchilari haqidagi ma'lumotlar shu yerda joylashgan.
      </p>
      <Link
        to="/student"
        className="inline-block border border-ink px-5 py-2.5 text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
      >
        Talabalarni ko'rish
      </Link>
    </div>
  )
}

export default Home
