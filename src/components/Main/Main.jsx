import HeaderContainer from "../Header/HeaderContainer";
import { AppBar, Toolbar, Typography, Container, Grid, Box, Button, Paper, Icon, Card, CardContent } from '@mui/material';
import {BusinessCenter, LocalShipping, SyncAlt, Title} from '@mui/icons-material'; // Иконки
import { styled } from '@mui/material/styles';
import MainContainer from "./MainContainer";
import MainPageContainer from "../MainPage/MainPageContainer";


const Main = () => {
    return (
        <>
            <HeaderContainer/>
            <ContentContainer/>
        </>
    )
}


const ContentContainer = () => {
    return (
        <Box>
            <MainPageContainer/>
        </Box>
    )
};


export default Main;