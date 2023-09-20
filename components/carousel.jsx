import Link from "next/link";

const carouselImages = [
  {
    image:
      "images/photo-1.jpg",
  },
  {
    image:
      "images/photo-2.jpg",
  },
  {
    image:
      "images/photo-3.jpg",
  },
  {
    image:
      "images/photo-4.jpg",
  },
  {
    image:
      "images/photo-5.jpg",
  },
  {
    image:
      "images/photo-6.jpg",
  },
];

export default function Carousel() {
  return (
    <div className=" w-full overflow-x-auto overflow-y-hidden pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselImages.map((product, i) => (
          <li
            key={i}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <div className="relative h-full w-full">
              <img
                alt={"fav photos"}
                src={product.image}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
