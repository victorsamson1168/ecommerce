'use client';

// Standard packages
import Image from 'next/image';

// Third-party packages
import { useTranslation } from 'react-i18next';
import { toSentenceCase } from 'utils/textConverter';

// PropTypes
type ResultNotAvailableProps = {
  title?: string;
  content1?: string;
  content2?: string;
  talentSearch?: boolean;
  isTable?: boolean;
};

export default function ResultNotAvailiable(
  props: Readonly<ResultNotAvailableProps>
) {
  /** props - states */
  const {
    title,
    content1,
    content2,
    talentSearch = false,
    isTable = false,
  } = props;

  /** third-party hook */
  const { t } = useTranslation('common');

  return (
    <div className='flex flex-col items-center text-bodyL_medium py-10'>
      <Image
        alt='assessment-empty'
        src={`${
          isTable
            ? '/app/images-jp/emptyStateTable.svg'
            : '/app/images-jp/emptyState.svg'
        }`}
        height={113}
        width={194}
      />

      <div className='space-y-1 pt-6'>
        <h3 className='text-bodyS_bold text-grayscale_900 font-bold text-center'>
          {toSentenceCase(title) ?? t('resultNotAvailiable.title')}
        </h3>
        <div className='text-center max-w-[420px] mx-auto text-grayscale_700'>
          <p className='text-label_regular font-normal'>
            {content1 ?? t('resultNotAvailiable.cont1')}
          </p>
          <p
            className={`${
              content2 ? 'block text-label_regular font-normal ' : 'hidden'
            }`}
          >
            {content2 ?? t('resultNotAvailiable.cont2')}
          </p>
        </div>
      </div>
    </div>
  );
}
