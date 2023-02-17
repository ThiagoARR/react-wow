import{
    Search,
    Searchbox,
    Topbarbox,
    IconBox,
    AccountOptBox,
    AccountBox,
    LoginButton,
    LoginButtonBox,
    Button
} from './style'
import ContextManipulation from '../../Context/ContexAPI';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box } from '@mui/system';
import { useContext } from 'react';

const Topbar = () => {
    const {setSidebarVisible, sidebarVisible} = useContext(ContextManipulation);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible)
        console.log(sidebarVisible)
    }

    return(
        <Topbarbox sidebarVisible={sidebarVisible}>
            
            <Searchbox>
                <Box sx={{color: 'white', display: 'flex', marginRight: '15px'}} onClick={toggleSidebar}>
                    <MenuOutlinedIcon sx={{fontSize: '30px'}}/>
                </Box>
                <Search placeholder='Search'/>
                <IconBox>
                    <SearchOutlinedIcon />
                </IconBox>
            </Searchbox>

            <AccountBox>
                <AccountOptBox>
                    <PersonOutlineOutlinedIcon />
                </AccountOptBox>
                <AccountOptBox>
                    <SettingsOutlinedIcon />
                </AccountOptBox>
                <AccountOptBox>
                    <NotificationsNoneOutlinedIcon />
                </AccountOptBox>
                <LoginButtonBox>
                    <LoginButton>
                        Login
                    </LoginButton>
                </LoginButtonBox>
            </AccountBox>
        </Topbarbox>
    )
}

export default Topbar;