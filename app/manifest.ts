import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Canchas Bosquemar",
    short_name: "Bosquemar",
    description: "Reserva tu cancha de futbolito techada en Puerto Montt. Juega llueva o truene.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#063b34",
    theme_color: "#063b34",
    lang: "es-CL",
    icons: [
      { src: "/assets/favicon/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/assets/favicon/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/assets/favicon/icon-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
