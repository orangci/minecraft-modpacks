const blockedEntities = [
    "naturalist:firefly",
    "naturalist:butterfly"
]

EntityEvents.checkSpawn(blockedEntities, (event) => {
    event.cancel()
})