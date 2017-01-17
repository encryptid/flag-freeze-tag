module.exports = function Team(name) {
    this.name = name;
    this.size = 5;
    this.roster = [];
    this.add = function (player) {
        if (this.roster.length < this.size) {
            this.roster.push(player);
            return (player + ' was added to ' + player);
        }
    }
    this.won = function won(losers) {
        if (this.name === "run") {
            // let count = 0;                              //count = 0
            // for (let i = 0; i <= this.roster.length; i++) { //starting at zero, if i is less than or equal to the length 
            //     // of the amount of runners
            //     if (this.roster[i].frozen === true) {            // if the player is frozen...
            //         count = count + 1                        // increase the count by 1
            //     }
            // }
            // if (count === this.roster.length) {
            //     return false
            for (let i = 0; i < this.roster.length; i++) {
                if (this.roster[i].flag === true) {
                    return true
                }
            }
        } else if (this.name === "chase") {
            console.log('Team is chasers');
            console.log('length of "losers" is: ' + losers.roster.length)
            let frozenRunners = 0;
            for (let i = 0; i < losers.roster.length; i++) {
                if (losers.roster[i].frozen === true) { // if the frozen status of each member of runners is true...
                    console.log(frozenRunners);
                    frozenRunners = frozenRunners + 1;                  // add 1 to the count
                }
            }
            if (frozenRunners === losers.roster.length) { // if the count of frozen runners is equal to the roster length
                return true
            } else {
                return false
            }

        }
    }

}