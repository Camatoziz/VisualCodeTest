function warnTheSheep(queue) {
    queue.reverse()
    for (var i = 0; i < queue.length; i++ ) {
        if (queue[i] == "wolf" && i == 0) {
            return "Pls go away and stop eating my sheep"
        } else if (queue[i] == "wolf") {
            return "Oi! Sheep number " + i + "! You are about to be eaten by a wolf!"
        }
    }
}