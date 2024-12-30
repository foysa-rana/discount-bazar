export default function ProductTabs({ activeTab, onTabChange }) {
  const tabs = ['NEW ARRIVAL', 'Featured', 'Best Selling', 'Top Rated']

  return (
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`relative pb-2 text-lg font-medium transition-colors
            ${activeTab === tab ? 'text-[#FBB528]' : 'text-gray-900 hover:text-gray-500'}`}
        >
          {tab}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FBB528]" />
          )}
        </button>
      ))}
    </div>
  )
}

