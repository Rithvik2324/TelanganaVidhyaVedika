import Image from "next/image";

export default function GalleryGrid({ items }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <figure
          key={`${item.title}-${index}`}
          className="group overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-white shadow-soft"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <figcaption className="p-5">
            <p className="text-lg font-semibold text-brand-navy">{item.title}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
