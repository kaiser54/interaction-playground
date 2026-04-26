type ProgressiveBlueOverlayProps = {
  height?: number;
  blur?: number;
  zIndex?: number;
  colorRgb?: string;
  gradientOpacity?: number;
  maskOpacity?: number;
  maskStop?: number;
  position?: "top" | "bottom" | "both";
};

export function ProgressiveBlueOverlay({
  height = 200,
  blur = 4,
  zIndex = 50,
  colorRgb = "59 130 246",
  gradientOpacity = 0.2,
  maskOpacity = 0.9,
  maskStop = 40,
  position = "both",
}: ProgressiveBlueOverlayProps) {
  const color = (opacity: number) => `rgb(${colorRgb} / ${opacity})`;

  const sharedStyle = {
    height: `${height}px`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backdropFilter: `blur(${blur}px)`,
    WebkitUserSelect: "none" as const,
    userSelect: "none" as const,
  };

  return (
    <>
      {position === "bottom" || position === "both" ? (
        <div
          className="pointer-events-none fixed left-0 bottom-0 w-full select-none"
          style={{
            ...sharedStyle,
            zIndex,
            background: `linear-gradient(transparent, ${color(gradientOpacity)})`,
            maskImage: `linear-gradient(to top, ${color(maskOpacity)} ${maskStop}%, transparent)`,
          }}
        />
      ) : null}
      {position === "top" || position === "both" ? (
        <div
          className="pointer-events-none fixed left-0 top-0 w-full select-none"
          style={{
            ...sharedStyle,
            zIndex,
            background: `linear-gradient(to bottom, ${color(gradientOpacity)}, transparent)`,
            maskImage: `linear-gradient(to bottom, ${color(maskOpacity)} ${maskStop}%, transparent)`,
          }}
        />
      ) : null}
    </>
  );
}
