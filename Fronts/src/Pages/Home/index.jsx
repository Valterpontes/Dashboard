import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style"
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Section } from "../../Components/Section";
import { ButtonText } from "../../Components/ButtonText";
import { Note } from "../../Components/Note";
import { IoExitOutline } from "react-icons/io5";
import { useAuth } from "../../Hooks/auth.jsx";
import { useState } from "react";
import { Button } from "../../Components/Boxe/index.jsx";



export function Home() {

    const [checked, setChecked] = useState(false)

    const { signOut } = useAuth()

    return (
        <Container>
            <Brand>
                <h1>SmartSync</h1>
            </Brand>

            <Header />

            <Menu>
                <li>

                    <ButtonText title="Dispositivos" isActive />
                </li>

                { <li>
                    <ButtonText title="Energia" />
                </li>
/*
                <li>
                    <ButtonText title="Node" />
                </li> */}
            </Menu>

            {/* <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search> */}

            <Content>
                <Button title="Bloco 1" />
                <Button title="Bloco 2" />
                <Button title="Bloco 3" />
            </Content>

            <NewNote onClick={signOut}>
            <IoExitOutline />
                Desconectar
            </NewNote>
        </Container>
    );
}