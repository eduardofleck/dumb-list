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
                #1
              </Typography>
            </RightDiv>
            <Header>
              <div>
                <Typography variant="h5">
                  {props.item.predictedMany} mortes
                </Typography>
                <Typography variant="h6">Bolsonaro - Janeiro/2020</Typography>
              </div>
            </Header>
          </div>
        </CardContent>
      </Card>
    </Content>
  );
}

export default RankItem;
