interface IToolTipProps {
  title?: string;
  titleColor?: string;
  text?: string;
  textColor?: string;
  bgColor?: string;
}
export default function ToolTip(props: IToolTipProps) {
  const {
    title,
    text,
    titleColor = '#000000',
    textColor = '#000000',
    bgColor = '#FFFFFF',
  } = props;
  return (
    <div
      className='border border-grayscale_200 !rounded tooltiptext tooltip !p-4 !text-left !w-[196px]'
      style={{ backgroundColor: bgColor }}
    >
      {title && (
        <div
          style={{ color: titleColor }}
          className='font-poppins text-label_semibold pb-2 normal-case'
        >
          {title}
        </div>
      )}
      <div style={{ color: textColor }} className='text-caption_medium'>
        {text}
      </div>
    </div>
  );
}
