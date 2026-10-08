import { profile } from "@/data/portfolio";
import { MinecraftButton } from "./MinecraftButton";

export function ResumeButton() {
  return (
    <span className="resume-control">
      <MinecraftButton external={profile.resume || undefined} disabled={!profile.resume}>
        Resume
      </MinecraftButton>
      {!profile.resume && (
        <span className="mc-tooltip" role="tooltip">
          Resume file not added yet.
        </span>
      )}
    </span>
  );
}
