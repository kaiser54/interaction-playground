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


export function MorphingDialogBasicTwo() {
    return (
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
                className='bg-white'
            >
                <div className='flex items-center space-x-4'>
                    <MorphingDialogImage
                        src='https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg'
                        alt='Linear logo'
                        className='size-12 object-cover object-top'
                        style={{
                            borderRadius: '4px',
                        }}
                    />
                    <div className='flex flex-col items-start justify-center space-y-0'>
                        <MorphingDialogTitle className='text-sm font-medium text-neutral'>
                            Linear
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className='text-sm text-secondary flex items-center gap-2'>
                            2021 - Present
                            <span className='text-secondary text-[10px]'>•</span>
                            Software Engineer
                        </MorphingDialogSubtitle>
                    </div>
                </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
                <MorphingDialogContent
                    style={{
                        borderRadius: '12px',
                    }}
                    className='relative h-auto w-[700px] border border-gray-100 bg-white'
                >
                    <ScrollArea className='max-h-[90vh]'>
                        <div className='relative p-2'>
                            <div className='flex items-center space-x-4'>
                                <MorphingDialogImage
                                    src='https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg'
                                    alt='Linear logo'
                                    className='size-12 object-cover object-top'
                                    style={{
                                        borderRadius: '4px',
                                    }}
                                />
                                <div className='flex flex-col items-start justify-center space-y-0'>
                                    <MorphingDialogTitle className='text-sm font-medium text-neutral'>
                                        Linear
                                    </MorphingDialogTitle>
                                    <MorphingDialogSubtitle className='text-sm text-secondary flex items-center gap-2'>
                                        2021 - Present
                                        <span className='text-secondary text-[10px]'>•</span>
                                        Software Engineer
                                    </MorphingDialogSubtitle>
                                </div>
                            </div>
                            {/* timeline here */}
                        </div>
                    </ScrollArea>
                    <MorphingDialogClose className='text-zinc-500' />
                </MorphingDialogContent>
            </MorphingDialogContainer>
        </MorphingDialog>
    );
}
