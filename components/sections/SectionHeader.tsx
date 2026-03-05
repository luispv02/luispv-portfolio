

export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center w-full gap-3 mb-8">
      <h2 className="text-3xl font-bold flex items-center gap-4">{title}</h2>
      <div className="w-full border-b border-gray-600 flex-1"></div>
    </div>
  )
}