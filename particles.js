tsParticles.load("tsparticles", {
  background: {
    color: "transparent"
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 50
    },
    color: {
      value: ["#820eee", "#ca0065", "#08c9eb"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.3
    },
    size: {
      value: { min: 2, max: 5 }
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce"
      }
    },
    links: {
      enable: true,
      distance: 120,
      color: "#a855f7",
      opacity: 0.2,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      repulse: {
        distance: 100
      }
    }
  },
  detectRetina: true
});