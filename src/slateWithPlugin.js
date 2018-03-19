import Plain from 'slate-plain-serializer'
import { Editor } from 'slate-react'

import React from 'react'
import CollapseOnEscape from 'slate-collapse-on-escape'
import SoftBreak from 'slate-soft-break'

const LetterCount = () => {
  return {
    renderEditor(props, editor) {
      return (
        <div>
          <div>{props.children}</div>
          <span className="letter-counter">
            Letter Count: {props.value.document.text.length}
          </span>
        </div>
      )
    },
  }
}

const plugins = [CollapseOnEscape(), SoftBreak(), LetterCount()]

class DemoPluginEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      value: Plain.deserialize('Hei web chapter!'),
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(change){
    this.setState({ value: change.value })
  }
  render() {
    return (
      <div className="editor" style={{width: '100%', height: '60vh', backgroundColor: 'white', border: '2px solid pink', textAlign: 'left', padding: '1rem'}}>
        <Editor
          placeholder="Wow this is empty :o"
          plugins={plugins}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default DemoPluginEditor;
