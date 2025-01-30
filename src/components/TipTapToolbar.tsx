'use client';
// Standard packages
import { FC, useCallback } from 'react';

// Third-party packages
import { Editor } from '@tiptap/react';
import clsx from 'clsx';

// Custom pacakges
import {
  AlignLeftIcon,
  BoldIcon,
  BulletListIcon,
  ItalicsIcon,
  NumberListIcon,
} from '@/icons';
import { UnderlineIcon } from '@/icons/UnderlineIcon';

// PropTypes
type TipTapToolbarProps = {
  editor: Editor;
};

const TipTapToolbar: FC<TipTapToolbarProps> = (props: TipTapToolbarProps) => {
  const { editor } = props;

  const addImage = useCallback(() => {
    const url = window.prompt('이미지 URL을 입력해주세요.');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes('link').href;
    const url = window.prompt('링크 URL을 입력해주세요.', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className='inline-flex flex-wrap gap-4 px-4 py-2 select-none'>
      {/* 헤더 포매팅 */}
      {/* <H1Icon
        className={clsx('icon', {
          'text-primary': editor.isActive('heading', { level: 1 }),
        })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      />
      <H2Icon
        className={clsx('icon', {
          'text-primary': editor.isActive('heading', { level: 2 }),
        })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      /> */}
      <BoldIcon
        className={clsx('icon', {
          'text-inherit !bg-grayscale_600 !bg-opacity-[16%]':
            editor.isActive('bold'),
        })}
        onClick={() => editor.chain().focus().toggleBold().run()}
      />
      <ItalicsIcon
        className={clsx('icon', {
          ' !bg-grayscale_600 !bg-opacity-[16%]': editor.isActive('italic'),
        })}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />
      <UnderlineIcon
        className={clsx('icon', {
          ' !bg-grayscale_600 !bg-opacity-[16%] ': editor.isActive('underline'),
        })}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      />

      {/* 리스트 포매팅 */}
      <NumberListIcon
        className={clsx('icon', {
          ' !bg-grayscale_600 !bg-opacity-[16%]':
            editor.isActive('orderedList'),
        })}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      />
      <BulletListIcon
        className={clsx('icon', {
          ' !bg-grayscale_600 !bg-opacity-[16%]': editor.isActive('bulletList'),
        })}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      />
      {/* 텍스트 포매팅 */}

      {/* <div className='border-l' /> */}
      {/* 코드 포매팅 */}
      {/* <CodeIcon
        className={clsx('icon', {
          '': editor.isActive('code'),
        })}
        onClick={() => editor.chain().focus().toggleCode().run()}
      /> */}
      {/* <CodeBlockIcon
        className={clsx('icon', {
          '': editor.isActive('codeBlock'),
        })}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      /> */}
      {/* 이미지, 나눔줄 포매팅 */}
      {/* <div className='border-l' /> */}
      {/* <ImageIcon className='icon' onClick={addImage} /> */}
      {/* <HorizontalRuleIcon
        className='icon'
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      /> */}
      {/* 링크 포매팅 */}
      {/* <div className='border-l' /> */}
      {/* <LinkAddIcon
        className={clsx('icon', {
          '': editor.isActive('link'),
        })}
        onClick={setLink}
      /> */}
      {/* <LinkRemoveIcon
        className={clsx('icon', {
          '': editor.isActive('link'),
        })}
        onClick={() => editor.chain().focus().unsetLink().run()}
      /> */}
      {/* 정렬 포매팅 */}
      <AlignLeftIcon
        className={clsx('icon', {
          ' !bg-grayscale_600 !bg-opacity-[16%]': editor.isActive('left'),
        })}
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      />
      {/* <AlignCenterIcon
        className={clsx('icon', {
          '': editor.isActive('center'),
        })}
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      />
      <AlignRightIcon
        className={clsx('icon', {
          '': editor.isActive('right'),
        })}
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      /> */}
    </div>
  );
};

export default TipTapToolbar;
