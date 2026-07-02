// PersonCard — ism, guruh va lavozimni props orqali qabul qiladi
const PersonCard = ({ name, group, tag }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-line">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-xs text-mute">{group}</p>
      </div>
      <span className="text-xs border border-line px-2 py-1 rounded-full text-mute">{tag}</span>
    </div>
  )
}

export default PersonCard
