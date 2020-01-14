import React from 'react';
import './App.css';
import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.processor = unified()
      .use(markdown)
      .use(remark2rehype)
      .use(rehype2react, {createElement: React.createElement});

    this.state = {
      text: '### Header 1\n\n### Header 2\nA description',
    };
  }

  onChange(ev) {
    if (ev.target.value !== this.state.text) {
      this.setState({text: ev.target.value});
    }
  }

  render() {
    const rendered = this.processor.processSync(this.state.text).contents;
    return (
      <div>
        <textarea value={this.state.text} onChange={ev => this.onChange(ev)} />
        <div id="preview">{rendered}</div>
      </div>
    );
  }
}
