type skeletonProps = {
  num: number;
};
export default function Skeleton(props: Readonly<skeletonProps>) {
  const { num } = props;
  return Array(num)
    .fill(0)
    .map((el, index) => {
      const key = `${index}`;
      return (
        <div key={key} className='w-11/12 md:w-full'>
          <div className='flex flex-col bg-white w-full gap-y-2'>
            <span className='w-1/2 bg-gray-200 h-3 md:h-3 rounded-full animate-pulse' />
            <span className='w-2/3 bg-gray-200 h-3 md:h-3 rounded-full animate-pulse' />
            <span className='w-2/5 bg-gray-200 h-3.5 md:h-3 rounded-full animate-pulse' />
            <span className='w-3/5 bg-gray-200 h-3 md:h-3 rounded-full animate-pulse' />
            <span className='w-2/3 bg-gray-200 h-3 md:h-3 rounded-full animate-pulse' />
            <span className='w-3/4 bg-gray-200 h-3 md:h-3 rounded-full animate-pulse' />
          </div>
        </div>
      );
    });
}
