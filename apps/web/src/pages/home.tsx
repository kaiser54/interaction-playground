import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";
import { PersonalProjectCard } from "@workspace/ui/components/personal-project-card";
import { WorkExperienceCard } from "@workspace/ui/components/work-experience-card";

const WORK_EXPERIENCES = [
  { company: "Linear", period: "2021 - Present", role: "Software Engineer" },
  { company: "Linear", period: "2021 - Present", role: "Software Engineer" },
];

const PERSONAL_PROJECTS = [
  { title: "Posthearts", description: "A web app that helps people write, design, and send letters to others or future self." },
  { title: "Quality V.1", description: "Shaping how teams approach feedback on what they're shipping." },
];


export function Home() {
  return (
    <div className="px-6 py-16">
      <div className="min-h-svh max-w-[720px] mx-auto">
        <section className="flex flex-col items-start gap-18">
          <header className="flex flex-col items-start gap-8">
            <Avatar className="size-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="space-y-0">
              <h1 className="text-sm font-medium text-default">Temitope Agboola</h1>
              <p className="text-sm font-normal text-neutral">Software Engineer</p>
            </div>
          </header>
          <article className="space-y-4 w-full">
            <h2 className="text-sm font-medium text-default">About</h2>
            <p className="text-sm text-neutral pt-2">I work on the Web team at Linear. I like to build things for designers and developers,
              think deeply about the user interface, how it looks, feels, behaves.</p>
            <p className="text-sm text-neutral">Previously, I worked on the design team at Vercel.</p>
          </article>
          <section className="space-y-4 w-full">
            <h2 className="text-sm font-medium text-default">Where I've Worked</h2>
            <p className="text-sm text-neutral">Teams and roles that shaped my product thinking and interaction craft.</p>
            <div className="pt-2">
              {WORK_EXPERIENCES.map((experience, index) => (
                <div key={`${experience.company}-${experience.period}-${experience.role}-${index}`}>
                  <WorkExperienceCard>
                    <WorkExperienceCard.Avatar />
                    <WorkExperienceCard.Content>
                      <WorkExperienceCard.Company>{experience.company}</WorkExperienceCard.Company>
                      <WorkExperienceCard.Meta period={experience.period} role={experience.role} />
                    </WorkExperienceCard.Content>
                    <WorkExperienceCard.Action />
                  </WorkExperienceCard>
                  {index < WORK_EXPERIENCES.length - 1 ? (
                    <div className="border-b border-border w-[calc(100%-32px)] mx-auto" />
                  ) : null}
                </div>
              ))}
            </div>
          </section>
          <article className="space-y-4 w-full">
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
          </article>
        </section>
      </div>
    </div>
  )
}
