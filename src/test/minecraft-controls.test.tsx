import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MinecraftButton } from "@/components/MinecraftButton";
import { ResumeButton } from "@/components/ResumeButton";
import { profile } from "@/data/portfolio";

const originalResume = profile.resume;
afterEach(() => {
  cleanup();
  profile.resume = originalResume;
});

describe("Minecraft controls", () => {
  it("preserves selectable native button behavior", () => {
    const onClick = vi.fn();
    render(
      <MinecraftButton role="option" selected onClick={onClick}>
        A project
      </MinecraftButton>,
    );
    const option = screen.getByRole("option", { name: "A project" });
    expect(option).toHaveAttribute("aria-selected", "true");
    fireEvent.click(option);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("keeps missing Resume unavailable with an explanation", () => {
    profile.resume = "";
    render(<ResumeButton />);
    expect(screen.getByRole("button", { name: "Resume" })).toBeDisabled();
    expect(screen.queryByRole("link", { name: "Resume" })).not.toBeInTheDocument();
    expect(screen.getByRole("tooltip")).toHaveTextContent("Resume file not added yet.");
  });

  it("opens a configured Resume in a separate tab", () => {
    profile.resume = "/resume.pdf";
    render(<ResumeButton />);
    const link = screen.getByRole("link", { name: "Resume" });
    expect(link).toHaveAttribute("href", "/resume.pdf");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
