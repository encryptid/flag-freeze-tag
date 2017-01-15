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
        // console.log(player.frozen)
        // return player.frozen = true;
        // console.log(player.frozen);
        //if (
        function isFrozen() {
            if (player.frozen = false) {
                return true
            }
        };

        function isRunner() {
            if (this.team === "Chasers") {
                return true
            }
        };
        if (isFrozen() && isRunner()=== true) {
            return player.frozen = true
        }
    }
}