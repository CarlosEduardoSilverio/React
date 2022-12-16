import React, { useEffect } from "react";
import  './Home.css'
import {Grid, Button, Typography, Divider} from '@material-ui/core'
import {Box} from '@mui/material'
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

function Home(){
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      } 
  }, [token])
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo TextoH' >Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo' >expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid xs={12} className='postagens '>
                    <TabPostagem />
                </Grid> 
            </Grid>
            <Divider />
            <Grid className='caixa'>
                <Box>
                    <Typography color="textPrimary" align="center">Sobre mim</Typography>
                </Box>
                <Grid>
                    <Box>
                        <Typography>Animais que eu gosto</Typography>
                    </Box>
                    <Box>
                        <Typography color="textPrimary">Pomba Apunhalada</Typography>
                    <img src="https://i.pinimg.com/474x/1a/97/23/1a9723574db948f03a4a8e6470fc658a.jpg" alt='Pomba Apunhalada'/>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;