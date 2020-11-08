import React from 'react';
import Editor from './Editor';
import './app.css';

class App extends React.Component{
  state={
    html:'',
    css:'',
    js:''
  }

  setHtml=(value)=>{
    this.setState({html:value})
  }

  setCss=(value)=>{
    this.setState({css:value})
  }

  setJs=(value)=>{
    this.setState({js:value})
  }

  render(){
    const srcDoc=`
      <html>
        <body>${this.state.html}</body>
        <style>${this.state.css}</style>
        <script>${this.state.js}</script>
      </html>
    `
    return (
      <>
        <div className='topcode'>
          <Editor language='xml' displayname='HTML' onChange={this.setHtml} value={this.state.html}/>
          <Editor language='css' displayname='CSS' onChange={this.setCss} value={this.state.css}/>
          <Editor language='js' displayname='JAVASCRIPT' onChange={this.setJs} value={this.state.js}/>
        </div>
        <iframe 
          className='code-output'
          srcDoc={srcDoc} 
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          color='black'
        />
      </>
    );
  }
}

export default App;
