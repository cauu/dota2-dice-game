import React, { useState, useCallback } from 'react'
import { useGameEvent } from 'react-panorama'

import './style.less'

const HERO_LIST: {
  id: string
  name: string
  img: string
}[] = [
  {
    id: 'npc_dota_hero_antimage',
    name: 'npc_dota_hero_antimage',
    img: 'url("file://{images}/loadingscreens/witch_hunter_loading_screen/loadingscreen.tga")'
  },
  {
    id: 'npc_dota_hero_legion_commander',
    name: 'npc_dota_hero_legion_commander',
    img: 'url("file://{images}/loadingscreens/valkyrie_loadingscreen/loadingscreen.tga")'
  },
  {
    id: 'npc_dota_hero_drow_ranger',
    name: 'npc_dota_hero_drow_ranger',
    img: 'url("file://{images}/loadingscreens/traxex_loadingscreen/loadingscreen.tga")'
  },
  {
    id: 'npc_dota_hero_rubick',
    name: 'npc_dota_hero_rubick',
    img: 'url("file://{images}/loadingscreens/harlequin_loading_screen/loadingscreen.tga")'
  }
]

function HeroSelectionLayout () {
  const [timeLeft, setTimeLeft] = useState(0)

  useGameEvent<{time: number}>('picking_time_update', ({time}) => {
    setTimeLeft(time)
  })

  const handleSelect = useCallback((heroName: string) => {
    GameEvents.SendCustomGameEventToServer<{ heroName: string }>('hero_selected', {
      heroName
    })
  }, [])

  return (
    <Panel className="hero-selection">
      <Panel className="hero-selection__left">
      </Panel>

      <Panel className="hero-selection__main">
        <Panel className="hero-selection__text">
          <Panel className="hero-selection__timer">
            <Label id='timerText' text={timeLeft} />
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
                  onactivate={() => handleSelect(hero.name)}
                />
              )
            })
          }
        </Panel>

        <Panel className="hero-selection__post-pick">
          <Button id="EnterGameBtn">
            <Label id="EnterGameBtnTxt" text="Waiting for other players..." />
          </Button>
        </Panel>
      </Panel>

      <Panel className="hero-selection__right">
      </Panel>

    </Panel>
  )
}

export default HeroSelectionLayout

