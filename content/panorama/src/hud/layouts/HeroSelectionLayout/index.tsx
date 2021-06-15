import React from 'react'

const HERO_LIST = [
  {
    id: 'npc_dota_hero_antimage',
    img: 'file://{images}/loadingscreens/witch_hunter_loading_screen/loadingscreen.tga'
  },
  {
    id: 'npc_dota_hero_legion_commander',
    img: 'file://{images}/loadingscreens/valkyrie_loadingscreen/loadingscreen.tga'
  },
  {
    id: 'npc_dota_hero_drow_ranger',
    img: 'file://{images}/loadingscreens/traxex_loadingscreen/loadingscreen.tga'
  },
  {
    id: 'npc_dota_hero_rubick',
    img: 'file://{images}/loadingscreens/harlequin_loading_screen/loadingscreen.tga'
  }
]

function HeroSelectionLayout () {
  return (
    <Panel className="hero-selection">
      <Panel className="hero-selection__left-panel">
      </Panel>

      <Panel className="hero-selection__main">
        <Panel className="hero-selection__timer">
          <Label id='TimerTxt' text="" />
        </Panel>

        <Panel className="hero-selection__hero-list">
          {
            HERO_LIST.map((hero) => {
              return (
                <Panel id={hero.id}
                  key={hero.id}
                  className="hero-selection__hero-list__item"
                  style={{backgroundImage: `url('${hero.img}')`}}
                >
                </Panel>
              )
            })
          }
        </Panel>
      </Panel>

      <Panel className="hero-selection__right-panel">
      </Panel>
    </Panel>
  )
}

export default HeroSelectionLayout

