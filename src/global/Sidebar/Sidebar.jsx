import {useState, useContext} from 'react';
import ContextManipulation from '../../Context/ContexAPI';
import {Sidebarbox, Div} from './style';
import List from '@mui/material/List';
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import {GiDungeonGate, GiTwoCoins, GiRank3} from 'react-icons/gi'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import monk from '../../Assets/monks.png'
import shaman from '../../Assets/shaman.png'
import dh from '../../Assets/demonhunter.png'
import rogue from '../../Assets/rogue.png'
import dk from '../../Assets/deathknight.png'
import hunter from '../../Assets/hunter.png'
import warrior from '../../Assets/warrior.png'
import paladin from '../../Assets/paladin.png'
import priest from '../../Assets/priest.png'
import mage from '../../Assets/mage.png'
import druid from '../../Assets/druid.png'
import warlock from '../../Assets/warlock.png'
import ww from '../../Assets/windwalker.jpg';
import windwalker from '../../Assets/windwalker.jpg';
import brewmaster from '../../Assets/brewmaster.jpg';
import mistweaver from '../../Assets/mistweaver.jpg';
import affliction from '../../Assets/affliction.jpg';
import demonology from '../../Assets/demonology.jpg';
import destruction from '../../Assets/destruction.jpg';
import blood from '../../Assets/blood.jpg';
import frostdk from '../../Assets/frost.jpg';
import unholy from '../../Assets/unholy.jpg';
import arcane from '../../Assets/arcane.jpg';
import fire from '../../Assets/fire.jpg';
import frost from '../../Assets/ice.jpg';
import survival from '../../Assets/survival.jpg';
import marksman from '../../Assets/marksman.jpg';
import beastmaster from '../../Assets/beastmaster.jpg';
import elemental from '../../Assets/elemental.jpg';
import enhancement from '../../Assets/enhancement.jpg';
import restoration from '../../Assets/restoration.jpg';
import vengeance from '../../Assets/vengeance.jpg';
import havoc from '../../Assets/havoc.jpg';
import arms from '../../Assets/arms.jpg';
import fury from '../../Assets/fury.jpg';
import protection from '../../Assets/protection.jpg';
import retribution from '../../Assets/retribution.jpg';
import holy from '../../Assets/holypala.jpg';
import protectionp from '../../Assets/protectionpala.jpg';
import sub from '../../Assets/sub.jpg';
import outlaw from '../../Assets/outlaw.jpg';
import assassination from '../../Assets/assassination.jpg';
import preservation from '../../Assets/preservation.jpg';
import devastation from '../../Assets/devastation.jpg';
import guardian from '../../Assets/bear.jpg';
import balance from '../../Assets/balance.jpg';
import feral from '../../Assets/feral.jpg';
import restauration from '../../Assets/restauration.jpg';
import discipline from '../../Assets/discipline.jpg';
import holypr from '../../Assets/holy.jpg';
import shadow from '../../Assets/shadow.jpg';


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
        image: dk
    },
    {
        id: 4,
        class: 'Hunter',
        image: hunter
    },
    {
        id: 5,
        class: 'Mage',
        image: mage
    },
    {
        id: 6,
        class: 'Warlock',
        image: warlock
    },
    {
        id: 7,
        class: 'Evoker',
        image: monk
    },
    {
        id: 8,
        class: 'Druid',
        image: druid
    },
    {
        id: 9,
        class: 'Priest',
        image: priest
    },
    {
        id: 10,
        class: 'Paladin',
        image: paladin
    },
    {
        id: 11,
        class: 'Warrior',
        image: warrior
    },
    {
        id: 12,
        class: 'Rogue',
        image: rogue
    },
    {
        id: 13,
        class: 'Demon Hunter',
        image: dh
    }
]

