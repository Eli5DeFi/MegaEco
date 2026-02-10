export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getStatusBadgeClass(status: string): string {
  switch (status) {
    case "live":
      return "badge badge--live";
    case "coming_soon":
      return "badge badge--coming-soon";
    case "invite_only":
      return "badge badge--invite-only";
    default:
      return "badge";
  }
}

export function getStatusLabel(status: string): string {
  switch (status) {
    case "live":
      return "Live";
    case "coming_soon":
      return "Coming Soon";
    case "invite_only":
      return "Invite Only";
    default:
      return status;
  }
}

export function getCategoryColor(category: string): string {
  switch (category) {
    case "yield":
      return "var(--accent-yield)";
    case "trading":
      return "var(--accent-trading)";
    case "games":
      return "var(--accent-games)";
    default:
      return "var(--accent-primary)";
  }
}
