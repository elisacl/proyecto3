import { useState } from "react";
import Navbar from "./navbar/Navbar";
import UserList from "./main/UserList";
import Footer from "./footer/Footer";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
        <Navbar />
        <UserList />
        <Footer />
        </>
    )
}

export default App

