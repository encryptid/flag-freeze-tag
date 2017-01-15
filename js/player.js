/** 
 * Most commonly, we'll either export functions or objects.
 */

module.exports = function Player(name, team, animal) {
    this.name = name;
    this.team = team;
    this.type = animal;
    this.frozen = false;
    this.flag = false;
    this.tag = function tag(player) {
            console.log(this.name + ' is tagging ' + player.name);
        // console.log(player.frozen)
        // return player.frozen = true;
        // console.log(player.frozen);
        //if (
        function isFrozen() {
            console.log(player.name + ' is currently frozen? ' + player.frozen);
            if (player.frozen = false) { // if player.frozen = false (or, unfrozen)...
            return true                  // return true
            }
        };

        function isRunner() {
            console.log(this.name + ' is a ' + this.team);
            if (this.team = "Chasers") { // if this.team property is equal to "Chasers",
                return true                // return true
            }
        };

        return isFrozen() && isRunner()
            // else (isFrozen() !== true && isRunner() !== true) { // if tagged is frozen and tagger is on Runners,
            //     return player.frozen = false                       // tagger is unfrozen.
            //}
    };
}