import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/pagination';

export const Tips = () => {
  const { t } = useTranslation();

  const data = [
    {
      heading: (
        <div>
          <p className='inline-block text-h4_bold md:text-h3_bold font-poppins mt-8 mb-8 '>
            {t('slider.exploreTalent', { ns: 'common' })}
          </p>
        </div>
      ),
      list: [
        {
          head: t('slider.nlp.head', { ns: 'common' }),
          content: t('slider.nlp.content', { ns: 'common' }),
        },
        {
          head: t('slider.tailoredFiltering.head', { ns: 'common' }),
          content: t('slider.tailoredFiltering.content', { ns: 'common' }),
        },
        {
          head: t('slider.verifiedContent.head', { ns: 'common' }),
          content: t('slider.verifiedContent.content', { ns: 'common' }),
        },
        {
          head: t('slider.informedDecisionMaking.head', { ns: 'common' }),
          content: t('slider.informedDecisionMaking.content', { ns: 'common' }),
        },
      ],
    },
    // {
    //   heading: (
    //     <div>
    //       <p className='inline-block text-h4_bold md:text-h3_bold'>
    //         {t('slider.evaluateSkills', { ns: 'common' })}
    //       </p>
    //     </div>
    //   ),
    //   list: [
    //     {
    //       head: t('slider.instantInsights.head', { ns: 'common' }),
    //       content: t('slider.instantInsights.content', { ns: 'common' }),
    //     },
    //     {
    //       head: t('slider.customTesting.head', { ns: 'common' }),
    //       content: t('slider.customTesting.content', { ns: 'common' }),
    //     },
    //   ],
    // },
    // {
    //   heading: (
    //     <div>
    //       <p className='inline-block text-h4_bold md:text-h3_bold'>
    //         {t('slider.discoverTalent', { ns: 'common' })}
    //       </p>
    //     </div>
    //   ),
    //   list: [
    //     {
    //       head: t('slider.talentDiscovery.head', { ns: 'common' }),
    //       content: t('slider.talentDiscovery.content', { ns: 'common' }),
    //     },
    //     {
    //       head: t('slider.efficientMatching.head', { ns: 'common' }),
    //       content: t('slider.efficientMatching.content', { ns: 'common' }),
    //     },
    //   ],
    // },
    // {
    //   heading: (
    //     <div>
    //       <p className='inline-block text-h4_bold md:text-h3_bold'>
    //         {t('slider.accessTechTalent', { ns: 'common' })}
    //       </p>
    //     </div>
    //   ),
    //   list: [
    //     {
    //       head: t('slider.worldwideReach.head', { ns: 'common' }),
    //       content: t('slider.worldwideReach.content', { ns: 'common' }),
    //     },
    //     {
    //       head: t('slider.culturalFit.head', { ns: 'common' }),
    //       content: t('slider.culturalFit.content', { ns: 'common' }),
    //     },
    //   ],
    // },
  ];

  return (
    <div className='h-full '>
      <div className='h-full flex flex-col justify-between bg-primary_extended_1000 rounded'>
        <div className='w-full  h-full rounded p-4  md:p-6 text-white overflow-hidden'>
          {/* <div className='flex gap-[10px]'>
            <BulbYellowIcon />
            <p className='text-grayscale_50  text-caption_medium md:text-bodyS_medium '>
              {t('slider.tips', { ns: 'common' })}
            </p>
          </div> */}
          {data?.map((card, index: number) => (
            <div key={index as any} className='h-full'>
              <div className=' leading-[26.4px] font-poppins'>
                {card.heading}
              </div>

              <ul className='ml-2 flex flex-col gap-4'>
                {card.list?.map((elm, index) => (
                  <li key={index as any}>
                    <div className='flex gap-2 items-center'>
                      •
                      <p className='text-caption_bold md:text-label_bold'>
                        {elm.head}
                      </p>
                    </div>
                    <p className='ml-5 text-caption_medium md:text-label_medium'>
                      {elm.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* <div className=' pl-6'>
          <div className='swiper-pagination-fix mt-auto pb-4' />
        </div> */}
      </div>
    </div>
  );
};
