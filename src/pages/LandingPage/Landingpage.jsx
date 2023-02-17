import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {LandingPageBox, Slogan, Sublines} from './style'
import Avatar from '@mui/material/Avatar';
import { maxWidth } from '@mui/system';
import blood from '../../Assets/blood.jpg';
import balance from '../../Assets/balance.jpg';
import windwalker from '../../Assets/windwalker.jpg';
import havoc from '../../Assets/havoc.jpg';
import holypr from '../../Assets/holy.jpg';


const LandingPage = () => {
    return(
        <Box sx={{width: '100%'}}>
            <LandingPageBox>
                <Box sx={{marginLeft: '40px', marginBottom: '40px', fontSize: '23px'}}>
                    <Slogan>Toda a progressão dos seus personagens</Slogan>
                    <Slogan><b>em um só lugar</b></Slogan>
                    <Sublines>Faça sua progressão ficar mais divertida.</Sublines>
                    <Button sx={{padding: '10px 15px', borderRadius: '25px', border: 'none', backgroundColor: '#FDED00', marginTop: '10px', color: 'black', "&:hover": {backgroundColor: "#998E16"}}}><b>GO TO SECTION</b></Button>
                </Box>
            </LandingPageBox>
            <Box sx={{padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
                    <Box sx={{marginRight: '5px', fontSize: '18px', color: '#B0BCC5', letterSpacing: '3px'}}>LATEST MYTHIC RUNS </Box>  
                    <Box sx={{flex: '1', boxShadow: '0px 0px 3px 0px rgba(19, 23, 26, 1)', height: '3px', backgroundColor: '#1A2023', borderRadius: '7px'}}></Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-start', marginTop: '20px', gap:'10px', width: '100%', overflow: 'auto'}}>
                    <Card sx={{ width: 300, maxWidth: 300, background: '#1C2227', boxShadow: '0px 0px 10px 0px black'}}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://render.worldofwarcraft.com/us/zones/the-nokhud-offensive-small.jpg"
                            title="The Nokhud Offensive"
                        />
                        <CardContent sx={{background: '#1C2227', display: 'flex', flexDirection: 'column'}}>
                            <Typography gutterBottom variant="h6" component="div" sx={{color: 'white'}}>
                                +20 No'khud Offensive
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div" sx={{color: '#66b366', display: 'flex', justifyContent: 'space-between'}}>
                                31:36  <b>+1</b>
                            </Typography>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={blood}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={holypr}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={windwalker}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={havoc}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={balance}/>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 300, maxWidth: 300, background: '#1C2227', boxShadow: '0px 0px 10px 0px black'}}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://render.worldofwarcraft.com/us/zones/the-azure-vault-small.jpg"
                            title="The Nokhud Offensive"
                        />
                        <CardContent sx={{background: '#1C2227', display: 'flex', flexDirection: 'column'}}>
                            <Typography gutterBottom variant="h6" component="div" sx={{color: 'white'}}>
                                +21 Azure Vaults
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div" sx={{color: '#ff6666', display: 'flex', justifyContent: 'space-between'}}>
                                34:50  <b>Over Time</b>
                            </Typography>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={blood}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={holypr}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={windwalker}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={havoc}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={balance}/>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 300, maxWidth: 300, background: '#1C2227', boxShadow: '0px 0px 10px 0px black'}}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://render.worldofwarcraft.com/us/zones/ruby-life-pools-small.jpg"
                            title="The Nokhud Offensive"
                        />
                        <CardContent sx={{background: '#1C2227', display: 'flex', flexDirection: 'column'}}>
                            <Typography gutterBottom variant="h6" component="div" sx={{color: 'white'}}>
                                +20 Ruby Life Pools
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div" sx={{color: '#66b366', display: 'flex', justifyContent: 'space-between'}}>
                                39:25  <b>+1</b>
                            </Typography>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={blood}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={holypr}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={windwalker}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={havoc}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={balance}/>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 300, maxWidth: 300, background: '#1C2227', boxShadow: '0px 0px 10px 0px black'}}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://render.worldofwarcraft.com/us/zones/temple-of-the-jade-serpent-small.jpg"
                            title="The Nokhud Offensive"
                        />
                        <CardContent sx={{background: '#1C2227', display: 'flex', flexDirection: 'column'}}>
                            <Typography gutterBottom variant="h6" component="div" sx={{color: 'white'}}>
                                +21 Temple of the Jade Serpent
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div" sx={{color: '#ff6666', display: 'flex', justifyContent: 'space-between'}}>
                                49:25  <b>Over Time</b>
                            </Typography>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={blood}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={holypr}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={windwalker}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={havoc}/>
                                <Avatar sx={{boxShadow:'0px 0px 7px 0px black'}} src={balance}/>
                            </Box>
                        </CardContent>
                    </Card>
                    
                </Box>
            </Box>
            <Box sx={{padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
                    <Box sx={{marginRight: '5px', fontSize: '18px', color: '#B0BCC5', letterSpacing: '3px'}}>LATEST RAID ENCOUNTERS </Box>  
                    <Box sx={{flex: '1', boxShadow: '0px 0px 3px 0px rgba(19, 23, 26, 1)', height: '3px', backgroundColor: '#1A2023', borderRadius: '7px'}}></Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-start', marginTop: '20px', gap:'10px', width: '100%', overflow: 'auto'}}>
                    <Card sx={{ width: 300, maxWidth: 300, background: '#1C2227', boxShadow: '0px 0px 10px 0px black'}}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://render.worldofwarcraft.com/us/zones/vault-of-the-incarnates-small.jpg"
                            title="The Nokhud Offensive"
                        />
                        <CardContent sx={{background: '#1C2227', display: 'flex', flexDirection: 'column'}}>
                            <Typography gutterBottom variant="h6" component="div" sx={{color: 'white'}}>
                                Vault of the incarnates
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div" sx={{display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'space-between'}}>
                                <Box sx={{color: '#66b366', display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'flex-start', gap: '10px'}}>
                                    <Typography>
                                        8/8
                                    </Typography>
                                    <Box sx={{width: '100%', height: '5px', backgroundColor: '#66b366'}}>

                                    </Box>
                                </Box>
                                <Box sx={{color: '#66b366', display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'flex-start', gap: '10px'}}>
                                    <Typography>
                                        8/8
                                    </Typography>
                                    <Box sx={{width: '100%', height: '5px', backgroundColor: '#66b366'}}>

                                    </Box>
                                </Box>
                                <Box sx={{color: '#FDED00', display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'flex-start', gap: '10px'}}>
                                    <Typography>
                                        7/8
                                    </Typography>
                                    <Box sx={{width: '87.5%', height: '5px', backgroundColor: '#FDED00'}}>

                                    </Box>
                                </Box>
                                <Box sx={{color: '#B0BCC5', display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'flex-start', gap: '10px'}}>
                                    <Typography>
                                        1/8
                                    </Typography>
                                    <Box sx={{width: '12.5%', height: '5px', backgroundColor: '#B0BCC5'}}>

                                    </Box>
                                </Box>
                            </Typography>
                        </CardContent>
                    </Card>                    
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPage