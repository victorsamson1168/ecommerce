'use client';
// Standard packages
import { FC, useEffect } from 'react';

// Third-party packages
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import CodeBlock from '@tiptap/extension-code-block';
import Heading from '@tiptap/extension-heading';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import OrderedList from '@tiptap/extension-ordered-list';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { EditorContent, mergeAttributes, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import cpp from 'highlight.js/lib/languages/cpp';
import java from 'highlight.js/lib/languages/java';
import python from 'highlight.js/lib/languages/python';
import typescript from 'highlight.js/lib/languages/typescript';
import { common, createLowlight } from 'lowlight';

// Custom pacakges
import { useTranslation } from 'react-i18next';
import { ErrorIcon } from './Icons';
import TipTapToolbar from './TipTapToolbar';

// PropTypes
type TipTapEditorProps = {
  /** If present, apply additional classNames to the root */
  className?: string;
  /** Label of the editor */
  label?: string;
  /** Placeholder of the editor */
  placeholder?: string;
  /** Value of the editor */
  value?: any;
  /** Callback triggered on change of the value */
  onChange: (value: any) => void;

  pasteValue?: any;

  requiredText?: string;

  required?: boolean;

  editorClassName?: string;
};

const TipTapEditor: FC<TipTapEditorProps> = (props: TipTapEditorProps) => {
  const { t } = useTranslation();

  /** props - states */
  const {
    className,
    label,
    placeholder,
    value,
    pasteValue,
    editorClassName,
    required,
    requiredText = t('required', {
      ns: 'common',
    }),
  } = props;

  /** props - actions */
  const { onChange } = props;

  /** consts */
  const lowlight = createLowlight(common);
  lowlight.register({ cpp });
  lowlight.register({ java });
  lowlight.register({ python });
  lowlight.register({ typescript });

  /** third-party hooks */
  const editor = useEditor({
    content: value,
    editorProps: {
      attributes: {
        class: 'outline-0 min-h-[100px]',
      },
    },

    extensions: [
      StarterKit.configure({
        heading: false,
        bulletList: false,
        orderedList: false,
        horizontalRule: false,
      }),
      Placeholder.configure({
        placeholder,
      }),
      Heading.extend({
        levels: [1, 2, 3],
        renderHTML({ node, HTMLAttributes }) {
          const { levels } = Heading.options;
          const level: number = levels.includes(node.attrs.level)
            ? node.attrs.level
            : levels[0];
          const classes: { [index: number]: string } = {
            1: 'text-h2_bold',
            2: 'text-h3_bold',
            3: 'text-h4_bold',
          };
          return [
            `h${level}`,
            mergeAttributes(Heading.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]}`,
            }),
            0,
          ];
        },
      }),
      Underline.configure({
        HTMLAttributes: {
          class: 'underline',
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'list-disc pl-4',
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'list-decimal pl-4',
        },
      }),
      HorizontalRule.configure({
        HTMLAttributes: {
          class: 'my-2 h-0.5',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'hover:underline text-primary cursor-pointer',
        },
      }),
      Code.configure({
        HTMLAttributes: {
          class: 'bg-[#F6F7F9] text-[#22272F] px-1 py-0.5 rounded-[4px]',
        },
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class: 'bg-[#F6F7F9] text-[#22272F] p-6 rounded-[5px]',
        },
      }),
      // CodeBlockLowLight.configure({
      //   lowlight: lowlight,
      //   HTMLAttributes: {
      //     class: 'bg-grayscale_900 rounded p-4 my-2 text-grayscale_100',
      //   },
      // }),
      Image.configure({
        inline: true,
        allowBase64: true,
        HTMLAttributes: {
          class: 'block mx-auto',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right'],
      }),
    ],
    onUpdate: ({ editor }) => onChange(editor?.getHTML()),
  });

  useEffect(() => {
    if (pasteValue) {
      editor?.chain().focus().insertContent(pasteValue?.value).run();
    }
  }, [pasteValue]);

  if (!editor) {
    return null;
  }

  const pasteTextAtCursor = (text: string) => {
    if (editor) {
      editor
        .chain()
        .focus() // Ensures the editor is focused
        .insertContent(text) // Inserts content at the current position
        .run();
    }
  };

  return (
    <div className={className}>
      {label && <div className='pb-2 text-label_medium'>{label}</div>}
      <div className={`border rounded ${required ? '!border-negative' : ''}`}>
        <EditorContent
          className={`p-4 text-bodyS_regular text-grayscale_900 ${editorClassName}`}
          editor={editor}
        />
        <hr />

        <TipTapToolbar editor={editor} />
      </div>
      {required && (
        <div className='flex gap-x-1 pt-2 items-center'>
          <ErrorIcon />

          <span className='text-caption_regular text-negative'>
            {requiredText}
          </span>
        </div>
      )}
    </div>
  );
};

export default TipTapEditor;

('<h1 class="text-h2_bold">안녕하세요</h1><h2 class="text-h3_bold"><a target="_blank" rel="noopener noreferrer nofollow" class="hover:underline text-primary cursor-pointer" href="http://localhost:3000/questions/664978aa3e610c8c2b969940">안녕하세요 2번 문제입니다.</a></h2><p></p><ol class="list-decimal pl-4"><li><p>첫번째</p></li><li><p>두번째</p></li><li><p>세번째</p></li></ol><p></p><ul class="list-disc pl-4"><li><p><strong><em>첫번째</em></strong></p></li><li><p style="text-align: center">두번째</p></li><li><p style="text-align: right">세번째</p></li></ul><hr class="my-2 h-0.5"><p></p><pre class="bg-grayscale_800 rounded p-4 my-2 text-grayscale_200"><code class="language-javascript">console.log()</code></pre><pre class="bg-grayscale_800 rounded p-4 my-2 text-grayscale_200"><code class="language-typescript">console.log(</code></pre><pre class="bg-grayscale_800 rounded p-4 my-2 text-grayscale_200"><code>console.log(</code></pre><pre class="bg-grayscale_800 rounded p-4 my-2 text-grayscale_200"><code class="language-cpp">void main()</code></pre><pre class="bg-grayscale_800 rounded p-4 my-2 text-grayscale_200"><code class="language-java">public static void main(String args[]){\n\n}</code></pre><pre class="bg-grayscale_800 rounded p-4 my-2 text-grayscale_200"><code class="language-python">def rubn</code></pre><pre class="bg-grayscale_800 rounded p-4 my-2 text-grayscale_200"><code class="language-python">def run():\n    print(1)</code></pre><pre class="bg-grayscale_800 rounded p-4 my-2 text-grayscale_200"><code>hello world this is janghoon Lee speaking\n\n</code></pre><h2 class="text-h3_bold">안녕하세요 2번 문제입니다.</h2><hr class="my-2 h-0.5"><p><code class="bg-grayscale_200 text-negative px-1 py-0.5 rounded-md">2번 문제</code>는 활용을 잘 할 수 있을까가 문제이다.</p><p></p><p></p><p></p><p></p><p></p><p><code class="bg-grayscale_200 text-negative px-1 py-0.5 rounded-md">hi</code> thi</p><hr class="my-2 h-0.5">');
