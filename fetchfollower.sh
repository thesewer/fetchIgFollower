#/usr/bin/sh

function fetchfollower() {
 eval 'cd $(dirname $0) || cd ~/deps/fetchFollower/'
 eval 'npm start'
}
fetchfollower
