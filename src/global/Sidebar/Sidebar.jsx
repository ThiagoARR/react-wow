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
import {GiAngelWings, GiAngelOutfit, GiDungeonGate, GiCaveEntrance, GiTwoCoins, GiRank3} from 'react-icons/gi'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import monk from '../../Assets/monks.png'
import shaman from '../../Assets/shaman.png'

const Classes = [
    {
        id: 1,
        class: 'Monk',
        image: monk
    },
    {
        id: 2,
        class: 'Shaman',
        image: shaman
    },
    {
        id: 3,
        class: 'Death Knight',
        image: monk
    },
    {
        id: 4,
        class: 'Hunter',
        image: shaman
    },
    {
        id: 5,
        class: 'Mage',
        image: monk
    },
    {
        id: 7,
        class: 'Warlock',
        image: shaman
    },
    {
        id: 8,
        class: 'Evoker',
        image: monk
    },
    {
        id: 9,
        class: 'Druid',
        image: shaman
    },
    {
        id: 10,
        class: 'Priest',
        image: monk
    },
    {
        id: 11,
        class: 'Paladin',
        image: shaman
    },
    {
        id: 12,
        class: 'Warrior',
        image: monk
    },
    {
        id: 13,
        class: 'Rogue',
        image: shaman
    },
    {
        id: 14,
        class: 'Demon Hunter',
        image: monk
    }
]

const chars = [
    {
        id: 1,
        name: 'Silverlotus',
        level:'70',
        ilvl: '410',
        color: '#00FF98',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/104/98123624-avatar.jpg',
        classId: 1

    },
    {
        id: 2,
        name: 'Howster',
        level:'70',
        ilvl: '399',
        color: '#2459FF',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/246/98540790-avatar.jpg',
        classId: 2
    },
    {
        id: 3,
        name: 'Blurryfacce',
        level:'65',
        ilvl: '399',
        color: '#A330C9',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/17/153029393-avatar.jpg',
        classId: 14
    },
    {
        id: 4,
        name: 'Lothuialeth',
        level:'22',
        ilvl: '399',
        color: '#FFF469',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/215/161678039-avatar.jpg',
        classId: 13
    },
    {
        id: 5,
        name: 'Korthroz',
        level:'28',
        ilvl: '399',
        color: '#C79C6E',
        image: 'https://render.worldofwarcraft.com/us/character/stormrage/226/250912994-avatar.jpg',
        classId: 12
    },
    {
        id: 6,
        name: 'Aferion',
        level:'60',
        ilvl: '399',
        color: '#33937F',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/3/193860867-avatar.jpg',
        classId: 8
    },
    {
        id: 7,
        name: 'Trapfang',
        level:'70',
        ilvl: '399',
        color: '#FF7D0A',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/214/98237398-avatar.jpg',
        classId: 9
    },
    {
        id: 8,
        name: 'Khalondor',
        level:'61',
        ilvl: '399',
        color: '#69CCF0',
        image: 'https://render.worldofwarcraft.com/us/character/stormrage/18/247854610-avatar.jpg',
        classId: 5
    },
    {
        id: 9,
        name: 'Heartbeatz',
        level:'60',
        ilvl: '399',
        color: '#C41F3B',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/218/97829338-avatar.jpg',
        classId: 3
    },
]

const Raids = [
    {
        name: 'Vault Of the Incarnates',
        image: 'https://render.worldofwarcraft.com/us/zones/vault-of-the-incarnates-small.jpg'
    }
]

const Dungeons = [
    {
        name: `No' Khud Offensive`,
        image: 'https://render.worldofwarcraft.com/us/zones/the-nokhud-offensive-small.jpg'
    },
    {
        name: `Halls of Valor`,
        image: 'https://render.worldofwarcraft.com/us/zones/halls-of-valor-small.jpg'
    },
    {
        name: `Azure Vaults`,
        image: 'https://render.worldofwarcraft.com/us/zones/the-azure-vault-small.jpg'
    },
    {
        name: `Ruby Life Pools`,
        image: 'https://render.worldofwarcraft.com/us/zones/ruby-life-pools-small.jpg'
    },
    {
        name: `Algethar Academy`,
        image: 'https://render.worldofwarcraft.com/us/zones/algethar-academy-small.jpg'
    },
    {
        name: `Temple Of The Jade Serpent`,
        image: 'https://render.worldofwarcraft.com/us/zones/temple-of-the-jade-serpent-small.jpg'
    },
    {
        name: `Shadowmoon Burial Grounds`,
        image: 'https://render.worldofwarcraft.com/us/zones/shadowmoon-burial-grounds-small.jpg'
    },
    {
        name: `Court of Stars`,
        image: 'https://render.worldofwarcraft.com/us/zones/court-of-stars-small.jpg'
    },
]

