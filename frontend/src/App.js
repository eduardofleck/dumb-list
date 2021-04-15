import React from "react";
import styled from "styled-components";
import RankItem from "../src/RankItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import axios from "axios";
import feathers from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";

const MainGrid = styled.ul`
  display: grid;
  grid-template-rows: 110px auto auto auto auto;
  padding: 50px 0px 0px 0px;
  margin: 0px;
  background-color: #f6f6f6;
`;

const NavBar = styled.ul`
  list-style-type: none;
  position: fixed;
  top: 0;
  top: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  width: 100%;
`;

const NavItem = styled.li`
  float: left;
  display: block;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
`;

const SubTitle = styled.div`
  height: 130px;
  width: 100%;
  height: "100vh";
  overflow: "auto";
  background-color: #fff35e;
  color: black;
  text-align: center;
  vertical-align: center;
`;

function App() {
  const [data, setData] = React.useState([]);
  const [dataSkip, setDataSkip] = React.useState(0);
  const [moreButtonDisabled, setMoreButtonDisabled] = React.useState(true);

  const app = feathers();
  var backendUrl = process.env.REACT_APP_BACKEND_URL
    ? process.env.REACT_APP_BACKEND_URL
    : "https://dumb-list-backend.azurewebsites.net";

  const restClient = rest(backendUrl);
  app.configure(restClient.axios(axios));
  const list = app.service("predictions");

  React.useEffect(() => {
    getPredictions();
  }, []);

  const getPredictions = (e) => {
    list
      .find({
        query: {
          $skip: dataSkip,
        },
      })
      .then((res) => {
        console.log(res);
        const dataCopy = data;
        res.data.forEach((pred) => {
          dataCopy.push(pred);
        });
        setData(dataCopy);
        //Avoid react cache on data skip
        const newSkip = dataSkip + 10;
        setDataSkip(newSkip);
        setMoreButtonDisabled(res.total < newSkip);
      })
      .catch(function (error) {
        console.log("Error:");
        console.log(error.message);
      });
  };

  const navigateGitHubPage = (e) => {
    window.open("https://github.com/eduardofleck/dumb-list", "_blank"); //to open new page
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Button color="inherit">Ranking Osmar Terraplana</Button>
          <div style={{ position: "absolute", right: "0" }}>
            <IconButton color="inherit">
              <GitHubIcon onClick={navigateGitHubPage} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <MainGrid>
        <SubTitle>
          <div>
            <Typography variant="h6">Bem vindo a </Typography>
          </div>
          <div>
            <Typography variant="h5">
              Lista das piores previsões do COVID-19
            </Typography>
          </div>
        </SubTitle>
        <div>
          {data.map((item) => (
            <RankItem item={item}></RankItem>
          ))}
        </div>
        <Button
          disabled={moreButtonDisabled}
          color="inherit"
          onClick={getPredictions}
        >
          Mais previsões
        </Button>
      </MainGrid>
    </div>
  );
}

export default App;
