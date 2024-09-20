import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Box, Button, Paper, Icon, Card, CardContent } from '@mui/material';
import { BusinessCenter, LocalShipping, SyncAlt } from '@mui/icons-material'; // Иконки
import { styled } from '@mui/material/styles';
import { Security, Loop, School } from '@mui/icons-material';
import { ThumbUp, People, AccessTime, Handshake } from '@mui/icons-material';
import Footer from "./Footer";

// Стилизация заголовков
const Title = styled(Typography)(({ theme }) => ({
    fontSize: '3rem',  // Увеличенный размер для более современного вида
    fontWeight: 'bold',
    color: theme.palette.primary.main,
}));

const SubTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',  // Крупнее, чтобы лучше привлекать внимание
    color: theme.palette.text.secondary,
}));

// Стилизация для основного баннера
const Banner = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '350px',  // Увеличенная высота для лучшего эффекта
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',  // Легкое затемнение для лучшей читаемости текста
        zIndex: -1,
    },
}));

// Стили для карточек услуг
const ServiceCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',  // Плавный эффект при наведении
    '&:hover': {
        transform: 'scale(1.05)',  // Увеличение карточки при наведении
        boxShadow: theme.shadows[6],  // Больше тени для акцента
    },
}));

const MainPage = () => {
    return (
        <>

            <Banner
                sx={{
                    height: { xs: '250px', sm: '350px' }, // Уменьшаем высоту баннера на мобильных
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', // Центрируем содержимое на мобильных
                }}
            >
                <Title sx={{ fontSize: { xs: '2rem', sm: '3rem' }, mb: 2 }}>
                    Добро пожаловать в TOPMarketing
                </Title>
                <SubTitle sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, mb: 3 }}>
                    Ваш надежный партнер для бизнеса с Китаем
                </SubTitle>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, padding: { xs: '8px 16px', sm: '12px 24px' } }}
                >
                    Узнать больше
                </Button>
            </Banner>

            <Box mt={{ xs: 2, sm: 3 }}>
                <Container>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: { xs: 2, sm: 4 }, // Меньше padding на мобильных устройствах
                            marginBottom: { xs: 3, sm: 5 }, // Меньший отступ снизу на мобильных устройствах
                            borderRadius: 4,
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h2"
                            gutterBottom
                            sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, textAlign: { xs: 'center', sm: 'left' } }} // Уменьшение заголовка и центрирование на мобильных
                        >
                            О компании
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, textAlign: { xs: 'center', sm: 'left' } }} // Меньший шрифт и центрирование текста на мобильных
                        >
                            TOPMarketing — казахстанская компания, специализирующаяся на всесторонней поддержке бизнеса при взаимодействии с Китаем. Мы предлагаем комплексное решение для организации и сопровождения международных сделок, обеспечивая надёжную логистическую поддержку на всех этапах. Наша деятельность охватывает управление цепочками поставок, что позволяет клиентам получать необходимые товары и услуги в кратчайшие сроки и с минимальными затратами.
                        </Typography>
                    </Paper>
                </Container>
            </Box>


            {/* Услуги */}
            <Container>
                <Box mb={10}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Наши услуги
                    </Typography>
                    <Grid container spacing={7}>
                        <Grid item xs={12} sm={4} display="flex">
                            <ServiceCard elevation={4} sx={{ padding: 2, borderRadius: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                                    <Icon color="primary" sx={{ fontSize: 60 }}>
                                        <BusinessCenter />
                                    </Icon>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                        Поддержка международных сделок
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Мы предоставляем всестороннюю помощь при организации сделок с Китаем, от переговоров до финализации соглашений.
                                    </Typography>
                                </CardContent>
                            </ServiceCard>
                        </Grid>

                        <Grid item xs={12} sm={4} display="flex">
                            <ServiceCard elevation={4} sx={{ padding: 2, borderRadius: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                                    <Icon color="primary" sx={{ fontSize: 60 }}>
                                        <LocalShipping />
                                    </Icon>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                        Логистическая<br/> поддержка
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Надёжная логистика на всех этапах международных сделок, минимизируя время и расходы.
                                    </Typography>
                                </CardContent>
                            </ServiceCard>
                        </Grid>

                        <Grid item xs={12} sm={4} display="flex">
                            <ServiceCard elevation={4} sx={{ padding: 2, borderRadius: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                                    <Icon color="primary" sx={{ fontSize: 60 }}>
                                        <SyncAlt />
                                    </Icon>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                        Управление цепочками поставок
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Мы управляем цепочками поставок, обеспечивая точное и своевременное получение товаров и услуг.
                                    </Typography>
                                </CardContent>
                            </ServiceCard>
                        </Grid>
                    </Grid>
                </Box>
            </Container>


            <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} pt={3}>
                <Container>
                    <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
                        Преимущества сотрудничества с нами
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
                            <Paper elevation={4} sx={{ padding: 3, borderRadius: 4, height: '100%', textAlign: 'center' }}>
                                <ThumbUp color="primary" sx={{ fontSize: 60, mb: 2 }} />
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Опыт и знания
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Мы обладаем многолетним опытом работы с китайским рынком, что позволяет нам предлагать наиболее эффективные решения для вашего бизнеса.
                                    Наша команда разбирается в тонкостях ведения переговоров и знает, как минимизировать риски при международных сделках.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
                            <Paper elevation={4} sx={{ padding: 3, borderRadius: 4, height: '100%', textAlign: 'center' }}>
                                <People color="primary" sx={{ fontSize: 60, mb: 2 }} />
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Индивидуальный подход
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Мы не предлагаем стандартных решений. Каждому клиенту мы подходим индивидуально, разрабатывая стратегии, которые соответствуют
                                    его уникальным целям и задачам. Это гарантирует наибольшую эффективность в сотрудничестве.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
                            <Paper elevation={4} sx={{ padding: 3, borderRadius: 4, height: '100%', textAlign: 'center' }}>
                                <AccessTime color="primary" sx={{ fontSize: 60, mb: 2 }} />
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Экономия времени и ресурсов
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Мы оптимизируем процессы управления цепочками поставок, что позволяет значительно сократить время на получение товаров.
                                    Благодаря этому вы сможете сконцентрироваться на развитии своего бизнеса, не отвлекаясь на организационные вопросы.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
                            <Paper elevation={4} sx={{ padding: 3, borderRadius: 4, height: '100%', textAlign: 'center' }}>
                                <Handshake color="primary" sx={{ fontSize: 60, mb: 2 }} />
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Долгосрочные партнерства
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Мы стремимся к построению долгосрочных взаимоотношений с нашими клиентами, что позволяет нам лучше понимать их потребности
                                    и поддерживать их рост. Надежность и прозрачность — ключевые принципы нашей работы.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container>
                <Box mb={10} mt={5}>
                    <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
                        Почему выбирают нас
                    </Typography>
                    <Grid container spacing={7}>
                        <Grid item xs={12} sm={4}>
                            <Paper elevation={4} sx={{ padding: 3, borderRadius: 4, height: '100%', textAlign: 'center' }}>
                                <Security color="primary" sx={{ fontSize: 60, mb: 2 }} />
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Надежность
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Мы гарантируем прозрачность и честность в каждом этапе сотрудничества. Наши клиенты могут быть уверены в качестве предоставляемых услуг.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper elevation={4} sx={{ padding: 3, borderRadius: 4, height: '100%', textAlign: 'center' }}>
                                <Loop color="primary" sx={{ fontSize: 60, mb: 2 }} />
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Гибкость
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Мы быстро адаптируемся к изменяющимся условиям рынка и требованиям клиентов, предлагая самые актуальные и эффективные решения.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper elevation={4} sx={{ padding: 3, borderRadius: 4, height: '100%', textAlign: 'center' }}>
                                <School color="primary" sx={{ fontSize: 60, mb: 2 }} />
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Экспертиза
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Наши специалисты обладают глубокими знаниями в области международных сделок и логистики, что позволяет нам обеспечивать высокое качество работы.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Footer/>
        </>
    );
};

export default MainPage;
