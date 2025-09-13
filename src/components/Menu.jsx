import { useContext } from "react"
import { Link } from "react-router"
import { AuthContext } from "./AuthProvider"

export default function Menu() {
    const { user } = useContext(AuthContext)
    return <ul>
        <Link to={"/"}>homepage</Link>
        <br />
        <Link to={"/signup"}>signup</Link>
        <br />
        {user == undefined ?
            <Link to={"/login"}>login</Link> :
            <>
            <Link to={"/logout"}>logout</Link>
            <p>logged in with {user.email} </p>
            </>
        }
    </ul>
}