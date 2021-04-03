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
import auth from "@feathersjs/authentication-client";

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
  const restClient = rest("http://localhost:3030");
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

  return (
    <div>
      {/* <NavBar>
        <NavItem>Dumb List!</NavItem>
        <NavItem>Aparições</NavItem>
      </NavBar> */}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={getPredictions}>
            Dumb List!
          </Button>
          <Button color="inherit">Aparições</Button>
          <Button color="inherit">Ordem</Button>
        </Toolbar>
      </AppBar>
      <MainGrid>
        <SubTitle>
          <div>
            <Typography variant="h6">Bem vindo a </Typography>
          </div>
          <div>
            <Typography variant="h5">
              Lista das piores previsões do COVID
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
