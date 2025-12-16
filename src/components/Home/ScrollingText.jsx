import { Box, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import 'animate.css'


function ScrollingText() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    return (
        <Box sx={{ py: 5, display: 'flex' }}>
            <Container sx={{ minWidth: '100%' }} >
                <div class="marquee-wave">
                    <svg viewBox="0 0 2200 140" xmlns="http://www.w3.org/2000/svg">
                        <path id="wavePath" d="M0,80 
                            C 183,20 366,140 550,80 
                            S 916,20 1100,80 
                            S 1466,140 1650,80 
                            S 2016,20 2200,80"
                            fill="none" stroke="transparent" stroke-width="1" />
                        <text font-size="36" fill="currentColor">
                            <textPath href="#wavePath" startOffset="0%">
                                • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks
                            </textPath>
                        </text>
                    </svg>
                </div>

            </Container>
        </Box>
    );
}

export default ScrollingText;