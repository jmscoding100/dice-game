/**
 * Rules
 * 
 * 7 or 11 first roll wins
 * snake eyes (2) is a lose 
 * 
 * If not 7 or 11 first roll and not snake eyes roll untill match (point)
 * 
 * SET  win to false
 * 
 * SET gamePlay to true
 * SET rolls to 0
 * 
 * WHILE gamePlay
 *      SET total
 *      rolls++
 * 
 *      IF total is equal to 2
 *              SET gamPlay
 *             ELSE IF (total is equal to 7 or total is equal to 11) and rolls is equal to 1
 *              SET win to true
 *               SET gamePlay to !win
 *              ELSE IF (total is not equal to 7 or total is not equal to 11) and rolls is equal to 1
 *                 then SET point to total
 *                  ELSE if point is equal to total and rolls is greater than 1
 *                          then set win to true 
 *                            set gamePlay to !win
 *              
 *      Else if (total is equal to 7 and rolls is greater than 1) Set gamePlay to false
 */

class Game {
    constructor(){
        //data on load

        this.dieDisplay1 = document.getElementById('dieDisplay1')
        this.dieDisplay2 = document.getElementById('dieDisplay2')
        this.rollTotalDisplay = document.getElementById('rollTotalDisplay')
        this.message = document.getElementById('message')
        this.rollBtn = document.getElementById('rollBtn')
        this.rollCountDisplay = document.getElementById('rollCountDisplay')
        this.pointDisplay = document.getElementById('pointDisplay')
        this.winDisplay = document.getElementById('winDisplay')
        this.lossDisplay = document.getElementById('lossDisplay')
        this.winStreakDisplay = document.getElementById('winStreakDisplay')
        this.lossStreakDisplay = document.getElementById('lossStreakDisplay')

        this.gameSettings ={
            gamePlay: false,
            rolls: 0,
            point: 0,
            totalWins: 0,
            totalLosses: 0,
            winStreak: 0,
            lossStreak: 0,
            lastResult: '',
            win: false
        }
    }
}