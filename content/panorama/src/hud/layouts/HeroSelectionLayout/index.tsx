import React from 'react'

import './style.less'

const HERO_LIST = [
  {
    id: 'npc_dota_hero_antimage',
    img: 'url("file://{images}/loadingscreens/witch_hunter_loading_screen/loadingscreen.tga")'
  },
  {
    id: 'npc_dota_hero_legion_commander',
    img: 'url("file://{images}/loadingscreens/valkyrie_loadingscreen/loadingscreen.tga")'
  },
  {
    id: 'npc_dota_hero_drow_ranger',
    img: 'url("file://{images}/loadingscreens/traxex_loadingscreen/loadingscreen.tga")'
  },
  {
    id: 'npc_dota_hero_rubick',
    img: 'url("file://{images}/loadingscreens/harlequin_loading_screen/loadingscreen.tga")'
  }
]

function HeroSelectionLayout () {
  return (
    <Panel className="hero-selection">
      <Panel className="hero-selection__left">
      </Panel>

      <Panel className="hero-selection__main">
        <Panel className="hero-selection__text">
          <Panel className="hero-selection__timer">
            <Label id='timerText' text="" />
          </Panel>

          <Label id="heroSelectedText" text="Select a hero" />
        </Panel>

        <Panel className="hero-selection__list">
          {
            HERO_LIST.map((hero) => {
              return (
                <Panel key={hero.id}
                  className="hero-selection__list-item" 
                  style={{ backgroundImage: hero.img }}
                />
              )
            })
          }
        </Panel>
      </Panel>

      <Panel className="hero-selection__right">
      </Panel>

    </Panel>
  )
}

export default HeroSelectionLayout

