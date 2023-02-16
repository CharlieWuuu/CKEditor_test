import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'; // 斷行 <br>
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

// 文字自動格式化
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';

// 文字自動轉成正確符號
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

// 基本文字樣式
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'; // 粗體
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'; // 斜體
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'; // 底線
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'; // 刪除線
import Code from '@ckeditor/ckeditor5-basic-styles/src/code'; // 程式碼
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript'; // 下標
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'; // 上標

// 縮排
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';

// 塊狀引用
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';

// 塊狀程式碼
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';

// 文件標題
import Title from '@ckeditor/ckeditor5-heading/src/title';

// 尋找與取代
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';

// 字體
import Font from '@ckeditor/ckeditor5-font/src/font';

// 支援 HTML 格式，要搭配 source editing 一起使用
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';

// 調整標題字級
import Heading from '@ckeditor/ckeditor5-heading/src/heading';

// 螢光筆
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

// 水平線
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';

// 遷入 html
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';

// 圖片
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'; // 圖片自己的 toolbar
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'; // 不知道
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'; // 不知道
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'; // 調整圖片大小
import ImageResizeEditing from '@ckeditor/ckeditor5-image/src/imageresize/imageresizeediting'; // 不知道
import ImageResizeHandles from '@ckeditor/ckeditor5-image/src/imageresize/imageresizehandles'; // 不知道
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage'; // 圖片加上超連結
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'; // 上傳圖片
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter'; // 上傳圖片到前端
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert'; // 用網址加入圖片
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage'; // 用網址自動加入圖片

// 清單
import List from '@ckeditor/ckeditor5-list/src/list'; // 一般清單
import TodoList from '@ckeditor/ckeditor5-list/src/todolist'; // checkbox

// 嵌入多媒體
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';

// tag 別人
import Mention from '@ckeditor/ckeditor5-mention/src/mention';

// 分頁
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';

// 從 office 貼上
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';

// 拖拉
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';

// 清除文字格式
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';

// 全選
import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall';

// 表格
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';

// 文字對齊
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

// 上下一步
import Undo from '@ckeditor/ckeditor5-undo/src/undo';

ClassicEditor.create(document.querySelector('#editor'), {
  placeholder: '在這裡輸入文字，送出後就會出現在下方網頁中！',
  plugins: [
    Essentials,
    Paragraph,
    Autoformat,
    TextTransformation,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Code,
    Subscript,
    Superscript,
    Indent,
    IndentBlock,
    BlockQuote,
    CodeBlock,
    Title,
    FindAndReplace,
    Font,
    SourceEditing,
    GeneralHtmlSupport,
    Heading,
    Highlight,
    HorizontalLine,
    HtmlEmbed,
    Image,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageResize,
    LinkImage,
    ImageResizeEditing,
    ImageResizeHandles,
    ImageUpload,
    Base64UploadAdapter,
    ImageInsert,
    AutoImage,
    List,
    TodoList,
    MediaEmbed,
    Mention,
    PageBreak,
    PasteFromOffice,
    Clipboard,
    RemoveFormat,
    SelectAll,
    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    TableColumnResize,
    Alignment,
    Undo,
  ],
  toolbar: {
    items: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'code',
      'subscript',
      'superscript',
      '|',
      'outdent',
      'indent',
      '|',
      'blockQuote',
      '|',
      'codeBlock',
      '|',
      'findAndReplace',
      '|',
      'fontSize',
      'fontFamily',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'sourceEditing',
      '|',
      'heading',
      '|',
      'highlight',
      '|',
      'horizontalLine',
      '|',
      'htmlEmbed',
      '|',
      'insertImage',
      '|',
      'link',
      '|',
      'bulletedList',
      'numberedList',
      'todoList',
      '|',
      'mediaEmbed',
      '|',
      'pageBreak',
      '|',
      'removeFormat',
      '|',
      'selectAll',
      '|',
      'insertTable',
      '|',
      'alignment',
      '|',
      'undo',
      'redo',
    ],
    shouldNotGroupWhenFull: true,
  },
  htmlSupport: {
    allow: [
      // Enables plain <div> elements.
      {
        name: 'div',
      },

      // Enables plain <div>, <section> and <article> elements.
      {
        name: /^(div|section|article)$/,
      },

      // Enables <div>s with all inline styles (but no other attributes).
      {
        name: 'div',
        styles: true,
      },

      // Enables <div>s with foo and bar classes.
      {
        name: 'div',
        classes: ['foo', 'bar'],
      },

      // Adds support for `foo` and `bar` classes to the already supported
      // <p> elements (those are enabled by the dedicated paragraph feature).
      {
        name: 'p',
        classes: ['foo', 'bar'],
      },

      // Enables <div>s with foo="true" attribute and bar attribute that
      // can accept any value (boolean `true` value works as an asterisk).
      {
        name: 'div',
        attributes: {
          foo: 'true',
          bar: true,
        },
      },

      // Adds support for style="color: *" to the already supported
      // <p> and <h2-h4> elements.
      {
        name: /^(p|h[2-4])$/,
        styles: { color: true },
      },
    ],
  },
  image: {
    toolbar: [
      'imageStyle:block',
      'imageStyle:side',
      '|',
      'toggleImageCaption',
      'imageTextAlternative',
      '|',
      'linkImage',
    ],
  },
  mention: {
    feeds: [
      {
        marker: '@',
        feed: ['@Roger', '@Jake', '@Angel', '@Percy', '@Charlie'],
        minimumCharacters: 1,
      },
    ],
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties',
    ],
  },
  language: 'zh',
})
  .then((editor) => {
    window.editor = editor;
    console.log('Editor was initialized', editor);
  })
  .catch((error) => {
    console.error(error.stack);
  });
