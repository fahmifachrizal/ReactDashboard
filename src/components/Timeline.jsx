function Timeline({timestamp, subject, object, activity}) {
  return (
    <div className="relative border-l border-l-[#5c6ca5] h-28 min-w-[14rem] py-2">
      <div className="absolute w-4 h-4 border-2 rounded-full border-[#FF9F43] bg-[#1c243f] -translate-x-2 translate-y-1"></div>
      <div className="flex flex-col px-8 gap-y-2">
        <p className="text-white">
          <span className="font-medium">{subject} </span>
          <span>{activity} </span>
          <span className="font-medium">{object} </span>
        </p>
        <p className="text-gray-500 text-sm font-medium">{timestamp}</p>
      </div>
    </div>
  )
}

export default Timeline