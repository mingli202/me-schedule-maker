import { useState } from "react";
import { images } from "../../../assets";
import { ImageType } from "../../../types";

export default function LoginBg() {
  const { loginBg } = images;
  const [current, setCurrent] = useState(0);
  console.log(setCurrent);

  return (
    <section className="w-full h-full flex overflow-hidden relative">
      {[loginBg[0]].map((img, index) => (
        <ImagePanel img={img} key={img.name} index={index} current={current} />
      ))}
    </section>
  );
}

type ImagePanelProps = {
  img: ImageType;
  index: number;
  current: number;
};
function ImagePanel({ img, index, current }: ImagePanelProps) {
  const { url, name, width, height } = img;
  console.log(name, width, height, index, current);

  return (
    <div className="h-full absolute w-full">
      <div className="absolute top-0 left-0 h-full w-20">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 0L0 100 100 100z" className="fill-white" />
        </svg>
      </div>

      <img src={url} className="h-full object-cover" />

      <div className="absolute top-0 right-0 h-full w-20">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path d="M100 100L0 0 100 0z" className="fill-white" />
        </svg>
      </div>
    </div>
  );
}
