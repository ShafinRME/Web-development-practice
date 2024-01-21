let Friends = ['Ronoue', 'Samee', 'Monaffff', 'Pathdannnnnnnn', 'Heloooooo', 'Gelooo'];

function BestFriend(friends) {
    let max = friends[0].length;

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length > max) {
            max = friends[i].length;
        }
        else {
            continue;
        }
    }
    let bestFriend = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == max) {
            let pushingArray = bestFriend.push(friends[i]);
        }
        else {
            continue;
        }
    }

    return bestFriend;
}

let bestFriendOut = BestFriend(Friends);
console.log(bestFriendOut);