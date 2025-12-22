import { Box, Container, Typography, useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import 'animate.css'



function PrivacyPolicy() {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    return (

        <Box sx={{ pt: 15, pb: 10, display: 'flex' }} id='about'>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid size={{ xs: 12 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        <Typography variant='h2' className="title animate__animated animate__fadeInLeft">
                            Privacy Policy
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12 }} className="animate__animated animate__fadeInRight">
                        <Typography variant="body1" className="paragraph">

                            <b>I – INFORMAZIONI RELATIVE ALLA PRIVACY POLICY DEL SITO</b><br /><br />

                            La presente sezione descrive le modalità di gestione del sito Librati Cocktail Bar in riferimento al trattamento dei dati personali degli utenti che lo consultano.<br /><br />

                            La presente informativa è resa ai sensi dell’art. 13 del D.Lgs. 196/2003 (Codice in materia di protezione dei dati personali) e dell’art. 13 del Regolamento UE 2016/679 (GDPR), per tutti coloro che interagiscono con il sito web di Librati.<br /><br />

                            L’informativa è valida esclusivamente per questo sito e non anche per altri siti web eventualmente consultati tramite link esterni.<br /><br />

                            La presente informativa può subire modifiche a seguito dell’introduzione di nuove normative; si invita pertanto l’utente a consultare periodicamente questa pagina.<br /><br />

                            Se l’utente ha meno di 16 anni, ai sensi dell’art. 8 del Regolamento UE 2016/679, il trattamento dei dati è lecito solo previa autorizzazione dei genitori o di chi ne esercita la responsabilità genitoriale.<br /><br /><br />


                            <b>II – TRATTAMENTO DEI DATI</b><br /><br />

                            <b>1. Titolare del trattamento</b><br /><br />

                            Il titolare del trattamento dei dati personali è Librati Cocktail Bar.<br />
                            Per qualsiasi informazione o per l’esercizio dei diritti dell’utente è possibile contattare il titolare all’indirizzo email: <b>librati.giovinazzo.bari@gmail.com</b>.<br /><br />

                            <b>2. Luogo del trattamento</b><br /><br />

                            Il trattamento dei dati avviene presso la sede del titolare e/o presso i server del provider di hosting che ospita il sito web.<br /><br /><br />

                            <div id='3' className="anchor">
                                <b>III – COOKIE</b><br /><br />

                                Il sito utilizza cookie per migliorare l’esperienza di navigazione dell’utente. I cookie sono piccoli file di testo che vengono salvati sul dispositivo dell’utente per memorizzare informazioni utili al corretto funzionamento del sito.<br /><br />

                                È possibile disabilitare i cookie tramite le impostazioni del proprio browser. Tuttavia, la disabilitazione di alcuni cookie potrebbe compromettere il corretto funzionamento del sito.<br /><br />

                                <b>Tipologie di cookie utilizzate:</b><br /><br />

                                • Cookie tecnici, necessari al funzionamento del sito<br />
                                • Cookie analitici (anche di terze parti) utilizzati in forma aggregata per fini statistici<br /><br />

                                L’eventuale utilizzo di cookie di profilazione avverrà solo previo consenso esplicito dell’utente.<br /><br /><br />
                            </div>

                            <b>IV – DATI TRATTATI</b><br /><br />

                            Durante la navigazione possono essere raccolti automaticamente alcuni dati, tra cui:<br /><br />

                            • indirizzo IP<br />
                            • tipo di browser e dispositivo utilizzato<br />
                            • data e ora di accesso<br />
                            • pagine visitate e provenienza del traffico<br /><br />

                            Tali dati vengono trattati in forma aggregata e anonima per finalità statistiche, di sicurezza e di miglioramento del servizio.<br /><br /><br />


                            <b>V – DIRITTI DELL’UTENTE</b><br /><br />

                            L’utente ha il diritto di:<br /><br />

                            • accedere ai propri dati personali<br />
                            • chiederne la rettifica o la cancellazione<br />
                            • limitare o opporsi al trattamento<br />
                            • richiedere la portabilità dei dati<br />
                            • revocare il consenso in qualsiasi momento<br /><br />

                            Le richieste possono essere inviate all’indirizzo email: <b>info@libratipub.it</b>.<br /><br />

                            L’utente ha inoltre il diritto di proporre reclamo all’Autorità Garante per la Protezione dei Dati Personali.<br /><br /><br />


                            <b>VI – SICUREZZA DEI DATI</b><br /><br />

                            Il titolare adotta misure di sicurezza tecniche e organizzative adeguate al fine di proteggere i dati personali da accessi non autorizzati, perdita o distruzione.<br /><br /><br />


                            <b>VII – MODIFICHE ALLA PRESENTE PRIVACY POLICY</b><br /><br />

                            La presente informativa può essere soggetta ad aggiornamenti. Si invita l’utente a consultare periodicamente questa pagina per rimanere informato su eventuali modifiche.<br /><br />

                            Ultimo aggiornamento: <b>dicembre 2025</b>.

                        </Typography>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default PrivacyPolicy;