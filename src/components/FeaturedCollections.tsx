const collections = [
  {
    category: "Academic Resources",
    count: "15,000+ items",
    color: "bg-blue-500",
  },
  {
    category: "Children Literature",
    count: "8,000+ books",
    color: "bg-green-500",
  },
  {
    category: "Local History",
    count: "2,500+ archives",
    color: "bg-amber-500",
  },
  {
    category: "Fiction & Literature",
    count: "12,000+ novels",
    color: "bg-purple-500",
  },
  {
    category: "Reference Materials",
    count: "5,000+ resources",
    color: "bg-red-500",
  },
  {
    category: "Digital Collection",
    count: "10,000+ e-books",
    color: "bg-indigo-500",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-gray-600">
            Explore our diverse range of books and resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className={`${collection.color} h-40 rounded-t-xl relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">
                    {collection.category}
                  </h3>
                  <p className="text-white/90">{collection.count}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-b-xl border border-gray-200">
                <button className="text-primary font-semibold hover:text-blue-700 transition duration-200">
                  Explore Collection →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
