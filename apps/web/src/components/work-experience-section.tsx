import { WorkExperienceCard } from "@workspace/ui/components/work-experience-card";
import { useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import { ModalSkin } from "./modal-skin";
import { X } from "lucide-react";
import { GlassWrapper } from "@workspace/ui/components/glass-wrapper";

const WORK_EXPERIENCES = [
    { id: "linear-se", company: "Linear", period: "2021 - Present", role: "Software Engineer" },
    { id: "openai-se", company: "Open AI", period: "2021 - Present", role: "Software Engineer" },
];

type WorkExperience = (typeof WORK_EXPERIENCES)[number];
const SHARED_ITEM_TRANSITION = { duration: 0.48, ease: [0.23, 1, 0.32, 1] as const };

export function WorkExperienceSection() {
    const [selectedCompany, setSelectedCompany] = useState<WorkExperience | null>(null);

    const closeDialog = () => setSelectedCompany(null);

    return (
        <LayoutGroup id="work-experience-dialog-transition">
            <>
                {WORK_EXPERIENCES.map((experience, index) => (
                    <div key={experience.id}>
                        <div
                            role="button"
                            tabIndex={0}
                            className="rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            onClick={() => setSelectedCompany(experience)}
                            onKeyDown={(event) => {
                                if (event.key !== "Enter" && event.key !== " ") return;
                                event.preventDefault();
                                setSelectedCompany(experience);
                            }}
                            aria-label={`Open ${experience.company} details`}
                        >
                            <WorkExperienceCard
                                layoutId={`work-experience-card-${experience.id}`}
                                transition={SHARED_ITEM_TRANSITION}
                            >
                                <motion.div
                                    layoutId={`work-experience-avatar-${experience.id}`}
                                    transition={SHARED_ITEM_TRANSITION}
                                >
                                    <WorkExperienceCard.Avatar />
                                </motion.div>
                                <WorkExperienceCard.Content>
                                    <motion.div
                                        layoutId={`work-experience-company-${experience.id}`}
                                        transition={SHARED_ITEM_TRANSITION}
                                    >
                                        <WorkExperienceCard.Company>{experience.company}</WorkExperienceCard.Company>
                                    </motion.div>
                                    <motion.div
                                        layoutId={`work-experience-meta-${experience.id}`}
                                        transition={SHARED_ITEM_TRANSITION}
                                    >
                                        <WorkExperienceCard.Meta period={experience.period} role={experience.role} />
                                    </motion.div>
                                </WorkExperienceCard.Content>
                                <WorkExperienceCard.Action />
                            </WorkExperienceCard>
                        </div>
                        {index < WORK_EXPERIENCES.length - 1 ? (
                            <div className="border-b border-border w-[calc(100%-32px)] mx-auto" />
                        ) : null}
                    </div>
                ))}
                <ModalSkin
                    open={selectedCompany !== null}
                    onClose={closeDialog}
                    titleId="work-experience-dialog-title"
                    className="max-w-[700px] p-4"
                    dialogLayoutId={selectedCompany ? `work-experience-card-${selectedCompany.id}` : undefined}
                    dialogTransition={SHARED_ITEM_TRANSITION}
                >
                    {/* <div className="absolute top-4 right-4"> */}

                    {/* </div> */}
                    {selectedCompany ? (
                        <div className="space-y-4">
                            <WorkExperienceCard
                                className="w-full hover:bg-transparent p-0"
                            >
                                <motion.div
                                    layoutId={`work-experience-avatar-${selectedCompany.id}`}
                                    transition={SHARED_ITEM_TRANSITION}
                                >
                                    <WorkExperienceCard.Avatar />
                                </motion.div>
                                <WorkExperienceCard.Content>
                                    <motion.div
                                        layoutId={`work-experience-company-${selectedCompany.id}`}
                                        transition={SHARED_ITEM_TRANSITION}
                                    >
                                        <WorkExperienceCard.Company>{selectedCompany.company}</WorkExperienceCard.Company>
                                    </motion.div>
                                    <motion.div
                                        layoutId={`work-experience-meta-${selectedCompany.id}`}
                                        transition={SHARED_ITEM_TRANSITION}
                                    >
                                        <WorkExperienceCard.Meta period={selectedCompany.period} role={selectedCompany.role} />
                                    </motion.div>
                                </WorkExperienceCard.Content>
                                <div className="ml-auto">
                                <GlassWrapper
                                    className="size-8 rounded-full bg-secondary/20"
                                    ariaLabel="Close about"
                                >
                                    <X className="size-3 text-secondary" />
                                </GlassWrapper>
                                </div>
                            </WorkExperienceCard>
                            <div className="text-sm text-neutral">
                                Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.
                            </div>
                        </div>
                    ) : null}
                </ModalSkin>
            </>
        </LayoutGroup>
    )
}
