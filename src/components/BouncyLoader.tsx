import clsx from 'clsx';
import Image from 'next/image';
import Loader from './Loader';

type BounceLoaderProps = {
  title?: string;
  subTitle?: string;
};
const BouncyLoader = (props: BounceLoaderProps) => {
  /** prop states */
  const {
    title = 'Your question is being generated',
    subTitle = 'Please wait. It may take up to 60 seconds.',
  } = props;

  return (
    <div
      className={clsx([
        'h-fit',
        'mt-[74px]',
        'flex',
        'flex-col',
        'mx-auto',
        'items-center',
        'justify-center',
      ])}
    >
      <Image
        className='animate-bounce'
        width={193}
        height={101}
        src='/app/images-jp/itemGeneratingGreen.svg'
        alt='Loading animation waiting for job post to be generated.'
      />
      <h3 className='text-h3_bold pt-6 pb-4'>{title}</h3>
      <p className='text-bodyS_regular pb-10'>{subTitle}</p>
      {/* <ProgressLinear className='!w-2/3' value={progress} /> */}

      <Loader />
    </div>
  );
};

export default BouncyLoader;
