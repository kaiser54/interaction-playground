import { Maximize } from "lucide-react";
import type { ComponentProps } from "react";
import { motion, type HTMLMotionProps } from "motion/react";

import {
  scaleCardTransition,
  scaleCardVariant,
} from "@workspace/ui/motion/scale-card-variant";
import {
  showIconTransition,
  showIconVariant,
} from "@workspace/ui/motion/show-icon-variant";
import { cn } from "@workspace/ui/lib/utils";

type MicroInteractionCardRootProps = HTMLMotionProps<"div">;
type MicroInteractionCardPreviewProps = ComponentProps<"div">;
type MicroInteractionCardTitleProps = ComponentProps<"h3">;
type MicroInteractionCardDescriptionProps = ComponentProps<"p">;
type MicroInteractionCardActionProps = HTMLMotionProps<"span">;

function MicroInteractionCardRoot({
  className,
  children,
  ...props
}: MicroInteractionCardRootProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={scaleCardVariant}
      transition={scaleCardTransition}
      className={cn("group flex flex-col items-start gap-2 p-2 rounded-[12px] cursor-pointer relative", className)}
      {...props}
    >
      {children}
    </motion.div>
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

function MicroInteractionCardAction({ className, ...props }: MicroInteractionCardActionProps) {
  return (
    <motion.span
      variants={showIconVariant}
      transition={showIconTransition}
      className={cn("absolute top-4 right-4 pointer-events-none", className)}
      {...props}
    >
      <Maximize className="size-4 text-secondary" />
    </motion.span>
  );
}

export const MicroInteractionCard = Object.assign(MicroInteractionCardRoot, {
  Root: MicroInteractionCardRoot,
  Preview: MicroInteractionCardPreview,
  Title: MicroInteractionCardTitle,
  Description: MicroInteractionCardDescription,
  Action: MicroInteractionCardAction,
});
