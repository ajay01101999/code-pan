import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import './app.css';
import { useState } from 'react';

const Editor = (props) =>{
    const [size, setSize]=useState(true);
    const { language, displayname, value, onChange } = props;

    function handleChange(editor, data, value){
        onChange(value);
    }
    const resize=()=>{
        setSize(!size);
        console.log(size);
    }
    function file(event){
        const reader = new FileReader();
        reader.readAsText(event.target.files[0]);
        reader.onload = () =>{
            onChange(reader.result);
            console.log(reader.result);
        }
        console.log(event.target.files[0].name)
    }
    return (
        <div className={size?'editor-top': 'editor-small'}>
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <span>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                            </svg>   OPEN FILE({language})  
                        </span>
                        <input style={{float:'right'}} type='file' accept={language==='xml'?'.html':'.'+language} onChange={(e)=>file(e)}/>
                    </div>
                </div>
                <nav class="navbar navbar-dark langtext">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <span>{displayname}</span>
                    <button className='resizer' onClick={resize}>
                        <svg viewBox="0 0 512 512" title="arrows-alt-h">
                        <path d="M377.941 169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568 0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97z" />
                        </svg>
                    </button>
                </nav>
            </div>
            <ControlledEditor 
                className='editor-area'
                onBeforeChange={handleChange}
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    );
};

export default Editor;