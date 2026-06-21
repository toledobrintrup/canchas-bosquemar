"use client";

import { useEffect, useState } from "react";

type BIPEvent = Event & { prompt: () => void; userChoice: Promise<unknown> };

export default function PWA() {
  const [deferred, setDeferred] = useState<BIPEvent | null>(null);
  const [isIos, setIsIos] = useState(false);
  const [show, setShow] = useState(false);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
    const onBIP = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BIPEvent);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", onBIP);

    const ua = window.navigator.userAgent.toLowerCase();
    const ios = /iphone|ipad|ipod/.test(ua);
    const standalone =
      (window.navigator as unknown as { standalone?: boolean }).standalone ||
      window.matchMedia("(display-mode: standalone)").matches;
    if (ios && !standalone) {
      setIsIos(true);
      setShow(true);
    }
    if (sessionStorage.getItem("pwa-dismiss")) setShow(false);

    return () => window.removeEventListener("beforeinstallprompt", onBIP);
  }, []);

  if (!show) return null;

  const handleClick = async () => {
    if (deferred) {
      deferred.prompt();
      await deferred.userChoice;
      setDeferred(null);
      setShow(false);
    } else if (isIos) {
      setHint((v) => !v);
    }
  };

  const close = () => {
    setShow(false);
    sessionStorage.setItem("pwa-dismiss", "1");
  };

  return (
    <div className="pwa-wrap">
      {hint && (
        <div className="pwa-hint">
          Para instalar: toca <b>Compartir</b> <span aria-hidden>⎙</span> abajo y luego{" "}
          <b>&ldquo;Agregar a pantalla de inicio&rdquo;</b>.
        </div>
      )}
      <button className="pwa-install" onClick={handleClick}>
        <span aria-hidden>📲</span> Instalar app
        <span className="pwa-x" onClick={(e) => { e.stopPropagation(); close(); }} aria-label="Cerrar">✕</span>
      </button>
    </div>
  );
}
