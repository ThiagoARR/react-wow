import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {LandingPageBox, Slogan, Sublines} from './style'

const LandingPage = () => {
    return(
        <Box sx={{width: '100%'}}>
            <LandingPageBox>
                <Box sx={{marginLeft: '40px', marginBottom: '40px', fontSize: '23px'}}>
                    <Slogan>All of yours characters progressions</Slogan>
                    <Slogan><b>in one place</b></Slogan>
                    <Sublines>Make your progress more fun to do.</Sublines>
                    <Button sx={{padding: '10px 15px', borderRadius: '25px', border: 'none', backgroundColor: '#FDED00', marginTop: '10px', color: 'black', "&:hover": {backgroundColor: "#998E16"}}}><b>GO TO SECTION</b></Button>
                </Box>
            </LandingPageBox>
            <Box sx={{padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
                    <Box sx={{marginRight: '5px', fontSize: '18px', color: '#B0BCC5', letterSpacing: '3px'}}>LATEST MYTHIC RUNS </Box>  
                    <Box sx={{flex: '1', boxShadow: '0px 0px 3px 0px rgba(19, 23, 26, 1)', height: '3px', backgroundColor: '#1A2023', borderRadius: '7px'}}></Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-start', marginTop: '20px'}}>
                    <Card sx={{ maxWidth: 345}}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://render.worldofwarcraft.com/us/zones/the-nokhud-offensive-small.jpg"
                            title="green iguana"
                        />
                        <CardContent sx={{background: '#1C2227'}}>
                            <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
                            +25 No'khud Offensive
                            </Typography>
                            <Typography variant="body2" color="#7D878E">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <Box sx={{padding: '20px', display: 'flex', alignItems: 'center', width: '100%'}}>
                <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
                    <Box sx={{marginRight: '5px', fontSize: '18px', color: '#B0BCC5', letterSpacing: '3px'}}>LATEST RAID ENCOUNTERS </Box>  
                    <Box sx={{flex: '1', boxShadow: '0px 0px 3px 0px rgba(19, 23, 26, 1)', height: '3px', backgroundColor: '#1A2023', borderRadius: '7px'}}></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPage