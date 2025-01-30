import { useTypewriter } from '@/lib/hooks';
import { FC, useRef } from 'react';

type TypewriterProps = {
  className?: string;
  text?: string;
  speed?: number;
  typing?: boolean;
};

const Typewriter: FC<TypewriterProps> = ({
  className,
  text = '',
  speed = 40,
  typing = true,
}) => {
  const { displayedText, typing: isTyping } = useTypewriter(
    text,
    speed,
    typing
  );

  return (
    <p className={className}>
      {displayedText}
      {isTyping && <span className='animate-blink'>|</span>}
    </p>
  );
};

export default Typewriter;

// For your specific use case in TypeWriterWithWord component
type TypeWriterWithWordProps = {
  content: string;
  speed?: number;
};

export const TypeWriterWithWord: FC<TypeWriterWithWordProps> = ({
  content,
  speed = 50,
}) => {
  const contentRef = useRef(content);

  // If content hasn't changed, use the initial content from ref
  const textToType =
    contentRef.current === content ? contentRef.current : content;

  return (
    <div className='text-label_medium text-grayscale_900'>
      <Typewriter text={textToType} speed={speed} />
    </div>
  );
};
