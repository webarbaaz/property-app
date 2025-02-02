import Image from "next/image";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "First-time Homebuyer",
    image: "/placeholder.svg?height=100&width=100",
    review:
      "The team went above and beyond to help me find my dream home. Their expertise and patience made the entire process smooth and enjoyable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    image: "/placeholder.svg?height=100&width=100",
    review:
      "I've worked with many real estate agencies, but this team stands out. Their market insights and personalized service are unmatched.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Luxury Home Seller",
    image: "/placeholder.svg?height=100&width=100",
    review:
      "The marketing strategy they developed for my property was impressive. It sold faster and at a better price than I expected.",
    rating: 5,
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">&quot;{review.review}&quot;</p>
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
