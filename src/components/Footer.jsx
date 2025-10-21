import { Box, Typography } from '@mui/material';


function Footer() {

    return (
        <>
            <Box sx={{ py: 4, backgroundColor: '#111', color: 'white', textAlign: 'center' }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Librati Cocktail Bar – Tutti i diritti riservati.
                </Typography>
            </Box>
        </>
    );
}

export default Footer;