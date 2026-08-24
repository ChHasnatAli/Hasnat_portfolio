export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".hero-copy-reveal",
    animation: {
      delay: 300,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".hero-visual-reveal",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".about-media-reveal",
    animation: {
      delay: 400,
      origin: "bottom",
    },
  },
  {
    element: ".about-content-reveal",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".skill-card-reveal",
    animation: {
      delay: 250,
      interval: 120,
      origin: "bottom",
    },
  },
  {
    element: ".service-card-reveal",
    animation: {
      delay: 250,
      interval: 120,
      origin: "bottom",
    },
  },
  {
    element: ".featured-card-reveal",
    animation: {
      delay: 250,
      origin: "bottom",
    },
  },
  {
    element: ".project-card-reveal",
    animation: {
      delay: 180,
      interval: 100,
      origin: "bottom",
    },
  },
  {
    element: ".timeline-item-reveal",
    animation: {
      delay: 260,
      origin: "bottom",
    },
  },
  {
    element: ".process-item-reveal",
    animation: {
      delay: 200,
      interval: 120,
      origin: "bottom",
    },
  },
  {
    element: ".why-item-reveal",
    animation: {
      delay: 220,
      interval: 100,
      origin: "bottom",
    },
  },
  {
    element: ".resume-block-reveal",
    animation: {
      delay: 250,
      origin: "bottom",
    },
  },
  {
    element: ".contact-card-reveal",
    animation: {
      delay: 300,
      origin: "bottom",
    },
  },
];
