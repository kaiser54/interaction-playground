import { Maximize } from "lucide-react";
import type { ComponentProps } from "react";
import { motion, type HTMLMotionProps } from "motion/react";

import { cn } from "@workspace/ui/lib/utils";
import {
  showIconTransition,
  showIconVariant,
} from "@workspace/ui/motion/show-icon-variant";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

type WorkExperienceCardRootProps = HTMLMotionProps<"div">;

type WorkExperienceCardAvatarProps = {
  avatarSrc?: string;
  avatarFallback?: string;
  className?: string;
};

type WorkExperienceCardContentProps = ComponentProps<"div">;
type WorkExperienceCardCompanyProps = ComponentProps<"h3">;
type WorkExperienceCardMetaProps = {
  period: string;
  role: string;
  className?: string;
};

function WorkExperienceCardRoot({
  className,
  children,
  ...props
}: WorkExperienceCardRootProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={cn(
        "flex items-center gap-4 p-2 rounded-[16px] relative hover:bg-gray-1 transition-colors duration-300 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function WorkExperienceCardAvatar({
  avatarSrc,
  avatarFallback = "",
  className,
}: WorkExperienceCardAvatarProps) {
  return (
    <Avatar className={cn("size-12", className)}>
      <AvatarImage className="rounded-[8px]" src={avatarSrc} />
      <AvatarFallback className="rounded-[8px]">{avatarFallback}</AvatarFallback>
    </Avatar>
  );
}

function WorkExperienceCardContent({
  className,
  children,
  ...props
}: WorkExperienceCardContentProps) {
  return (
    <div className={cn("min-w-0", className)} {...props}>
      {children}
    </div>
  );
}

function WorkExperienceCardCompany({
  className,
  children,
  ...props
}: WorkExperienceCardCompanyProps) {
  return (
    <h3 className={cn("text-sm font-medium text-neutral", className)} {...props}>
      {children}
    </h3>
  );
}

function WorkExperienceCardMeta({
  period,
  role,
  className,
}: WorkExperienceCardMetaProps) {
  return (
    <p className={cn("text-sm text-secondary flex items-center gap-2", className)}>
      {period} <span className="text-secondary text-[10px]">•</span> {role}
    </p>
  );
}

function WorkExperienceCardAction({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={showIconVariant}
      transition={showIconTransition}
      className={cn("absolute top-4 right-4 hidden md:block pointer-events-none", className)}
      {...props}
    >
      <Maximize className="size-4 text-secondary" />
    </motion.div>
  );
}

export const WorkExperienceCard = Object.assign(WorkExperienceCardRoot, {
  Root: WorkExperienceCardRoot,
  Avatar: WorkExperienceCardAvatar,
  Content: WorkExperienceCardContent,
  Company: WorkExperienceCardCompany,
  Meta: WorkExperienceCardMeta,
  Action: WorkExperienceCardAction,
});
