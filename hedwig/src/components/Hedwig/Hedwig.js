import './Hedwig.css';
import { useState } from 'react';
import Requests from '../Requests/Requests';
import Responses from '../Responses/Responses';

// 1. clean up and simplify the code, organize into folders
// 2. error handle extensively
// 3. add drop downs for the params, input for headers and bodies
// 4. test with a variety of apis, iterate as needed
// 5. get rid of all styling (brutalist functionality)
// 6. once working well, port into React Native
// 7. style style style
// 8. add other UI niceities 
// 9. deploy to android store and apple store and share in interviews ! 


const requestsMethod = async (requestParams) => {
  const {url, method, mode, cache, credentials, headers, redirect, referrerPolicy, body} = requestParams
  const response = await fetch(url, {
    method: method, 
    mode: mode, // no-cors, *cors, same-origin
    cache: cache, // *default, no-cache, reload, force-cache, only-if-cached
    credentials: credentials, // include, *same-origin, omit
    headers: headers, //  {'Content-Type': 'application/x-www-form-urlencoded',}
    redirect: redirect, // manual, *follow, error
    referrerPolicy: referrerPolicy, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: body // body data type must match "Content-Type" header
  });
  return response.json();
}

const Hedwig = (props) => {
// most of these should be drop down
// body paste
// and headers ?? -> clean up this interface
  const [url, setURL] = useState('')
  const [method, setMethod] = useState('GET')
  const [mode, setMode] = useState('cors')
  const [cache, setCache] = useState('no-cache')
  const [credentials, setCredentials] = useState('same-origin')
  const [redirect, setRedirect] = useState('follow')
  const [referrerPolicy, setReferrerPolicy] = useState('no-referrer')
  const [headers, setHeaders] = useState({
    'Content-Type': 'application/json'
  })
  const [body, setBody] = useState(null)
  const [response, setResponse] = useState(null)
  const setResponseMethod = async (requestParams) => {
    try {
      let response = await requestsMethod(requestParams)
      setResponse(response)
    }
    catch {
      console.log('requests method failed - possibly invalid url')
    }
  }

  const requestParams = {
    url: url,
    method: method,
    mode: mode,
    cache: cache,
    headers: headers,
    credentials: credentials,
    redirect: redirect,
    referrerPolicy: referrerPolicy,
    body: body,
  }

  const requestParamsSetters = {
    setURL: setURL,
    setMethod: setMethod,
    setMode: setMode,
    setCache: setCache,
    setHeaders: setHeaders,
    setCredentials: setCredentials,
    setRedirect: setRedirect,
    setReferrerPolicy: setReferrerPolicy,
    setBody: setBody,
  }

  return (
    <div className='hedwigContainer'>
      <Requests requestParams={requestParams} requestParamsSetters={requestParamsSetters} setResponseMethod={setResponseMethod}/>
      <Responses response={response}/>
    </div>
  );

}

export default Hedwig;
