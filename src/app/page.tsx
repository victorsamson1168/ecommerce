'use client';
import DashBoardNav from '@/components/DashBoardNav';

type Props = {};

export default function MainPage() {
  return (
    <DashBoardNav currentPath='talentSearch'>
      <div className='max-w-[1072px] flex flex-col mx-auto justify-center min-h-full px-16 py-10 '>
        {/* <MainTalent
          query={talentQuery}
          setQuery={setTalentQuery}
          filterState={filterState}
          setFilterState={setFilterState}
          setFilterOpen={setFilterOpen}
          filterOpen={filterOpen}
        /> */}
        {/* <LoginRedirectModal /> */}
        hello
      </div>
      {/* <HomeFooter /> */}
    </DashBoardNav>
  );
}
