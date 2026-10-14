import { profile, interfaceCopy } from "@/data/portfolio";
import { MinecraftButton } from "./MinecraftButton";

export function ResumeButton() {
  return <span className="resume-control"><MinecraftButton label={profile.resume ? "Open Ky Hoang’s current resume" : interfaceCopy.resumeUnavailable} external={profile.resume || undefined} disabled={!profile.resume}>Resume</MinecraftButton>{!profile.resume && <span className="mc-tooltip" role="tooltip">{interfaceCopy.resumeUnavailable}</span>}</span>;
}