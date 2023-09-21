import { Carousel } from "flowbite-react";

export function Carrusel() {
  return (
    <div className="w-full h-60 md:h-[500px] mt-5">
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
        src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1694791891/Absolute_Reality_v16_Generate_an_image_of_a_group_of_friends_e_1_lztb6q.jpg"
      />
    </Carousel>
    </div>
  );
}
