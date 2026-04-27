import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@workspace/ui/components/motion-primitives/morphing-dialog';
import { ScrollArea } from '@workspace/ui/components/scroll-area';
import Timeline from './timeline';
import { experienceData } from '../lib/experience-data';

export function WorkExperienceSection() {
  return (
    <div>
      {experienceData.map((company, index) => {
        const featuredPosition = company.positions[0];
        const subtitleText = [featuredPosition?.duration, featuredPosition?.title]
          .filter(Boolean)
          .join(' • ');

        return (
          <div
            key={`${company.name}-${company.year}`}
            className={
              index < experienceData.length - 1
                ? 'border-b border-border'
                : undefined
            }
          >
            <MorphingDialog
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 24,
              }}
            >
            <MorphingDialogTrigger
              style={{
                borderRadius: '4px',
              }}
              className='bg-white w-full py-3'
            >
              <div className='flex items-center space-x-4'>
                <MorphingDialogImage
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  className='size-12 object-cover object-top'
                  style={{
                    borderRadius: '4px',
                  }}
                />
                <div className='flex flex-col items-start justify-center space-y-0'>
                  <MorphingDialogTitle className='text-sm font-medium text-neutral'>
                    {company.name}
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className='text-sm text-secondary flex items-center gap-2 text-left'>
                    {subtitleText}
                  </MorphingDialogSubtitle>
                </div>
              </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent
                style={{
                  borderRadius: '12px',
                }}
                className='relative h-auto w-[90%] max-w-[700px] border border-border bg-white'
              >
                <ScrollArea className='max-h-[90vh]'>
                  <div className='relative p-2'>
                    <div className='flex items-center space-x-4'>
                      <MorphingDialogImage
                        src={company.logoUrl}
                        alt={`${company.name} logo`}
                        className='size-12 object-cover object-top'
                        style={{
                          borderRadius: '4px',
                        }}
                      />
                      <div className='flex flex-col items-start justify-center space-y-0'>
                        <MorphingDialogTitle className='text-sm font-medium text-neutral'>
                          {company.name}
                        </MorphingDialogTitle>
                        {/* <MorphingDialogSubtitle className='text-sm text-secondary flex items-center gap-2 text-left'>
                          {subtitleText}
                        </MorphingDialogSubtitle> */}
                      </div>
                    </div>
                    <Timeline companies={[company]} className='pt-6' />
                  </div>
                </ScrollArea>
                <MorphingDialogClose className='text-zinc-500' />
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
          </div>
        );
      })}
    </div>
  );
}
