import Player from "@vimeo/player";
import _ from "lodash.throttle";
const player = new Player(document.querySelector("#vimeo-player"))
function start() {
    const seconds = localStorage.getItem("currentTime");
    if(!seconds) return;
    player.setCurrentTime(seconds);
}
start();
function update({ seconds }) { localStorage.setItem("currentTime", seconds) }
player.on("timeupdate", _(update, 1000));