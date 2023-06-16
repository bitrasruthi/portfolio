import { useCallback, useEffect, useRef } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

interface Props {
  id?: string;
}
const Stars: React.FC<Props> = ({ id }) => {
  const particlesRef = useRef<any>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  useEffect(() => {
    if (particlesRef.current) {
      particlesRef.current?.init();
    }
  }, []);

  return (
    <Particles
      className="particles"
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        smooth: true,
        background: {
          color: {
            value: "#20232f",
          },
        },
        fpsLimit: 50,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "connect",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 50,
              duration: 0.1,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "transparent",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 0.05,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy",
            },
            random: true,
            speed: 0.2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 200,
          },
          opacity: {
            value: 0.15,
          },
          shape: {
            type: "circle",
            options: {
              shadow: {
                enable: true,
              },
            },
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: false,
      }}
    />
  );
};

export default Stars;
