import { animated, easings, useSpring } from "@react-spring/three";
import { useMemo, useRef } from "react";
import { DoubleSide, Mesh, MeshStandardMaterial, TextureLoader } from "three";
import { images } from "../../../assets";

MeshStandardMaterial;

export default function Panel() {
  const { view } = images.loginBg;

  const meshRef = useRef<Mesh>(null!);

  const aspectRatio = view.height / view.width;

  const texture = useMemo(
    () => new TextureLoader().load("/me-schedule-maker/images/view.png"),
    []
  );

  const spring = useSpring({
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
    config: {
      duration: 1500,
      easing: easings.easeOutElastic,
    },
  });

  return (
    <animated.mesh ref={meshRef} scale={spring.scale} castShadow>
      <planeGeometry args={[1, aspectRatio * 1]} />
      <meshBasicMaterial side={DoubleSide} map={texture} color="#FFF" />
    </animated.mesh>
  );
}
