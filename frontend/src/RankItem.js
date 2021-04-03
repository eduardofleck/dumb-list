import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import imagePredictor from "../src/images/user.png";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const Content = styled.div`
  margin: 0px 10px 10px 10px;
`;

// FIX this right: 30px
const RightDiv = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  right: 30px;
`;

const PictureDiv = styled.div`
  width: 75px;
  height: 100px;
`;

const UserImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Prediction = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const PercentDiv = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  justify-items: center;
  font-size: 30px;
`;

const Actions = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto;
  align-items: center;
  align-content: center;
  justify-items: center;

  font-size: 30px;
`;

function RankItem(props) {
  return (
    <Content>
      <Card>
        <CardContent>
          <div>
            <RightDiv>
              <Typography color="textSecondary" gutterBottom>
                #{props.item.position}
              </Typography>
            </RightDiv>
            <Header>
              <PictureDiv>
                <UserImg src={imagePredictor}></UserImg>
              </PictureDiv>
              <div>
                <div>Quem: {props.item.who}</div>
                <div>Quando: {props.item.when}</div>
                <div>O que: {props.item.what}</div>
              </div>
            </Header>
            <Prediction>
              <div>
                <div>Previsto: </div>
                <div>{props.item.predictedMany}</div>
                <div>Realidade: </div>
                <div>{props.item.actualNumber}</div>
              </div>
              <PercentDiv>{props.item.percent} %</PercentDiv>
            </Prediction>
          </div>
        </CardContent>
        <CardActions>
          <Actions>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Actions>
        </CardActions>
      </Card>
    </Content>
  );
}

export default RankItem;
