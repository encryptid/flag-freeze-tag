/** 
 * Most commonly, we'll either export functions or objects.
 */

module.exports = function Player(name, teamName, animal) {
    this.name = name;
    this.team = teamName;
    this.type = animal;
    this.frozen = false;
    this.flag = false;
    this.tag = function tag(player) {
        console.log(this.name + ' is tagging ' + player.name);
            if (this.team === "Chasers" && player.team === "Runners") {
                return player.frozen = true
            } else if (this.team === "Runners" && player.team === "Runners") {
                return player.frozen = false
            };
    };
    this.getFlag = function getFlag() {
        if (this.team === "Runners") {
            console.log(this.name + ' retrieved the flag!');
        return this.flag = true
        } else {
            console.log("Chasers can't get flags");
            return false
        }
    }
}