import Image from "next/image";

export default function Banner() {
  return (
    <section className="banner-carrousel">
      <Image
        src="/cafe-carrousel.jpg"
        alt="Café"
        layout="fill"
        objectFit="cover"
      />
    </section>
  );
}
