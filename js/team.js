module.exports = function Team (name) {
    this.name = name;
    this.size = 5;
    this.roster = [];
    this.add = function (player) {
        if (this.roster.length < this.size) {
            this.roster.push(player);
            return (player + ' was added to ' + player);
        }
    }
    // this.won = function () {

    //     }
}