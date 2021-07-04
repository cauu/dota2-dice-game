const SELECTION_DURATION_LIMIT = 60
const DOTA_MAX_PLAYERS = 64

class HeroSelection {
  playerPicked = {}
  totalPlayer = 0
  pickedAmount = 0
  timeLeft = SELECTION_DURATION_LIMIT

  selectListener: CustomGameEventListenerID | null = null

  constructor () {
    for (let i = 0; i < DOTA_MAX_PLAYERS; i++){
      if (PlayerResource.IsValidPlayer(i)) {
        this.totalPlayer += 1
      }
    }

    Timers.CreateTimer(0.04, () => {
      this.tick()
    })

    this.selectListener = CustomGameEventManager.RegisterListener('hero_selected', (uid, event) => {
    })
  }

  /** 选人倒计时 */
  tick () {
    if (this.timeLeft >= 0) {
      CustomGameEventManager.Send_ServerToAllClients<{time: number}>( "picking_time_update", {
        time: this.timeLeft
      })
      this.timeLeft = this.timeLeft - 1
    }

    if (this.timeLeft < 0) {
      this.endPick()
      return
    }

    Timers.CreateTimer(1, () => {
      this.tick()
    })
  }

  /** 选择英雄 */
  pickHero () {
  }

  /** 结束选择 */
  endPick () {
  }
}

export default HeroSelection