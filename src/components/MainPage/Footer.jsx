import {Box, Container, Grid, Link, Typography} from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1976d2', color: '#fff', py: 4, mt: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            О компании
                        </Typography>
                        <Typography variant="body2">
                            TOPMarketing — казахстанская компания, специализирующаяся на всесторонней поддержке бизнеса при взаимодействии с Китаем.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Контакты
                        </Typography>
                        <Typography variant="body2">
                            Адрес: г. Алматы, Казахстан<br />
                            Телефон: +7 (123) 456-78-90<br />
                            Email: info@topmarketing.kz
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Быстрые ссылки
                        </Typography>
                        <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
                            Главная
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
                            О нас
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: 'block' }}>
                            Услуги
                        </Link>
                    </Grid>
                </Grid>
                <Box textAlign="center" sx={{ mt: 4 }}>
                    <Typography variant="body2">
                        © {new Date().getFullYear()} TOPMarketing. Все права защищены.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};


export default Footer;