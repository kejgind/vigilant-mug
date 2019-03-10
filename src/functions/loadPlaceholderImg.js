import placeholderImg from "@/assets/img/beer-placeholder.jpg";

export const loadPlaceholderImg = event => {
  event.target.src = placeholderImg;
  const text = event.target.alt + " - placeholder image";
  event.target.alt = text;
};
