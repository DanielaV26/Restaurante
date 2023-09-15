import { Carousel } from "flowbite-react";

export function Carrusel() {
  return (
    <div className="w-full h-[500px] mt-5">
      <Carousel>
      <img
        alt="..."
        src="assets/images/Absolute_Reality1.jpg"
      />
      <img
        alt="..."
        src="assets/images/Absolute_Reality3.jpg"
      />
      <img
        alt="..."
        src="assets/images/Absolute_Reality2.jpg"
      />
      <img
        alt="..."
        src="assets/images/Absolute_Reality4.jpg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
    </div>
  );
}
