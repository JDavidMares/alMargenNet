var quill = new Quill('#editor-container', {
        modules: {
          toolbar: [
                [{ 'size': [] }],
                [ 'bold', 'italic', 'underline', 'strike' ],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'script': 'super' }, { 'script': 'sub' }],
                [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
                [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
                [ {'direction': 'rtl'}, { 'align': [] }],
                [ 'link', 'image', 'video', 'formula' ],
                [ 'clean' ]
              ]
        },
        placeholder: 'Compose an epic blog Oscar...',
        theme: 'snow'  // or 'bubble'
      });
