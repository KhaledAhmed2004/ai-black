"use client";

import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

type Props = {
  videoUrl?: string;
  videoId?: string;
};

function extractYouTubeId(input?: string | null): string | null {
  if (!input) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input; // bare ID
  try {
    const url = new URL(input);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return url.pathname.slice(1) || null;
    if (host.endsWith("youtube.com")) {
      const v = url.searchParams.get("v");
      if (v) return v;
      const m = url.pathname.match(/\/embed\/([^/?]+)/);
      if (m) return m[1];
      const s = url.pathname.match(/\/shorts\/([^/?]+)/);
      if (s) return s[1];
    }
  } catch (_) {}
  return null;
}

export default function VideoSection({ videoUrl, videoId: rawId }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const resolvedId = extractYouTubeId(videoUrl || rawId) || "UEJ3SyjEK8w";
  const [thumbSrc, setThumbSrc] = useState<string>(
    `https://img.youtube.com/vi/${resolvedId}/maxresdefault.jpg`
  );
  useEffect(() => {
    setThumbSrc(`https://img.youtube.com/vi/${resolvedId}/maxresdefault.jpg`);
  }, [resolvedId]);

  const pixelPattern =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='10' height='10' fill='%23f97316' opacity='0.35'/%3E%3C/svg%3E\")";

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-zinc-100 to-zinc-200">
          <div
            className="absolute right-6 top-6 w-40 h-40 opacity-60"
            style={{
              backgroundImage: pixelPattern,
              backgroundSize: "10px 10px",
            }}
          />

          {!isPlaying ? (
            <div className="relative h-[220px] md:h-[300px] lg:h-[360px]">
              <Image
                src={thumbSrc}
                alt="Video thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 800px"
                className="object-cover"
                priority
                onError={() =>
                  setThumbSrc(`https://img.youtube.com/vi/${resolvedId}/hqdefault.jpg`)
                }
              />
              <div className="absolute left-6 md:left-8 top-1/3 -translate-y-1/3">
                <h3 className="text-orange-600 text-2xl md:text-3xl font-semibold">
                  Make An App
                  <br />
                  Without Code
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="group absolute inset-0 grid place-items-center"
                aria-label="Play Video"
              >
                <span className="inline-flex items-center justify-center rounded-xl bg-red-600 shadow-lg p-3 md:p-4">
                  <FaYoutube className="text-white text-3xl md:text-4xl" />
                </span>
              </button>
            </div>
          ) : (
            <div className="relative h-[220px] md:h-[300px] lg:h-[360px]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${resolvedId}?autoplay=1&rel=0&modestbranding=1&controls=0&iv_load_policy=3&showinfo=0&fs=0&playsinline=1&loop=1&playlist=${resolvedId}`}
                title="Make An App Without Code"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              {/* Mask the top area to visually hide YouTube 'More videos' overlay */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-14 md:h-16 bg-gradient-to-b from-black/70 to-transparent" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
