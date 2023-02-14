import{
    Search,
    Searchbox,
    Topbarbox,
    IconBox,
    AccountOptBox,
    AccountBox,
    LoginButton,
    LoginButtonBox
} from './style'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Topbar = () => {
    return(
        <Topbarbox>
            <Searchbox>
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