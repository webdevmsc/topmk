import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Container, IconButton, Drawer, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowRight, Menu as MenuIcon, ExpandMore } from '@mui/icons-material';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false); // Состояние для мобильного меню
    const [expanded, setExpanded] = useState(false); // Состояние для аккордеона в Drawer

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleAccordionToggle = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Функция для закрытия Drawer только при выборе пунктов меню
    const handleMenuItemClick = () => {
        setDrawerOpen(false);
    };

    // Мобильное меню с аккордеоном для списка услуг
    const mobileMenu = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(false)} // Drawer закрывается только при нажатии на клавиши
        >
            <List>
                <ListItem button component="a" onClick={handleMenuItemClick}>
                    <ListItemText primary="Главная" />
                </ListItem>
                <ListItem button component="a" onClick={handleMenuItemClick}>
                    <ListItemText primary="О нас" />
                </ListItem>
                {/* Аккордеон для списка услуг */}
                <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionToggle('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Услуги</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem button onClick={handleMenuItemClick}>
                                <ListItemText primary="Зарядки для автомобилей разных типов" />
                            </ListItem>
                            <ListItem button onClick={handleMenuItemClick}>
                                <ListItemText primary="Аккумуляторы разные типы аккумуляторов" />
                            </ListItem>
                            <ListItem button onClick={handleMenuItemClick}>
                                <ListItemText primary="Автомобили из Китая (Электромобили и ДВС)" />
                            </ListItem>
                            <ListItem button onClick={handleMenuItemClick}>
                                <ListItemText primary="Профессиональные и садовые инструменты" />
                            </ListItem>
                            <ListItem button onClick={handleMenuItemClick}>
                                <ListItemText primary="Бизнес-сопровождение" />
                            </ListItem>
                            <ListItem button onClick={handleMenuItemClick}>
                                <ListItemText primary="Индивидуальное сопровождение сделок" />
                            </ListItem>
                            <ListItem button onClick={handleMenuItemClick}>
                                <ListItemText primary="Партнерство и дилерство" />
                            </ListItem>
                            <ListItem button onClick={handleMenuItemClick}>
                                <ListItemText primary="Индустриальные сертификаты" />
                            </ListItem>
                            <ListItem button onClick={handleMenuItemClick}>
                                <ListItemText primary="Разработка сметной документации" />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <ListItem button component="a" onClick={handleMenuItemClick}>
                    <ListItemText primary="Контакты" />
                </ListItem>
                <ListItem button component="a" onClick={handleMenuItemClick}>
                    <ListItemText primary="Консультация" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        {/* Логотип или название сайта */}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                            TOPMK
                        </Typography>

                        {/* Меню для ПК */}
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Button sx={{ marginRight: '6px' }} color="inherit">
                                Главная
                            </Button>
                            <Button sx={{ marginRight: '6px' }} color="inherit">
                                О нас
                            </Button>

                            {/* Кнопка с выпадающим меню "Услуги" */}
                            <Button
                                sx={{ marginRight: '6px' }}
                                color="inherit"
                                aria-controls="services-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                                endIcon={isMenuOpen ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
                            >
                                Услуги
                            </Button>
                            <Menu
                                id="services-menu"
                                anchorEl={anchorEl}
                                open={isMenuOpen}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} component="a">
                                    Зарядки для автомобилей разных типов
                                </MenuItem>
                                <MenuItem onClick={handleClose} component="a">
                                    Аккумуляторы разные типы аккумуляторов
                                </MenuItem>
                                <MenuItem onClick={handleClose} component="a">
                                    Автомобили из Китая (Электромобили и ДВС)
                                </MenuItem>
                                <MenuItem onClick={handleClose} component="a">
                                    Профессиональные и садовые инструменты
                                </MenuItem>
                                <MenuItem onClick={handleClose} component="a">
                                    Бизнес-сопровождение
                                </MenuItem>
                                <MenuItem onClick={handleClose} component="a">
                                    Индивидуальное сопровождение сделок
                                </MenuItem>
                                <MenuItem onClick={handleClose} component="a">
                                    Партнерство и дилерство
                                </MenuItem>
                                <MenuItem onClick={handleClose} component="a">
                                    Индустриальные сертификаты
                                </MenuItem>
                                <MenuItem onClick={handleClose} component="a">
                                    Разработка сметной документации
                                </MenuItem>
                            </Menu>

                            <Button sx={{ marginRight: '6px' }} color="inherit">
                                Контакты
                            </Button>
                            <Button sx={{ marginRight: '6px' }} variant="contained" color="inherit">
                                Консультация
                            </Button>
                        </Box>

                        {/* Иконка для мобильного меню */}
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Drawer для мобильного меню */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {mobileMenu}
            </Drawer>
        </>
    );
};

export default Header;
