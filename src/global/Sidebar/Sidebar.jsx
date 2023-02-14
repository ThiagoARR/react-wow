import {
    Sidebarbox,
    Logo,
    Menubox,
    Menuitem,
    MenuitemBox,
    Logobox
} from './style'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

const Sidebar = () => {
    return(
        <Sidebarbox>
            <Logobox>
                <Logo>
                </Logo>
            </Logobox>
            <Menubox>
                <MenuitemBox>
                    <HomeOutlinedIcon />
                    <Menuitem>Home</Menuitem>
                </MenuitemBox>

                <MenuitemBox>
                    <Groups2OutlinedIcon />
                    <Menuitem>Characters</Menuitem>
                </MenuitemBox>

                <MenuitemBox>
                    <TableViewOutlinedIcon />
                    <Menuitem>Raid</Menuitem>
                </MenuitemBox>

                <MenuitemBox>
                    <Diversity2OutlinedIcon />
                    <Menuitem>Mythic +</Menuitem>
                </MenuitemBox>

                <MenuitemBox>
                    <HttpsOutlinedIcon />
                    <Menuitem>Vault</Menuitem>
                </MenuitemBox>
            </Menubox>
        </Sidebarbox>
    )
}

export default Sidebar