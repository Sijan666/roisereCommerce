

const Badge = ({ badgeText }) => {
  return (
    <div className="bg-[#ef5350] text-white text-[10px] px-3 py-1 uppercase font-bold mb-4 w-fit rounded-sm shadow-sm"
     style={{
          clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)",
        }}>
      {badgeText}
    </div>
  )
}

export default Badge

