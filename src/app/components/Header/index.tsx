import Link from 'next/link';
import { HeaderContainer, Logo, Menu } from '../Header/style';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Link href="/">
                <Logo src="LOGO_SUNO_BRASIL.svg" alt="Logo da loja" />
            </Link>

            <Menu>
                <ul>
                    <li>
                        HOME
                    </li>
                    <li>
                        QUEM SOMOS
                    </li>
                    <li>
                        SOLUÇÕES
                    </li>
                    <li>
                        SUNOTECH
                    </li>
                    <li>
                        CONTATO
                    </li>
                </ul>
            </Menu>
        </HeaderContainer>
    );
};

export default Header;