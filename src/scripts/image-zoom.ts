import mediumZoom from "medium-zoom";

mediumZoom("article img", {
  background: "rgba(0, 0, 0, 0.9)",
  margin: 24,
});

const style = document.createElement("style");
style.textContent = `
  .medium-zoom-overlay {
    z-index: 1000 !important;
  }
  .medium-zoom-image--opened {
    z-index: 1001 !important;
  }
`;
document.head.appendChild(style);
