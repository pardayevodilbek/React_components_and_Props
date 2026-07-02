import PersonCard from '../components/PersonCard'

const STUDENTS = [
  { name: 'Odilbek Pardayev', group: 'DE-21-04', tag: 'III kurs' },
  { name: 'Madina Yusupova', group: 'DE-21-04', tag: 'III kurs' },
  { name: 'Sardor Rashidov', group: 'DE-21-02', tag: 'III kurs' },
  { name: 'Nilufar Karimova', group: 'DE-22-01', tag: 'II kurs' },
  { name: 'Jasur Tojiboyev', group: 'DE-22-03', tag: 'II kurs' },
  { name: 'Zarina Abdullayeva', group: 'DE-23-01', tag: 'I kurs' },
]

const Student = () => {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-6">Student</h1>
      <div>
        {STUDENTS.map((student, i) => (
          <PersonCard key={i} {...student} />
        ))}
      </div>
    </div>
  )
}

export default Student
