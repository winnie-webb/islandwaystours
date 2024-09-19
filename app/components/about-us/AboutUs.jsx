import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <section className="p-4 md:p-10 xl:w-[85%] 2xl:w-[65%] mx-auto">
      <div className="flex  flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="md:flex-[55%]">
          <h2 className="font-bold text-3xl md:text-4xl  mb-4">
            Get to know us
          </h2>
          <p className=" font-medium  text-lg md:leading-8	">
            Discover {"Jamaica's"} hidden treasures with Island Ways Tours, your
            premier private bus tour agency. Explore the {"island's"} stunning
            landscapes, rich culture, and iconic attractions on our expertly
            guided tours. Whether
            {" you're"} looking for airport transfers, relaxation on{" "}
            {"Jamaica's"} pristine beaches, or immersion in its vibrant
            heritage, we offer tailored experiences to suit every traveler. Book
            your unforgettable Jamaican adventure today and experience the best
            of the island with comfort and convenience.
          </p>
        </div>
        <div className="relative w-90 h-72 md:flex-[45%] md:mt-14 md:h-80 ">
          <Image
            alt="Image of Founder with clients Island Ways Tours"
            src="/local/hero-1.jpg"
            fill={true}
            className="object-cover"
          ></Image>
        </div>
      </div>
      <div className="flex mt-10 md:mt-20 flex-col md:flex-row  justify-between gap-4">
        <div className="md:flex-[55%] p-4">
          <h3 className="font-bold text-3xl mb-4">Our mission</h3>
          <p className=" font-medium  text-base md:leading-7 ">
            To empower individuals to explore the best tours Jamaica has to
            offer, fostering meaningful connections and unforgettable
            experiences. We are committed to delivering the best personalized
            travel solutions at the most affordable prices, exceeding
            expectations, and promoting sustainable and responsible tourism
            practices.
          </p>
        </div>
        <div className="md:flex-[45%] p-4">
          <h3 className="font-bold text-3xl mb-4">Our vision</h3>
          <p className=" font-medium  text-base md:leading-7">
            Striving to be the best Jamaica tour and travel partner, we envision
            a world where every journey is a transformative adventure. Our
            vision is to inspire a deep appreciation for diverse cultures,
            create lasting memories, and contribute to a sustainable and
            interconnected planet through the joy of travel
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
