import './Responses.css'

const Responses = (props) => {
    const {response} = props
    console.log(response)
    if(response){
        return (
            <ul>
                {Object.entries(response).map(([key,value]) => 
                    <li key={key}>{key} : {value.toString()}</li>
                )}
            </ul>
        )
    }
    else{
        return <div/>
    } 
}

export default Responses;