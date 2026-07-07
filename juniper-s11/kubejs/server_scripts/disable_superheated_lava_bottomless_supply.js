ServerEvents.tags("fluid", event => {
    event.remove("create:bottomless/allow", "createqol:superheated_lava")
    event.remove("create:bottomless/allow", "createqol:flowing_superheated_lava")
})

ServerEvents.tags("item", event => {
    event.remove("create:bottomless/allow", "createqol:superheated_lava_bucket")
})