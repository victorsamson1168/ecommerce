'use client';
// Standard packages
import Image from 'next/image';
import { useState } from 'react';
// Third party packages

// Custom packages
import Button from '@/components/Button';
import Dialog from '@/components/Dialog';
import { CloseIcon } from '@/components/Icons';
import { upcomingFeature } from '@/data';

type Props = {};

export default function ComingSoonFeatureCard(props: Props) {
  /** props  */
  const {} = props;

  /** third party hooks   */

  /** useState hooks  */

  const [isOpen, setIsOpen] = useState(false);

  /** consts  */

  return (
    <>
      <div className='pt-8 px-6 pb-6 rounded relative bg-white border border-[grayscale_extended_100] shadow-[0_2px_4px_-2px_rgba(82,98,119,0.06),0_4px_8px_-2px_rgba(82,98,119,0.10)]'>
        <div className='flex justify-between  '>
          <div className='flex flex-col w-1/2'>
            <p className='px-2 py-1 rounded w-fit bg-secondary_azure_200 text-caption_medium text-grayscale_900 tracking-[-0.24px] leading-[110%] font-poppins'>
              coming soon
            </p>
            <p className='text-label_semibold text-grayscale_900 mt-3'>
              Manage everything related HR from one place.
            </p>
            <p className='text-grayscale_900 text-caption_medium mt-1 '>
              No need to worry about hundreds of app to manage your day to day
              HR task. With Redrob you can have everything in one place
            </p>

            <p
              className='underline text-caption_semibold cursor-pointer text-grayscale_900 mt-3'
              onClick={() => setIsOpen(true)}
            >
              Read more
            </p>
          </div>
          <div className='select-none'>
            <Image
              src={'/app/images-jp/integrationlist.png'}
              width={296}
              height={131}
              alt='images'
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <Dialog
          onClose={() => setIsOpen(false)}
          maxWidth='md'
          hideActionButton={true}
        >
          <div className='flex justify-between items-center'>
            <h4 className='text-h4_bold font-poppins text-grayscale_900 tracking-[-0.36px] leading-[110%]'>
              Integration and workflows
              <span className='ml-2.5 text-caption_medium bg-secondary_azure_200 px-2 py-1 rounded '>
                Coming Soon
              </span>
            </h4>
            <CloseIcon
              onClick={() => setIsOpen(false)}
              className='cursor-pointer'
            />
          </div>
          <div>
            <p className='text-label_medium text-grayscale_900 mb-4'>
              Supercharge your workflows and connect the tools in you and your
              team uses everyday
            </p>
            {upcomingFeature?.map(item => (
              <div className=' flex   mb-4 ' key={item?.title}>
                <div className='w-10 h-10 border items-center flex  justify-center border-grayscale_extended_200 bg-grayscale_text_white rounded'>
                  <Image
                    src={`/icons/featureConnect/${item?.icon}`}
                    width={20}
                    height={20}
                    alt='icons'
                    className='w-5 h-5 '
                  />
                </div>
                <div className='flex flex-col flex-1 ml-3'>
                  <h6 className='text-label_medium text-grayscale_900  '>
                    {item.title}
                  </h6>
                  <p className='text-caption_medium text-grayscale_900'>
                    {item?.description}
                  </p>
                </div>
                <div className='flex justify-end'>
                  <Button variant='primary' disabled size='small'>
                    Connect
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Dialog>
      )}
    </>
  );
}
