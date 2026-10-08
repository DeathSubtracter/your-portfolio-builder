import { useEffect, useId, useRef, useState } from "react";
import { music } from "@/data/portfolio";
import { PixelItem } from "./PixelItem";

// Mounted beside the router outlet so navigation never restarts the soundtrack.
export function MusicControl() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const volumeId = useId();
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [volume, setVolume] = useState(music.defaultVolume);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const silent = muted || volume === 0;

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent | KeyboardEvent) {
      const escape = "key" in event && event.key === "Escape";
      const outside = !controlRef.current?.contains(event.target as Node);
      if (!escape && !(event.type === "pointerdown" && outside)) return;
      setOpen(false);
      setPinned(false);
      if (escape && controlRef.current?.contains(document.activeElement)) {
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", dismiss);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", dismiss);
    };
  }, [open]);

  async function playMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    setError(false);
    setLoading(true);
    audio.volume = volume;
    audio.muted = muted;
    if (audio.error) audio.load();
    try {
      // Call directly from a click: Safari/Chrome block audible autoplay.
      await audio.play();
    } catch (reason) {
      setLoading(false);
      if (!(reason instanceof DOMException && reason.name === "AbortError")) {
        setError(true);
      }
    }
  }

  function changeVolume(value: number) {
    setVolume(value);
    if (audioRef.current) audioRef.current.volume = value;
    if (value > 0) {
      setMuted(false);
      if (audioRef.current) audioRef.current.muted = false;
    }
  }

  function toggleMute() {
    const next = !silent;
    if (!next && volume === 0) changeVolume(music.defaultVolume);
    setMuted(next);
    if (audioRef.current) audioRef.current.muted = next;
  }

  return (
    <div
      className="music-control"
      ref={controlRef}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={() => {
        if (!pinned && !controlRef.current?.contains(document.activeElement)) setOpen(false);
      }}
      onFocus={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
          setPinned(false);
        }
      }}
    >
      <audio
        ref={audioRef}
        src={music.src}
        preload="none"
        loop
        onPlaying={() => {
          setPlaying(true);
          setLoading(false);
          setError(false);
        }}
        onPause={() => {
          setPlaying(false);
          setLoading(false);
        }}
        onError={() => {
          setPlaying(false);
          setLoading(false);
          setError(true);
        }}
      />
      <button
        className="music-speaker music-stone-button"
        ref={buttonRef}
        type="button"
        aria-label="Music volume"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          setPinned(!pinned);
          setOpen(!pinned);
          if (!pinned && !playing && !loading) void playMusic();
        }}
      >
        <PixelItem kind={playing && !silent ? "speaker" : "speaker-muted"} />
      </button>
      <div className="music-popover" id={panelId} hidden={!open}>
        <div className="music-panel" role="group" aria-label="Music controls">
          <a className="music-credit" href={music.creditUrl} target="_blank" rel="noreferrer">
            {music.title} — {music.artist}
          </a>
          <div className="music-volume-label">
            <label htmlFor={volumeId}>Volume</label>
            <span>{silent ? 0 : Math.round(volume * 100)}%</span>
          </div>
          <input
            id={volumeId}
            className="music-volume-slider"
            type="range"
            min="0"
            max="100"
            step="1"
            value={Math.round(volume * 100)}
            aria-valuetext={`${Math.round(volume * 100)} percent${muted ? ", muted" : ""}`}
            onChange={(event) => changeVolume(Number(event.currentTarget.value) / 100)}
          />
          <div className="music-actions">
            <button
              className="music-stone-button"
              type="button"
              onClick={() => {
                if (playing || loading) audioRef.current?.pause();
                else void playMusic();
              }}
            >
              {loading ? "Cancel" : playing ? "Pause" : error ? "Retry" : "Play"}
            </button>
            <button
              className="music-stone-button"
              type="button"
              aria-label={silent ? "Unmute music" : "Mute music"}
              aria-pressed={silent}
              onClick={toggleMute}
            >
              {silent ? "Unmute" : "Mute"}
            </button>
          </div>
          <p className="music-status" role="status">
            {error
              ? "Music couldn’t load. Try again."
              : loading
                ? "Starting music…"
                : playing
                  ? silent
                    ? "Muted"
                    : "Playing"
                  : "Click Play to start"}
          </p>
        </div>
      </div>
    </div>
  );
}
