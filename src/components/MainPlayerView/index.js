import React from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import classes from './MainPlayerView.module.css';
import SampleCard from './SampleCard';
import ActiveCards from './ActiveCards';

export default function MainPlayerView() {
  return (
    <View className={classes.playerView}>
      <Col sm="12">
        <ActiveCards />
      </Col>
      <Col sm="12">
        <MainCardsView>
          <CardSlot className="card-back rotate-35 mt-120">
            <SampleCard />
          </CardSlot>
          <CardSlot className="card-back rotate-15 mt-20">
            <SampleCard />
          </CardSlot>
          <CardSlot className="card-back rotate-10 mb-50" />
          <CardSlot className="card-back mb-80" />
          <CardSlot className="card-back rotate--10 mb-50" />
          <CardSlot className="card-back rotate--15 mt-20">
            <SampleCard />
          </CardSlot>
          <CardSlot className="card-back rotate--35 mt-120" />
        </MainCardsView>
      </Col>
    </View>
  );
}

const View = styled.div`
  width: 60%;
  height: 250px;
`;

const MainCardsView = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: center;
  transform: scale(0.8);
`;

const CardSlot = styled.div`
  width: 150px;
  height: 200px;
  border: 2px solid black;
`;
