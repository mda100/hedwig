import { version } from 'react-dom/cjs/react-dom.development';
import './App.css';
import { Dropdown } from 'bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Form, { FormControl } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { useState } from 'react';


const requestsMethod = async (requestParams) => {
  const {url, method, mode, cache, credentials, headers, redirect, referrerPolicy, body} = requestParams
  const response = await fetch(url, {
    method: method, 
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    // headers: {
    //   'Content-Type': 'application/json'
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json();
}
const Method = (props) => {
  const {method, setMethod} = props
  const METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  return (
    <select 
      onChange={(e) => setMethod(e)} 
      value={method}>
        {METHODS.map((method) => <option value={method}> {method} </option>)}
     </select>
  )
}

const Path = (props) => {
  const {url, setURL} = props
  return (
    <Form>
      <input 
        onChange={(e) => setURL(e)}
        value={url}
        placeholder='Enter Request URL'/>
    </Form>
  )
}

const Send = (props) => {
  return (
    <Button onClick='sendRequest'>
      Send
    </Button>
  )
}

const RequestsLine = (props) => {  
  return (
    <div className='requestsLine'>
      <Method data={props}/>
      <Path data={props}/>
      <Send/>
    </div>
  );
}

const RequestsParams= (props) => {
  return (
    <div className='requestsParams'>
    </div>
  );
}

const Requests = (props) => {
  return (
    <div className='requests'>
      <RequestsLine data={props}/>
      <RequestsParams/>
    </div>
  )
}
const Responses = (props) => {
    const results = requestsMethod(props)
}

const Hedwig = (props) => {
  const [method, setMethod] = useState(0)
  const [url, setURL] = useState(0)
  const data = {
    'setURL': setURL,
    'setMethod': setMethod,
    'url': url,
    'method': method,
  }
  return (
    <div className='hedwigContainer'>
      <Requests data={data}/>
      <Responses data={data}/>
    </div>
  );

}

function App() {
  return <Hedwig/>
}

export default App;
