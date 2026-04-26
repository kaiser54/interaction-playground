import { ExternalLink } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@workspace/ui/lib/utils";

type PersonalProjectCardRootProps = ComponentProps<"div">;
type PersonalProjectCardTitleProps = ComponentProps<"h3">;
type PersonalProjectCardDescriptionProps = ComponentProps<"p">;

function PersonalProjectCardRoot({
  className,
  children,
  ...props
}: PersonalProjectCardRootProps) {
  return (
    <div
      className={cn(
        "space-y-1 relative cursor-pointer p-2 rounded-[8px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function PersonalProjectCardTitle({
  className,
  children,
  ...props
}: PersonalProjectCardTitleProps) {
  return (
    <h3
      className={cn("text-sm font-medium text-neutral underline underline-offset-1", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

function PersonalProjectCardDescription({
  className,
  children,
  ...props
}: PersonalProjectCardDescriptionProps) {
  return (
    <p className={cn("text-sm text-secondary", className)} {...props}>
      {children}
    </p>
  );
}

function PersonalProjectCardAction({ className, ...props }: ComponentProps<"span">) {
  return (
    <span className={cn("absolute top-2 right-2", className)} {...props}>
      <ExternalLink className="size-4 text-secondary" />
    </span>
  );
}

export const PersonalProjectCard = Object.assign(PersonalProjectCardRoot, {
  Root: PersonalProjectCardRoot,
  Title: PersonalProjectCardTitle,
  Description: PersonalProjectCardDescription,
  Action: PersonalProjectCardAction,
});
