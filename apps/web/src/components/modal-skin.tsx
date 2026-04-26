import { type KeyboardEvent as ReactKeyboardEvent, type ReactNode, useEffect, useRef } from "react";
import { cn } from "@workspace/ui/lib/utils";
import { AnimatePresence, motion, type Transition } from "motion/react";

type ModalSkinProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  backdropClassName?: string;
//   contentClassName?: string;
  titleId?: string;
  descriptionId?: string;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  dialogLayoutId?: string;
  dialogTransition?: Transition;
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), details, [tabindex]:not([tabindex="-1"])';

export function ModalSkin({
  open,
  onClose,
  children,
  className,
  backdropClassName,
//   contentClassName,
  titleId,
  descriptionId,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  dialogLayoutId,
  dialogTransition,
}: ModalSkinProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previousActiveElementRef.current = document.activeElement as HTMLElement | null;

    const frame = requestAnimationFrame(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      const firstFocusable = dialog.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
      firstFocusable?.focus();
      if (!firstFocusable) {
        dialog.focus();
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeOnEscape, onClose]);

  useEffect(() => {
    if (open) return;

    previousActiveElementRef.current?.focus?.();
  }, [open]);

  const onDialogKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
      (element) => !element.hasAttribute("disabled"),
    );

    if (focusable.length === 0) {
      event.preventDefault();
      dialog.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const activeElement = document.activeElement as HTMLElement | null;

    if (event.shiftKey && activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className={cn("fixed inset-0 z-50 grid place-items-center p-4")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            type="button"
            aria-label="Close dialog"
            onClick={closeOnBackdropClick ? onClose : undefined}
            className={cn("absolute inset-0 bg-secondary/70", backdropClassName)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
          <motion.div
            ref={dialogRef}
            layoutId={dialogLayoutId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            tabIndex={-1}
            onKeyDown={onDialogKeyDown}
            className={cn("relative z-10 w-full max-w-2xl rounded-2xl bg-white shadow-2xs", className)}
            initial={{ opacity: 0, y: 18, scale: 0.98, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 8, scale: 0.985, filter: "blur(6px)" }}
            transition={dialogTransition ?? { duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
