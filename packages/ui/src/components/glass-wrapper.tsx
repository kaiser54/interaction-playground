import { type ComponentPropsWithoutRef, type ReactNode, useEffect, useRef } from "react";

import { cn } from "@workspace/ui/lib/utils";

type GlassWrapperProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
  ariaLabel?: string;
  containerClassName?: string;
  children?: ReactNode;
};

export function GlassWrapper({
  ariaLabel = "glass button",
  containerClassName,
  className,
  children,
  ...props
}: GlassWrapperProps) {
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = bubbleRef.current;
    if (!el) return;

    const pressScale = 1.2;
    const stretchMax = 0.02;
    const translateMax = 1.5;
    const stiffness = 0.12;
    const damping = 0.25;

    const state = { sx: 1, sy: 1, tx: 0, ty: 0, vsx: 0, vsy: 0, vtx: 0, vty: 0 };
    const target = { sx: 1, sy: 1, tx: 0, ty: 0 };

    let rect = el.getBoundingClientRect();
    let center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    let down = false;
    let rafId = 0;
    let activePointerId: number | null = null;

    const measure = () => {
      rect = el.getBoundingClientRect();
      center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    };

    const move = (e: PointerEvent) => {
      const nx = (e.clientX - center.x) / (rect.width / 2);
      const ny = (e.clientY - center.y) / (rect.height / 2);

      target.sx = pressScale + Math.abs(nx) * stretchMax;
      target.sy = pressScale + Math.abs(ny) * stretchMax;
      target.tx = nx * translateMax;
      target.ty = ny * translateMax;

      const lightX = 50 + nx * 20;
      const lightY = 50 + ny * 20;
      el.style.setProperty("--glass-light-x", `${lightX}%`);
      el.style.setProperty("--glass-light-y", `${lightY}%`);
    };

    const onPointerDown = (e: PointerEvent) => {
      measure();
      down = true;
      activePointerId = e.pointerId;
      el.setPointerCapture(e.pointerId);
      el.classList.add("show-light");
      target.sx = pressScale;
      target.sy = pressScale;
      move(e);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!down) return;
      if (activePointerId !== null && e.pointerId !== activePointerId) return;
      measure();
      move(e);
    };

    const onUp = () => {
      down = false;
      activePointerId = null;
      el.classList.remove("show-light");
      target.sx = 1;
      target.sy = 1;
      target.tx = 0;
      target.ty = 0;
    };

    const loop = () => {
      if (down) {
        measure();
      }

      const fsx = (target.sx - state.sx) * stiffness;
      state.vsx = (state.vsx + fsx) * (1 - damping);
      state.sx += state.vsx;

      const fsy = (target.sy - state.sy) * stiffness;
      state.vsy = (state.vsy + fsy) * (1 - damping);
      state.sy += state.vsy;

      const ftx = (target.tx - state.tx) * stiffness;
      state.vtx = (state.vtx + ftx) * (1 - damping);
      state.tx += state.vtx;

      const fty = (target.ty - state.ty) * stiffness;
      state.vty = (state.vty + fty) * (1 - damping);
      state.ty += state.vty;

      el.style.transform = `translate(${state.tx.toFixed(3)}px, ${state.ty.toFixed(3)}px) scale(${state.sx.toFixed(4)}, ${state.sy.toFixed(4)})`;

      rafId = requestAnimationFrame(loop);
    };

    let ro: ResizeObserver | null = null;
    window.addEventListener("resize", measure);
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(measure);
      ro.observe(el);
    }

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    window.addEventListener("blur", onUp);
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      ro?.disconnect();
      window.removeEventListener("resize", measure);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      window.removeEventListener("blur", onUp);
    };
  }, []);

  return (
    <>
      <style>{`
        .ui-glass-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        .ui-glass-bubble {
          --glass-light-x: 50%;
          --glass-light-y: 50%;
          position: relative;
          border: none;
          overflow: hidden;
          // background-color: rgb(255 255 255 / 0.6);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          box-shadow: 2px 2px 1px 0 #ffffff30 inset, -1px -1px 1px 1px #ffffff4d inset;
          display: grid;
          place-items: center;
          cursor: pointer;
          will-change: transform, background;
        }
        .ui-glass-bubble::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at var(--glass-light-x) var(--glass-light-y),
            rgb(255 255 255 / 0.9) 0%,
            rgb(255 255 255 / 0.3) 50%,
            rgb(255 255 255 / 0) 100%
          );
          opacity: 0;
          transition: opacity 0.2s ease-out;
          pointer-events: none;
        }
        .ui-glass-bubble.show-light::after {
          opacity: 1;
        }
        .ui-glass-bubble svg {
          width: 50%;
          height: 50%;
        }
      `}</style>
      <div className={cn("ui-glass-wrapper w-fit h-fit rounded-full", containerClassName)}>
        <div
          ref={bubbleRef}
          aria-label={ariaLabel}
          className={cn("ui-glass-bubble bg-white/60", className)}
          {...props}
        >
          {children}
        </div>
      </div>
    </>
  );
}
