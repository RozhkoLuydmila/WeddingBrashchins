import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import title1 from "../img/title1.jpg";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./Header.css";

export const Header = () => {
    return(
        <Box 
        sx={{border: "1px solid black", borderRadius: "2rem", marginTop: "1rem"}}
        >
            <Typography 
            variant="h3" 
            sx={{textAlign: "center", padding: "15px 10px", fontFamily: "'Caveat', cursive"}}
            >
                Станислав <br/>
                <FavoriteBorderIcon fontSize="medium"/>
                <br/>Людмила
            </Typography>
            <div className="ticker">
                <Card className="ticker__wrapper">
                    <Typography className="ticker__item">Приглашение</Typography>
                    <Typography className="ticker__item">Приглашение</Typography>
                    <Typography className="ticker__item">Приглашение</Typography>
                    <Typography className="ticker__item">Приглашение</Typography>
                    <Typography className="ticker__item">Приглашение</Typography>
                    <Typography className="ticker__item">Приглашение</Typography>
                    <Typography className="ticker__item">Приглашение</Typography>
                    <Typography className="ticker__item">Приглашение</Typography>
                </Card>
            </div>
                <CardActionArea 
                        style={{padding: "25px"}}>
                    <CardMedia
                        component="img"
                        src={title1}
                        alt="Link"
                        style={{ borderTopRightRadius: "50rem", borderTopLeftRadius: "50rem"}}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" className="Content" sx={{fontFamily: "'Poiret One', cursive"}}>
                            ДОРОГИЕ ДРУЗЬЯ И РОДНЫЕ
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mt={2} className="Content" sx={{fontFamily: "'Poiret One', cursive"}}>
                        Осенью состоится очень важное и радостное для нас событие - наша свадьба.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mt={2} className="Content" sx={{fontFamily: "'Poiret One', cursive"}}>
                        Этот день невозможно представить без самых близких для нас людей, 
                        мы бы очень хотели, 
                        чтобы вы провели его вместе с нами.
                        </Typography>
                    </CardContent>
                </CardActionArea>
        </Box> 
    )
};

// export const MHeader = motion(Header);