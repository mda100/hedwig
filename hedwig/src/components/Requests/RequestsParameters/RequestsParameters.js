import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


const RequestsParamsTextBox = (props) => {
    const {setter} = props
    return (
        <input className="requestsParamsTextBox" onChange={(e) => setter(e)}/>
    )
}
const RequestsParams= (props) => {
  const {setMode, setCache, setCredentials, setHeaders, setRedirect, setReferrerPolicy, setBody} = props.requestParamsSetters
    return (
      <Router className='requestsParams'>
          <div>
        <nav>
          <ul>
            <li>
              <Link to="/mode">Mode</Link>
            </li>
            <li>
              <Link to="/cache">Cache</Link>
            </li>
            <li>
              <Link to="/credentials">Credentials</Link>
            </li>
            <li>
              <Link to="/headers">Headers</Link>
            </li>
            <li>
              <Link to="/redirect">Redirect</Link>
            </li>
            <li>
              <Link to="/referrerPolicy">Referrer Policy</Link>
            </li>
            <li>
              <Link to="/body">Body</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/mode" element={<RequestsParamsTextBox setter={setMode}/>}/>
          <Route path="/cache" element={<RequestsParamsTextBox setter={setCache}/>}/>
          <Route path="/credentials" element={<RequestsParamsTextBox setter={setCredentials}/>}/>
          <Route path="/headers" element={<RequestsParamsTextBox setter={setHeaders}/>}/>
          <Route path="/redirect" element={<RequestsParamsTextBox setter={setRedirect}/>}/>
          <Route path="/referrerPolicy" element={<RequestsParamsTextBox setter={setReferrerPolicy}/>}/>
          <Route path="/body" element={<RequestsParamsTextBox setter={setBody}/>}/>
        </Routes>
      </div>
      </Router>
    );
  }

export default RequestsParams;