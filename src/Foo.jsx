import { Fragment, useState } from "react";

function Foo(props){
    const [msg, setMSG] = useState("fokiu el que lea ");
    return(
        <Fragment>
            <h1>{props.message}</h1>
            <p>Bienvenido {msg}</p>
        </Fragment>
    );
}

export default Foo;
