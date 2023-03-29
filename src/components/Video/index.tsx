import React from "react";

type Props = {
  video: string;
};

export default function Video(props: Props) {
  const { video } = props;
  return (
    <section className="mt-5  p-2 md:p-5 bg-white rounded-md border border-solid border-[#E5E7EB]">
      <h2 className="mb-5  text-[#374151] font-semibold">Video</h2>
      <video controls className="w-full max-w-[740] mx-auto aspect-[1.8/1] ">
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
}
