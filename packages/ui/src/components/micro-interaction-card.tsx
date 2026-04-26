import { Maximize } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@workspace/ui/lib/utils";

type MicroInteractionCardRootProps = ComponentProps<"div">;
type MicroInteractionCardPreviewProps = ComponentProps<"div">;
type MicroInteractionCardTitleProps = ComponentProps<"h3">;
type MicroInteractionCardDescriptionProps = ComponentProps<"p">;

function MicroInteractionCardRoot({
  className,
  children,
  ...props
}: MicroInteractionCardRootProps) {
  return (
    <div
      className={cn("flex flex-col items-start gap-2 p-2 rounded-[12px] relative", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function MicroInteractionCardPreview({
  className,
  ...props
}: MicroInteractionCardPreviewProps) {
  return <div className={cn("aspect-3/2 w-full bg-gray-1 rounded-[8px]", className)} {...props} />;
}

function MicroInteractionCardTitle({
  className,
  children,
  ...props
}: MicroInteractionCardTitleProps) {
  return (
    <h3 className={cn("text-sm font-medium text-neutral", className)} {...props}>
      {children}
    </h3>
  );
}

function MicroInteractionCardDescription({
  className,
  children,
  ...props
}: MicroInteractionCardDescriptionProps) {
  return (
    <p className={cn("text-sm text-secondary", className)} {...props}>
      {children}
    </p>
  );
}

function MicroInteractionCardAction({ className, ...props }: ComponentProps<"span">) {
  return (
    <span className={cn("absolute top-4 right-4", className)} {...props}>
      <Maximize className="size-4 text-secondary" />
    </span>
  );
}

export const MicroInteractionCard = Object.assign(MicroInteractionCardRoot, {
  Root: MicroInteractionCardRoot,
  Preview: MicroInteractionCardPreview,
  Title: MicroInteractionCardTitle,
  Description: MicroInteractionCardDescription,
  Action: MicroInteractionCardAction,
});
