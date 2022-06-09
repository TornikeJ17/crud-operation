import {
    GlobalStyle,
    Container,
    Header
} from "./Styled/Styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom'
import { API } from "./components/api/api";
import Read from "./components/Read";
import Create from "./components/Create";
import Update from "./components/Update";

const App = () => {

    const [data, setData] = useState()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    const postData = (e) => {
        e.preventDefault()
        axios.post(` https://62989076de3d7eea3c6ab55d.mockapi.io/todoAPI/v1/inbox`, {
            firstName,
            lastName,
            email,
            checkbox
        })
    }


    useEffect(() => {

        const itemAPI = async () => {
            setData(await API())
        }
        itemAPI()

    }, [])
    return (
        <Container>
            <GlobalStyle />
            <Header>
                <h1>React CRUD Operations</h1>
            </Header>
            <Routes>
                <Route exact path={'/'} element={<Create data={data} />} />
                <Route exact path={'/read'} element={<Read data={data} setData={setData} />} />
                <Route path={'/update'} element={<Update data={data} />} />
            </Routes>
        </Container>
    )
}

export default App