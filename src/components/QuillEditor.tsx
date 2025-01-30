// Standard packages
import dynamic from 'next/dynamic';
import { FC, useMemo, useRef } from 'react';

// Third-party packages
import 'react-quill/dist/quill.snow.css';
import { ErrorIcon } from './Icons';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// PropTypes
type QuillEditorProps = {
  /** If present, apply additional classNames to the root */
  className?: string;
  /** Label of the editor */
  label?: string;
  /** Placeholder of the editor */
  placeholder?: string;
  /** Value of the editor */
  value?: any;
  /** Callback triggered on change of the value */
  onChange?: (value: any) => void;
  /** Callback triggered on change of the image */
  onChangeImage?: (value: File) => void;
  /** custom editor max height */
  maxHeight?: any;
  /** required error */
  required?: boolean;
};

const QuillEditor: FC<QuillEditorProps> = (props: QuillEditorProps) => {
  /** props - states */
  const {
    className,
    label,
    placeholder,
    value,
    maxHeight = 'max-h-[400px]',
    required,
  } = props;
  /** props - actions */
  const { onChange, onChangeImage } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);

  /** custom handlers */
  // Quill Editor image change callback
  const handleImageChange = () => {
    const input = fileInputRef.current;

    if (input?.files && input.files.length > 0) {
      const imageFile = input.files[0];

      // Image change callback
      if (onChangeImage) {
        onChangeImage(imageFile);
      }
    }
  };

  // Quill image handler - virtual input hanlder
  const handleInsertImage = () => {
    const input = fileInputRef.current;
    if (input) {
      input.click();
    }
  };

  /** useMemo hooks */
  // Error fix : addRange(): The given range isn't in document.
  // Error reason: module all time rendering
  // https://velog.io/@cnffjd95/ReactQuill-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B8%B0%EB%A1%9D
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['bold', 'italic', 'underline'],
          ['link', 'code-block'],
          [{ image: 'Insert Image' }],
        ],
        handlers: {
          image: handleInsertImage,
        },
      },
    };
  }, []);
  return (
    <div className={className}>
      {label && <div className='pb-2 text-label_medium'>{label}</div>}

      <ReactQuill
        className={`font-inter flex flex-col-reverse bg-white ${
          required ? 'border-error' : 'border-grayscale_300'
        } border rounded gap-y-2  ${maxHeight} overflow-y-auto resize-none`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        modules={modules}
      />
      {required && (
        <div className='flex gap-x-1 mt-2'>
          <ErrorIcon />
          <span className='text-caption_regular text-negative'>
            This is a required field
          </span>
        </div>
      )}
      <input
        type='file'
        className='hidden'
        accept='image/jpg, image/webp, image/png, image/jpeg'
        ref={fileInputRef}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default QuillEditor;
