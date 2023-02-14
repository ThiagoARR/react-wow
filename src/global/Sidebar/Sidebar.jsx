import * as React from 'react';
import {Sidebarbox} from './style';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Box } from '@mui/system';
import {GiAngelWings, GiAngelOutfit} from 'react-icons/gi'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const chars = [
    {
        name: 'Silverlotus',
        level:'70',
        ilvl: '410',
        color: '#00FF98',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/104/98123624-avatar.jpg'
    },
    {
        name: 'Howster',
        level:'70',
        ilvl: '399',
        color: '#2459FF',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/246/98540790-avatar.jpg'
    },
    {
        name: 'Blurryfacce',
        level:'65',
        ilvl: '399',
        color: '#A330C9',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/17/153029393-avatar.jpg'
    },
    {
        name: 'Lothuialeth',
        level:'22',
        ilvl: '399',
        color: '#FFF469',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/215/161678039-avatar.jpg'
    },
    {
        name: 'Korthroz',
        level:'28',
        ilvl: '399',
        color: '#C79C6E',
        image: 'https://render.worldofwarcraft.com/us/character/stormrage/226/250912994-avatar.jpg'
    },
    {
        name: 'Aferion',
        level:'60',
        ilvl: '399',
        color: '#33937F',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/3/193860867-avatar.jpg'
    },
    {
        name: 'Trapfang',
        level:'70',
        ilvl: '399',
        color: '#FF7D0A',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/214/98237398-avatar.jpg'
    },
    {
        name: 'Khalondor',
        level:'61',
        ilvl: '399',
        color: '#69CCF0',
        image: 'https://render.worldofwarcraft.com/us/character/stormrage/18/247854610-avatar.jpg'
    },
    {
        name: 'Heartbeatz',
        level:'60',
        ilvl: '399',
        color: '#C41F3B',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/218/97829338-avatar.jpg'
    },
]

const Server = [
    {
        name: 'Azralon',
        time: '20H : 38M'
    },{
        name: 'Stormrage',
        time: '20H : 38M'
    }

]

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Sidebarbox>
        <List
        sx={{ width: '100%', maxWidth: 360, color: '#bbb'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
        >
        <ListItemButton onClick={handleClick} sx={{backgroundColor: '#1C2227', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopLeftRadius: '7px', borderTopRightRadius: '7px'}}>
            <ListItemDecorator>
                <PeopleAltIcon />
            </ListItemDecorator>
            <ListItemText primary="Characters" primaryTypographyProps={{fontSize: '13px', textAlign: 'center'}}  />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            {chars.map(e => {return(
                <ListItemButton sx={{backgroundColor: '#0c0e10'}}>
                    <ListItemAvatar>
                        <Avatar src={e.image} />
                    </ListItemAvatar>
                    <ListItemText primary={e.name} primaryTypographyProps={{fontSize: '13px'}} sx={{color: e.color}} />
                    <Box sx={{display: 'flex'}}>
                        <ListItemText primary={e.level+' lvl'} primaryTypographyProps={{fontSize: '13px'}} sx={{color: e.color}}/>
                        <ListItemText primary={e.ilvl+' ilvl'} primaryTypographyProps={{fontSize: '13px'}} sx={{color: e.color, marginLeft: '10px'}}/>
                    </Box>
                </ListItemButton>)
            })}
            
            </List>
        </Collapse>
        <Box sx={{display: 'flex', borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px', backgroundColor: '#1C2227'}}>
            {Server.map(e => {return (
            <ListItemButton>
                <ListItemText primary={e.time}/>
            </ListItemButton>)
            })}
            
        </Box>
        </List>
    </Sidebarbox>
  );
}