const Gold = [
    {
        name: 'Gold',
        time: '25000'
    }
]

const Rating = [
    {
        name: 'IO',
        rating: '2645'
    }
]

export default function Sidebar() {
  const [openCharList, setOpenCharList] = React.useState(false);
  const [openRaidList, setOpenRaidList] = React.useState(false);
  const [openMythicList, setOpenMythicList] = React.useState(false);

  const handleClickChar = () => {
    setOpenCharList(!openCharList);
  };

  const handleClickRaid = () => {
    setOpenRaidList(!openRaidList);
  };

  const handleClickMythic = () => {
    setOpenMythicList(!openMythicList);
  };

  return (
    <Sidebarbox>
        <Box>
            <Avatar src={monk} sx={{width: '150px', height: '150px', margin: 'auto'}}/>
        </Box>
        <List
        sx={{ width: '100%', maxWidth: 360, color: '#bbb'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
        >
        <ListItemButton onClick={handleClickChar} sx={{backgroundColor: '#1C2227', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopLeftRadius: '7px', borderTopRightRadius: '7px'}}>
            <ListItemDecorator>
                <PeopleAltIcon />
            </ListItemDecorator>
            <ListItemText primary="Characters" primaryTypographyProps={{fontSize: '13px', textAlign: 'center'}}  />
            {openCharList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCharList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            {chars.map(e => {return(
                <ListItemButton sx={{backgroundColor: '#191D20'}}>
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
        <Box sx={{display: 'flex', alignItems: 'center', borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px', backgroundColor: '#1C2227'}}>
            {Gold.map(e => {return (
            <ListItemButton>
                <ListItemText primary={e.time+'g'} sx={{color:'yellow', textAlign: 'center'}}/>
                <GiTwoCoins color='yellow'/>
            </ListItemButton>)
            })}
            {Rating.map(e => {return (
            <ListItemButton>
                <ListItemText primary={e.rating+' IO'} sx={{color: `${e.rating > 2499 ? '#A982B7': '#BB86C0'}`, textAlign: 'center'}}/>
                <GiRank3 color={`${e.rating > 2499 ? '#A982B7': '#BB86C0'}`}/>
            </ListItemButton>)
            })}
        </Box>
        <ListItemButton onClick={handleClickRaid} sx={{marginTop: '10px', backgroundColor: '#1C2227', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopLeftRadius: '7px', borderTopRightRadius: '7px'}}>
            <ListItemDecorator>
                <GiDungeonGate />
            </ListItemDecorator>
            <ListItemText primary="Raids" primaryTypographyProps={{fontSize: '13px', textAlign: 'center'}}  />
            {openRaidList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openRaidList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            {Raids.map(e => {return(
                <ListItemButton sx={{backgroundColor: '#191D20'}}>
                    <ListItemAvatar>
                        <Avatar src={e.image} />
                    </ListItemAvatar>
                    <ListItemText primary={e.name} primaryTypographyProps={{fontSize: '13px'}} sx={{color: e.color}} />
                </ListItemButton>)
            })}
            
            </List>
        </Collapse>
        <ListItemButton onClick={handleClickMythic} sx={{marginTop: '10px', backgroundColor: '#1C2227', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopLeftRadius: '7px', borderTopRightRadius: '7px'}}>
            <ListItemDecorator>
                <GiDungeonGate />
            </ListItemDecorator>
            <ListItemText primary="Mythic +" primaryTypographyProps={{fontSize: '13px', textAlign: 'center'}}  />
            {openMythicList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMythicList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            {Dungeons.map(e => {return(
                <ListItemButton sx={{backgroundColor: '#191D20'}}>
                    <ListItemAvatar>
                        <Avatar src={e.image} />
                    </ListItemAvatar>
                    <ListItemText primary={e.name} primaryTypographyProps={{fontSize: '13px'}} sx={{color: e.color}} />
                </ListItemButton>)
            })}
            </List>
        </Collapse>
        </List>
    </Sidebarbox>
  );
}