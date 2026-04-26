import { GlassWrapper } from "@workspace/ui/components/glass-wrapper";

type GlassButtonProps = {
  ariaLabel?: string;
  className?: string;
  onClick?: () => void;
};

export { GlassWrapper as GlassIconButton };

export function GlassButton(props: GlassButtonProps) {
  return (
    <GlassWrapper {...props}>
      <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </GlassWrapper>
  );
}
