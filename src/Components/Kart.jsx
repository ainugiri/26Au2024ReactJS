import PDate from "./PDate";

function Kart(props){
    return(
        <div>
            <PDate date = {props.date}/>
            <h6>{props.pname}</h6>
            <p>Price: {props.price}</p>
            <p>Qty: {props.qty}</p>
            <p>Total: {props.price * props.qty}</p>
        </div>
    );
}

export default Kart;    