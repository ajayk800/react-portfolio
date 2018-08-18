import React, { Component } from 'react';
import ModalImage from 'react-modal-image'

import h2h1 from './imgs/portfolio/h2h1.png';
import h2h2 from './imgs/portfolio/h2h2.png';

import lineups from './imgs/portfolio/lineups.png';

import playerProfile1 from './imgs/portfolio/playerProfile1.png';
import playerProfile2 from './imgs/portfolio/playerProfile2.png';
import playerProfile3 from './imgs/portfolio/playerProfile3.png';
import playerProfile4 from './imgs/portfolio/playerProfile4.png';

import toplist_carries from './imgs/portfolio/toplist_carries.png';
import toplist_carries2 from './imgs/portfolio/toplist_carries_2.png';
import toplist_tackles from './imgs/portfolio/toplist_tackles.png';
import toplist_tackles2 from './imgs/portfolio/toplist_tackles2.png';
import toplist_tackles3 from './imgs/portfolio/toplist_tackles3.png';


export class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <h3 className="portfolio-heading">Portfolio: </h3>
          <PlayerStats />
      </div>
    )
  }
}

const PlayerStats = () => {
  return(
    <div className="portfolio-player-stats container"  style={{ paddingBottom: 100}}>
      <ModalImage small={h2h1} large={h2h1} alt="player stats!" /><br/>
      <ModalImage small={h2h2} large={h2h2} alt="player stats!" /><br/>
      <ModalImage small={lineups} large={lineups} alt="player stats!" /><br/>
      <ModalImage small={playerProfile1} large={playerProfile1} alt="player stats!" /><br/>
      <ModalImage small={playerProfile2} large={playerProfile2} alt="player stats!" /><br/>
      <ModalImage small={playerProfile3} large={playerProfile3} alt="player stats!" /><br/>
      <ModalImage small={playerProfile4} large={playerProfile4} alt="player stats!" /><br/>
      <ModalImage small={toplist_carries} large={toplist_carries} alt="player stats!" /><br/>
      <ModalImage small={toplist_carries2} large={toplist_carries2} alt="player stats!" /><br/>
      <ModalImage small={toplist_tackles} large={toplist_tackles} alt="player stats!" /><br/>
      <ModalImage small={toplist_tackles2} large={toplist_tackles2} alt="player stats!" /><br/>
      <ModalImage small={toplist_tackles3} large={toplist_tackles3} alt="player stats!" /><br/>
    </div>
  )
}