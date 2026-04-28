import { MicroInteractionCard } from "@workspace/ui/components/micro-interaction-card";
import { PersonalProjectCard } from "@workspace/ui/components/personal-project-card";
import { WorkExperienceCard } from "@workspace/ui/components/work-experience-card";
import { experienceData } from '../lib/experience-data';

const PERSONAL_PROJECTS = [
  { title: "Posthearts", description: "A web app that helps people write, design, and send letters to others or future self." },
  { title: "Quality V.1", description: "Shaping how teams approach feedback on what they're shipping." },
];

const MICRO_INTERACTIONS = [
  {
    title: "Button press physics",
    description: "A study on the physics of button presses, how they feel, and how they can be improved.",
  },
  {
    title: "Inline save acknowledgement",
    description: "Exploring how to improve the modal dismiss experience.",
  },
  {
    title: "Segmented control",
    description: "Exploring how to improve the segmented control experience.",
  },
];

const FEATURED_WRITING = [
  { title: "Agents with Taste", description: "How to transfer taste into an AI." },
  { title: "Building a Toast Component", description: "My experience building a toast library for React." },
];


export function Home() {

  return (
    <div className="py-16 pt-0">
      <div className="min-h-svh">
        <section className="flex flex-col items-start gap-25">
          <header className="container-wrapper flex flex-col items-start gap-8">
            <div className="space-y-0">
              <h1 className="text-sm font-medium text-default">Temitope Agboola</h1>
              <p className="text-sm font-normal text-neutral">Software Engineer</p>
            </div>
          </header>
          <article className="container-wrapper space-y-4 w-full">
            <h2 className="text-sm font-medium text-default">About</h2>
            <p className="text-sm text-neutral pt-2">I work on the Web team at Linear. I like to build things for designers and developers,
              think deeply about the user interface, how it looks, feels, behaves.</p>
            <p className="text-sm text-neutral">Previously, I worked on the design team at Vercel.</p>
          </article>
          <section className="container-wrapper space-y-4 w-full">
            <h2 className="text-sm font-medium text-default">Where I've Worked</h2>
            <p className="text-sm text-neutral">Teams and roles that shaped my product thinking and interaction craft.</p>
            <div className="pt-2">
              {experienceData.map((experience, index) => (
                <div key={`${experience.name}-${experience.year}-${index}`}>
                  <WorkExperienceCard>
                    <WorkExperienceCard.Avatar avatarSrc={experience.logoUrl} />
                    <WorkExperienceCard.Content>
                      <WorkExperienceCard.Company>{experience.name}</WorkExperienceCard.Company>
                      <WorkExperienceCard.Meta
                        period={experience.year}
                        role={experience.positions[0]?.title ?? "Role unavailable"}
                      />
                    </WorkExperienceCard.Content>
                  </WorkExperienceCard>
                  {index < experienceData.length - 1 ? (
                    <div className="border-b border-border w-[calc(100%-32px)] mx-auto" />
                  ) : null}
                </div>
              ))}
            </div>
          </section>
          <section className="container-wrapper space-y-4 w-full">
            <h2 className="text-sm font-medium text-default">Personal Projects</h2>
            <p className="text-sm text-neutral">A selection of products I built or contributed to across personal and SaaS work.</p>
            <div className="pt-2 space-y-2">
              {PERSONAL_PROJECTS.map((project) => (
                <PersonalProjectCard key={project.title}>
                  <PersonalProjectCard.Title>{project.title}</PersonalProjectCard.Title>
                  <PersonalProjectCard.Description>
                    {project.description}
                  </PersonalProjectCard.Description>
                </PersonalProjectCard>
              ))}
            </div>
          </section>
          <section className="space-y-4 w-full">
            <div className="container-wrapper space-y-4 w-full">
              <h2 className="text-sm font-medium text-default">Micro-interaction Explorations</h2>
              <p className="text-sm text-neutral">Interaction studies focused on motion clarity, feedback timing, and perceived performance.</p>
            </div>
            <div className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-2 max-w-[1000px] mx-auto">
              {MICRO_INTERACTIONS.map((interaction) => (
                <MicroInteractionCard key={interaction.title}>
                  <MicroInteractionCard.Preview />
                  <MicroInteractionCard.Title>{interaction.title}</MicroInteractionCard.Title>
                  <MicroInteractionCard.Description>
                    {interaction.description}
                  </MicroInteractionCard.Description>
                  <MicroInteractionCard.Action />
                </MicroInteractionCard>
              ))}
            </div>
          </section>
          <section className="container-wrapper space-y-4 w-full">
            <h2 className="text-sm font-medium text-default">Featured Writing</h2>
            <div className="pt-2 space-y-2">
              {FEATURED_WRITING.map((project) => (
                <PersonalProjectCard key={project.title}>
                  <PersonalProjectCard.Title>{project.title}</PersonalProjectCard.Title>
                  <PersonalProjectCard.Description>
                    {project.description}
                  </PersonalProjectCard.Description>
                </PersonalProjectCard>
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}
