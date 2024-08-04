#/usr/bin/sh

function fetchfollower() {
 eval 'cd $(dirname $0)'
 eval 'npm start'
}
fetchfollower 

if [[ ${BASH_SOURCE[0]} != "$0" ]]; then
  export -f fetchfollower
else
  fetchfollower.sh "${@}"
  exit $?
fi
