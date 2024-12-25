export default function OffersSection() {
  return (
    <div className="py-10 bg-base-100">
      <h2 className="text-3xl font-bold text-center text-gray-500 mb-10">
        See what Quick-Language offers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="text-center">
          <div className="relative w-40 h-40 mx-auto mb-4">
            <img
              src="https://i.ibb.co.com/pvH8wnh/offers-01.webp"
              alt="1-on-1 lessons"
              className=" object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-500">1-on-1 lessons</h3>
          <p className="text-sm text-gray-600 mt-2">
            Find teachers from all over the world sharing their languages,
            dialects, and cultures.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <div className="relative w-40 h-40 mx-auto mb-4">
            <img
              src="https://i.ibb.co.com/TKH8XDj/62959b725bc81356c89bff06-2.png"
              alt="Group Class"
              className=" object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-500">Group Class</h3>
          <p className="text-sm text-gray-600 mt-2">
            Fun and engaging online group classes designed and led by expert
            teachers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="relative w-40 h-40 mx-auto mb-4">
            <img
              src="https://i.ibb.co.com/QdWWdX5/img-1.png"
              alt="Practice for free"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-500">Practice for free</h3>
          <p className="text-sm text-gray-600 mt-2 max-w-96 mx-auto">
            Meet and share experiences with millions of language learners from
            more than 190 countries.
          </p>
        </div>
      </div>
    </div>
  );
}
