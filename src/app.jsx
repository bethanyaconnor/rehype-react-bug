import React from 'react';
import ReactDOM from 'react-dom';
import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';

var processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, {createElement: React.createElement});

export class RehypeApp extends React.Component {
  constructor() {
    super();
    this.state = {text: '### Header 1\n\n### Header 2\nA description'};
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    this.setState({text: ev.target.value});
  }

  render() {
    const rendered = processor.processSync(this.state.text).contents;
    return (
      <div>
        <textarea value={this.state.text} onChange={this.onChange} />
        <div id="preview">
          {rendered}
        </div>
      </div>
    );
  }
}
