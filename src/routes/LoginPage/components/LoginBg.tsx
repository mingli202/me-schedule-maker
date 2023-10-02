import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, Mesh, TextureLoader, Vector3 } from "three";
import { animated, easings, useSpring } from "@react-spring/three";
// import { Panel } from ".";
// import { Image } from "@react-three/drei";

export default function LoginBg() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }} shadows>
      <ambientLight intensity={1} color="#FFF" />
      <directionalLight
        intensity={5}
        position={[1, 5, 3]}
        castShadow
      // color="#000000"
      />
      <RotatingThingInTheMiddle />
      {/* <Panel /> */}

      <Bg />
      <Floor />

      <gridHelper />

      <OrbitControls />
    </Canvas>
  );
}

function RotatingThingInTheMiddle() {
  const meshRef = useRef<Mesh>(null!);
  const over = useRef(false);

  const { width, height } = useThree((state) => state.size);

  const [spring, api] = useSpring(
    () => ({
      from: {
        scale: 0,

        position: [0, 0],
      },

      to: {
        scale: 1,
      },

      config: (key) => {
        switch (key) {
          case "scale":
            return {
              duration: 1500,
              easing: easings.easeOutSine,
            };

          default:
            return {};
        }
      },
    }),
    []
  );

  const loopSpring = useSpring({
    loop: true,
    from: { rotationY: 0 },
    to: { rotationY: 2 * Math.PI },
    config: {
      duration: 2000,
    },
  });

  return (
    <>
      <animated.mesh
        onPointerMove={(e) => {
          if (!over.current) return;
          const x = (e.nativeEvent.offsetX / width) * 2 - 1;
          const y = (e.nativeEvent.offsetY / height) * -2 + 1;

          api.start({
            position: [x, y],
          });
        }}
        onPointerOver={() => {
          over.current = true;
        }}
        onPointerOut={() => {
          (over.current = false),
            api.start({
              position: [0, 0],
            });
        }}
        ref={meshRef}
        scale={spring.scale}
        rotation-y={loopSpring.rotationY}
        castShadow
        position={spring.position.to((x, y) => [x, y, 0])}
      >
        <icosahedronGeometry args={[1]} />
        <meshPhysicalMaterial
          // color="#0096c7"
          roughness={0.1}
          transmission={1}
          thickness={0.5}
        />
      </animated.mesh>
    </>
  );
}

function Bg() {
  return (
    <mesh receiveShadow castShadow position={[0, 0, -1]}>
      <planeGeometry args={[5, 5]} />
      <meshStandardMaterial
        side={DoubleSide}
        map={new TextureLoader().load(
          "/me-schedule-maker/images/Anime sky art.jpeg"
        )}
      />
    </mesh>
  );
}

function Floor() {
  return (
    <mesh
      rotation-x={Math.PI / 2}
      position={new Vector3(0, -2, 0)}
      receiveShadow
    >
      <planeGeometry args={[50, 15]} />
      <meshStandardMaterial color="#FFF" side={DoubleSide} />
    </mesh>
  );
}
