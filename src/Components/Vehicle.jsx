import Students from "./Students";
function Car(props){
    return <p>The name of manufacturer is {props.name} and the model is {props.model}</p>;

}

function Bike(){
    return <h1>Bike</h1>
}   

function Train(){
    return <h1>Train</h1>
}   

function AllTypes() {
    return (
        <div>
            <Bike />
            <Train />
            <Students />
        </div>
    );
}
export {Car, Bike, Train, AllTypes};

// functional component
