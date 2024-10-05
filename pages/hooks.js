import Link from "next/link";
import { useState } from "react";

export default function Hooks() {

    const [state, setState] = useState();

    function handleOnChange(event) {
        setState(event.target.value)
    }

    return (
        <div>
            <Link href="/">Back To Home</Link>
            <br/>
            <input 
                onChange={handleOnChange}
                type="text" />
            <br/>
            <div style={{ width: 20, height: 20, background: state }}>
            </div>
            {state}
        </div>
    )

}