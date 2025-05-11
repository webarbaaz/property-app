"use client";

import { getReviews } from "@/lib/sanity/controller/controller.property";
import { useCallback, useEffect, useState } from "react";
import Container from "../../ui/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";

type Review = {
  _id: string;
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
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            clients have to say about their experience with True Value Homes.
          </p>
        </div>

        <Tabs
          defaultValue={reviews.map((review) => review)[0]._id}
          className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            {reviews.map((review) => (
              <TabsTrigger key={review._id} value={review._id}>
                {review.author}
              </TabsTrigger>
            ))}
          </TabsList>
          {reviews.map((testimonial) => (
            <TabsContent
              key={testimonial._id}
              value={testimonial._id}
              className="mt-6">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-6">
                  &quot;{testimonial.reviewText}&quot;
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {/* {testimonial.role} */}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}
