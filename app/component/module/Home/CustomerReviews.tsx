"use client";

import { getReviews } from "@/lib/sanity/controller/controller.property";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

type Review = {
  author: string;
  rating: number;
  reviewText: string;
};

export default function CustomerReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = useCallback(async () => {
    const res = await getReviews();
    if (res) {
      setReviews(res);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  if (reviews.length < 1) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <Image
                    src={"/assets/person.jpg"}
                    alt={review.author}
                    width={70}
                    height={70}
                    className="rounded-full border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2">
                    <FaQuoteLeft className="text-white text-sm" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-xl text-gray-800">
                    {review.author}
                  </h3>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } fill-current`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">{review.reviewText}</p>
              <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
