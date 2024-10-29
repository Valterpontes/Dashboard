import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./style.js";
import { useAuth } from "../../Hooks/auth.jsx";

export function Header() {

    const { signOut } = useAuth()

    return(
        <Container>
            <Profile to="/profile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThz2AbtsmwWoRa3xTS5yUMeCXaIz6gHJQy1A&s" alt="Foto de Usuário" />

                <div>
                    <span>Bem vindo</span>
                    <strong>UniFG</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}