"use client"; // Required for Next.js App Router

type Testimonial = {
  id: number;
  name: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amit Patel",
    quote: "Finally found a strategy that works. +32% returns in 3 months.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a7c1562e36ed8cbde15fdbeede163c08e3e6cc41f3218fe43eb1faec6251bc6f?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924",
  },
  {
    id: 2,
    name: "Sofia Martinez",
    quote: "Simple, effective, and profitable. Exactly what I needed.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0aed4c4a95ed803d50387473fc1920983a70f050187c5f3984daaece43e57478?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924",
  },
  {
    id: 3,
    name: "Liam Johnson",
    quote:
      "Six months of steady profits! The signals are spot on. Incredibly accurate.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/394cb051665b28e750d47ed1a05f5491ea1f2bcc5970b28ebe936fa4cd4be7ce?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924",
  },
];

export default function Feedback() {
  return (
    <section
      className="mt-20 flex w-full flex-col max-md:mt-10 max-md:max-w-full"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex w-[653px] max-w-full flex-col self-center text-center">
        <h2
          id="testimonials-heading"
          className="text-7xl font-light leading-none text-neutral-800 max-md:max-w-full max-md:text-4xl"
        >
          Our Happy Clients
        </h2>
        <p className="mt-6 text-2xl leading-none text-zinc-600 max-md:max-w-full">
          What they say about us
        </p>
      </div>

      <div className="mt-20 flex w-full flex-wrap items-start justify-between gap-8 leading-10 max-md:mt-10 max-md:max-w-full">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.id}
            className="my-auto flex min-w-[240px] items-start gap-8 self-stretch"
          >
            <img
              loading="lazy"
              src={testimonial.image}
              alt={`Photo of ${testimonial.name}`}
              className="aspect-square w-20 shrink-0 rounded-full object-contain shadow-[0px_4px_12px_rgba(0,0,0,0.25)]"
            />
            <figcaption className="flex w-[293px] min-w-[240px] flex-col">
              <blockquote className="mb-2 text-xl text-neutral-800">
                {testimonial.quote}
              </blockquote>
              <div className="mt-1 flex items-center gap-2 self-start text-lg font-light text-zinc-600">
                <div className="my-auto h-px w-3 shrink-0 self-stretch border border-solid border-zinc-600"></div>
                <cite className="my-auto self-stretch not-italic">
                  {testimonial.name}
                </cite>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
