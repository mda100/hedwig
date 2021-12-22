import './Requests.css'
import RequestsParams from './RequestsParameters/RequestsParameters'
import RequestsLine from './RequestsLine/RequestsLine'

  
  const Requests = (props) => {
    const {requestParams, requestParamsSetters, setResponseMethod} = props
    return (
      <div className='requests'>
        <RequestsLine requestParams={requestParams} requestParamsSetters={requestParamsSetters} setResponseMethod={setResponseMethod}/>
        <RequestsParams requestParams={requestParams} requestParamsSetters={requestParamsSetters}/>
      </div>
    )
  }

  export default Requests;