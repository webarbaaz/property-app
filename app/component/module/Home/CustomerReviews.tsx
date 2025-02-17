import { getReviews } from "@/lib/sanity/controller/controller.property";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

type Review = {
  author: string;
  rating: number;
  reviewText: string
}
export default function CustomerReviews() {
    const [reviews, setReviews] = useState<Review[]>([])
  
  const fetchReviews = useCallback (async () => {
    const res =await getReviews()
    if (res) {
      setReviews(res)
    }
  },[])

  useEffect(()=>{
    fetchReviews()
  },[fetchReviews])

  if (reviews.length < 1) return

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={ "/assets/person.jpg"}
                  alt={'demo'}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{review.author}</h3>
                  {/* <p className="text-gray-600 text-sm">{review.role}</p> */}
                </div>
              </div>
              <p className="text-gray-700 mb-4">&quot;{review.reviewText}&quot;</p>
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
