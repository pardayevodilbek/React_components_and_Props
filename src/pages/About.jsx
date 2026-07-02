const FACTS = [
  { label: 'Universitet', value: "Toshkent Davlat Iqtisodiyot Universiteti" },
  { label: 'Fakultet', value: 'Raqamli iqtisodiyot' },
  { label: "Ta'lim shakli", value: "Kunduzgi bo'lim" },
  { label: 'Asos solingan', value: '1931' },
]

const About = () => {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-4">About</h1>
      <p className="text-mute max-w-md mb-8">
        Raqamli iqtisodiyot fakulteti talabalarni zamonaviy texnologiyalar va
        iqtisodiy tahlil sohasida tayyorlaydi.
      </p>
      <div className="border-t border-line">
        {FACTS.map((fact, i) => (
          <div key={i} className="flex justify-between py-3 border-b border-line text-sm">
            <span className="text-mute">{fact.label}</span>
            <span className="font-medium">{fact.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
