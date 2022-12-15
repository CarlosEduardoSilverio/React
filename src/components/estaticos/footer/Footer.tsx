import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

function Footer(){
    return(
       <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-me em minhas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/CarlosEduardoSilverio" target="_blank">
                                <img className='LogosTamahoF' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />
                            </a>
                            <a href="https://www.linkedin.com/in/carlos-eduardo-silverio-34b245249/" target="_blank">
                                <img className='LogosTamahoF' src='https://cdn-icons-png.flaticon.com/128/1384/1384014.png' />
                            </a>
                            </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >©2022Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://bongo.cat/">
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">cadusilverio444@gmail.com</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
       </> 
    );
}

export default Footer;