const Method = (props) => {
    const {method, setMethod} = props
    const METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    return (
      <select 
        className='requestsLineChildren'
        onChange={(e) => setMethod(e)} 
        value={method}>
          {METHODS.map((method) => <option key={method} value={method}> {method} </option>)}
       </select>
    )
  }
  
  const Path = (props) => {
    const {url, setURL} = props
    return (
        <input 
          className='requestsLineChildren'
          onChange={(e) => setURL(e.target.value)}
          value={url}
          placeholder='Enter Request URL'/>
    )
  }
  
  const Send = (props) => {
    const {requestParams, setResponseMethod} = props
    return (
      <button
        onClick={() => setResponseMethod(requestParams)}
        className='requestsLineChildren'>
          Send
      </button>
    )
  }
  
  const RequestsLine = (props) => {
    const {requestParams, requestParamsSetters, setResponseMethod} = props
    const {url, method} = requestParams  
    const {setURL, setMethod} = requestParamsSetters
    return (
      <div className='requestsLine'>
        <Method method={method} setMethod={setMethod}/>
        <Path url={url} setURL={setURL}/>
        <Send requestParams={requestParams} setResponseMethod={setResponseMethod} />
      </div>
    );
  }
  

  export default RequestsLine;