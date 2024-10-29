import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style"
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Section } from "../../Components/Section";
import { ButtonText } from "../../Components/ButtonText";
import { Note } from "../../Components/Note";
import { IoExitOutline } from "react-icons/io5";



export function Home() {

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
                {/* <Section title="Minhas Notas">
                    <Note data={{
                        title: "React",
                        tags: [
                            { id: "1", name: "react" },
                            { id: "2", name: "Node" }
                        ]
                    }} />
                </Section> */}
            </Content>

            <NewNote to="/new">
            <IoExitOutline />
                Desconectar
            </NewNote>
        </Container>
    );
}