const Specs = [
    {
        id: 1,
        name: 'Windwalker',
        image: windwalker,
        classId: 1
    },
    {
        id: 2,
        name: 'Brewmaster',
        image: brewmaster,
        classId: 1
    },
    {
        id: 3,
        name: 'Mistweaver',
        image: mistweaver,
        classId: 1
    },
    {
        id: 4,
        name: 'Elemental',
        image: elemental,
        classId: 2
    },
    {
        id: 5,
        name: 'Enhancement',
        image: enhancement,
        classId: 2
    },
    {
        id: 6,
        name: 'Restoration',
        image: restoration,
        classId: 2
    },
    {
        id: 7,
        name: 'Blood',
        image: blood,
        classId: 3
    },
    {
        id: 8,
        name: 'Frost',
        image: frostdk,
        classId: 3
    },
    {
        id: 9,
        name: 'Unholy',
        image: unholy,
        classId: 3
    },
    {
        id: 10,
        name: 'Marksmanship',
        image: marksman,
        classId: 4
    },
    {
        id: 11,
        name: 'Survival',
        image: survival,
        classId: 4
    },
    {
        id: 12,
        name: 'Beastmaster',
        image: beastmaster,
        classId: 4
    },
    {
        id: 13,
        name: 'Fire',
        image: fire,
        classId: 5
    },
    {
        id: 14,
        name: 'Frost',
        image: frost,
        classId: 5
    },
    {
        id: 15,
        name: 'Arcane',
        image: arcane,
        classId: 5
    },
    {
        id: 16,
        name: 'Affliction',
        image: affliction,
        classId: 6
    },
    {
        id: 17,
        name: 'Destruction',
        image: destruction,
        classId: 6
    },
    {
        id: 18,
        name: 'Demonology',
        image: demonology,
        classId: 6
    },
    {
        id: 19,
        name: 'Devastation',
        image: devastation,
        classId: 7
    },
    {
        id: 20,
        name: 'Preservation',
        image: preservation,
        classId: 7
    },
    {
        id: 21,
        name: 'Guardian',
        image: guardian,
        classId: 8
    },
    {
        id: 22,
        name: 'Balance',
        image: balance,
        classId: 8
    },
    {
        id: 23,
        name: 'Feral',
        image: feral,
        classId: 8
    },
    {
        id: 24,
        name: 'Restauration',
        image: restauration,
        classId: 8
    },
    {
        id: 25,
        name: 'Discipline',
        image: discipline,
        classId: 9
    },
    {
        id: 26,
        name: 'Holy',
        image: holypr,
        classId: 9
    },
    {
        id: 27,
        name: 'Shadow',
        image: shadow,
        classId: 9
    },
    {
        id: 28,
        name: 'Protection',
        image: protectionp,
        classId: 10
    },
    {
        id: 29,
        name: 'Holy',
        image: holy,
        classId: 10
    },
    {
        id: 30,
        name: 'Retribution',
        image: retribution,
        classId: 10
    },
    {
        id: 31,
        name: 'Protection',
        image: protection,
        classId: 11
    },
    {
        id: 32,
        name: 'Arms',
        image: arms,
        classId: 11
    },
    {
        id: 33,
        name: 'Fury',
        image: fury,
        classId: 11
    },
    {
        id: 34,
        name: 'Assassination',
        image: assassination,
        classId: 12
    },
    {
        id: 35,
        name: 'Outlaw',
        image: outlaw,
        classId: 12
    },
    {
        id: 36,
        name: 'Subtetly',
        image: sub,
        classId: 12
    },
    {
        id: 37,
        name: 'Vegeance',
        image: vengeance,
        classId: 13
    },
    {
        id: 38,
        name: 'Havoc',
        image: havoc,
        classId: 13
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
        classId: 1,
        activeSpecId: 1

    },
    {
        id: 2,
        name: 'Howster',
        level:'70',
        ilvl: '399',
        color: '#2459FF',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/246/98540790-avatar.jpg',
        classId: 2,
        activeSpecId: 5
    },
    {
        id: 3,
        name: 'Blurryfacce',
        level:'65',
        ilvl: '399',
        color: '#A330C9',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/17/153029393-avatar.jpg',
        classId: 13,
        activeSpecId: 38
    },
    {
        id: 4,
        name: 'Lothuialeth',
        level:'22',
        ilvl: '399',
        color: '#FFF469',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/215/161678039-avatar.jpg',
        classId: 12,
        activeSpecId: 35
    },
    {
        id: 5,
        name: 'Korthroz',
        level:'28',
        ilvl: '78',
        color: '#C79C6E',
        image: 'https://render.worldofwarcraft.com/us/character/stormrage/226/250912994-avatar.jpg',
        classId: 11,
        activeSpecId: 33
    },
    {
        id: 6,
        name: 'Aferion',
        level:'60',
        ilvl: '399',
        color: '#33937F',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/3/193860867-avatar.jpg',
        classId: 7,
        activeSpecId: 19

    },
    {
        id: 7,
        name: 'Trapfang',
        level:'70',
        ilvl: '399',
        color: '#FF7D0A',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/214/98237398-avatar.jpg',
        classId: 8,
        activeSpecId: 21

    },
    {
        id: 8,
        name: 'Khalondor',
        level:'61',
        ilvl: '399',
        color: '#69CCF0',
        image: 'https://render.worldofwarcraft.com/us/character/stormrage/18/247854610-avatar.jpg',
        classId: 5,
        activeSpecId: 15
    },
    {
        id: 9,
        name: 'Heartbeatz',
        level:'60',
        ilvl: '399',
        color: '#C41F3B',
        image: 'https://render.worldofwarcraft.com/us/character/azralon/218/97829338-avatar.jpg',
        classId: 3,
        activeSpecId: 9

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
    }
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
  const [openCharList, setOpenCharList] = useState(false);
  const [openRaidList, setOpenRaidList] = useState(false);
  const [openMythicList, setOpenMythicList] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const {sidebarVisible} = useContext(ContextManipulation);


  const filteredChars = Classes.filter((classe) => classe.id === selectedItem?.classId);

  const filteredSpec = Specs.filter((spec) => spec.id === selectedItem?.activeSpecId)

  const handleItemClick = (item) => {
    setOpenCharList(!openCharList);
    setSelectedItem(item);
  };

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
    <Sidebarbox className={sidebarVisible ? 'active':''}>
        <Box>
            {filteredChars.map((c) => (<>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 1, pb: 1}}>
                        <Div style={{color: selectedItem.color, fontSize: '20px'}}>{'Level '+selectedItem.level}</Div>
                    </Box>
                    <Avatar src={filteredChars[0].image} sx={{width: '150px', height: '150px', margin: 'auto'}}/>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', padding: '0 2px'}}>
                        <Div><Avatar sx={{boxShadow: `0px 0px 7px 0px ${selectedItem.color}`}} src={filteredSpec[0].image}/></Div>
                        <Div style={{color: selectedItem.color}}>{selectedItem.name}</Div>
                        <Div style={{color: selectedItem.color}}>{selectedItem.ilvl+' ilvl'}</Div>
                    </Box>
                </>

            ))
            
            }   
        </Box>
        <List
        sx={{ width: '100%', maxWidth: 360, color: '#bbb', marginTop: '10px'}}
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
                <ListItemButton sx={{backgroundColor: '#191D20'}} onClick={() => handleItemClick(e)}>
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
        {/* <Box sx={{display: 'flex', alignItems: 'center', borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px', backgroundColor: '#1C2227'}}>
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
        </Box> */}
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