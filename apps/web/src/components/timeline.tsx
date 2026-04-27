/* eslint-disable @typescript-eslint/no-explicit-any */
/** biome-ignore-all lint/suspicious/noExplicitAny: this is a valid use case */
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import type { Company, Position } from "@/lib/experience-data";

// Types
interface TimelineProps {
  companies: Company[];
  className?: string;
  topAnimationComplete?: boolean;
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

// Contribution Item Component
function ContributionItem({
  contribution,
  index,
}: {
  contribution: string;
  index: number;
}) {
  const contributionRef = useRef(null);
  const isInView = useInView(contributionRef, { once: true, amount: 0.5 });

  return (
    <motion.li
      ref={contributionRef}
      className="flex text-sm items-start gap-2 text-secondary"
      initial={{ opacity: 0, filter: "blur(5px)", x: -10 }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", x: 0 }
          : { opacity: 0, filter: "blur(5px)", x: -10 }
      }
      transition={{
        duration: 0.3,
        delay: 0.1 * index,
        ease: "easeOut",
      }}
    >
      <span className="w-1.5 h-1.5 bg-border rounded-full mt-2 shrink-0"></span>
      <span>{contribution}</span>
    </motion.li>
  );
}

// Position Component
function PositionItem({
  position,
  positionIndex,
  isLastPosition,
  companyName,
}: {
  position: Position;
  positionIndex: number;
  isLastPosition: boolean;
  companyName: string;
}) {
  const positionRef = useRef(null);
  const isInView = useInView(positionRef, {
    once: true,
    amount: 0.3,
    // Increasing threshold for later positions
    margin: `0px 0px -${30 + positionIndex * 15}px 0px` as unknown as any,
  });

  // Position animation
  const positionAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      x: -20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      transition: {
        duration: 0.4,
        ease: EASE_OUT,
      },
    },
  } satisfies Variants;

  return (
    <div ref={positionRef} className="flex gap-6 mb-4 last:mb-0">
      <div className="flex flex-col items-center pl-4">
        <motion.div
          className="shrink-0 w-2.5 h-2.5 bg-border rounded-full mt-2"
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
        ></motion.div>
        {!isLastPosition && (
          <motion.div
            className="w-px h-full bg-border mt-2"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
          ></motion.div>
        )}
      </div>
      <motion.div
        className="flex-1 pb-6"
        variants={positionAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h3 className="font-medium text-sm md:text-base text-neutral mb-4">
          {position.title}
          {position.company !== companyName && ` - ${position.company}`}
        </h3>
        <p className="text-sm text-secondary">{position.description}</p>
        {position.highlights && position.highlights.length > 0 && (
          <ul className="flex-col gap-2 text-sm text-secondary mt-4 hidden sm:flex">
            <header className="text-neutral text-sm font-medium">
              Highlights:
            </header>
            {position.highlights?.map((highlight, index) => (
              <li key={`${position.title}-highlight-${index}`} className=" list-decimal list-inside text-balance">
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        {position.contributions && (
          <div className="space-y-2 mt-3">
            <p className="text-neutral text-sm font-medium">Contributed to:</p>
            <ul className="space-y-1">
              {position.contributions.map((contribution, index) => (
                <ContributionItem
                  key={index + contribution}
                  contribution={contribution}
                  index={index}
                />
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// Company Component
function CompanyItem({
  company,
}: {
  company: Company;
  companyIndex: number;
  topAnimationComplete: boolean;
}) {
  const companyRef = useRef(null);


  return (
    <div ref={companyRef}>
      {/* Company Header */}

      {/* Timeline */}
      <div className="relative">
        {company.positions.map((position, positionIndex) => (
          <div
            key={`${company.name}-${position.title}-${positionIndex}`}
          >
            <PositionItem
              position={position}
              positionIndex={positionIndex}
              isLastPosition={positionIndex === company.positions.length - 1}
              companyName={company.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Timeline Component
export default function Timeline({
  companies,
  className = "",
  topAnimationComplete = false,
}: TimelineProps) {
  return (
    <div className={`space-y-12 ${className}`}>
      {companies.map((company, companyIndex) => (
        <div key={`${company.name}-${company.year}-${companyIndex}`}>
          <CompanyItem
            company={company}
            companyIndex={companyIndex}
            topAnimationComplete={topAnimationComplete}
          />
          {/* <div className="flex gap-2">
            <img src="/posthearts.png" alt="Posthearts" className="w-10 h-10" />
            <img src="/posthearts.png" alt="Posthearts" className="w-10 h-10" />
            </div> */}
        </div>
      ))}
    </div>
  );
}