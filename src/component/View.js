import parse from 'html-react-parser'
export default function View(props){

    return(
       <div className="view">{parse(props.value)}</div>
    )
}