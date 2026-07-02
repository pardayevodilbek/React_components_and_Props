import PersonCard from '../components/PersonCard'

const TEACHERS = [
  { name: 'Aziz Normatov', group: 'React & JS', tag: 'Dotsent' },
  { name: 'Dilnoza Sharipova', group: 'Iqtisodiy tahlil', tag: "Katta o'q." },
  { name: 'Bekzod Yoldashev', group: "Ma'lumotlar bazasi", tag: 'Dotsent' },
  { name: 'Kamola Rustamova', group: 'UI/UX dizayn', tag: "O'qituvchi" },
]

const Teachers = () => {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-6">Teachers</h1>
      <div>
        {TEACHERS.map((teacher, i) => (
          <PersonCard key={i} {...teacher} />
        ))}
      </div>
    </div>
  )
}

export default Teachers
