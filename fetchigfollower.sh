#/usr/bin/sh
# for Ztmexluis installation scripts

function fetchIgfollower() {
 eval 'cd $(dirname $0)'
 eval 'npm install'
 eval 'npm start'
}
fetchIgfollower
