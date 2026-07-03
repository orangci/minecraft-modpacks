ServerEvents.recipes(event => {
    event.recipes.create.crushing(
        [
            CreateItem.of("createsifter:crushed_end_stone", 1),
            CreateItem.of("minecraft:end_stone", 0.25)
        ],
        "minecraft:end_stone"
    )

    event.recipes.create.crushing(
        [
            CreateItem.of("createsifter:crushed_end_stone", 0.25),
            CreateItem.of("aeronautics:end_stone_powder", 1)
        ],
        "createsifter:crushed_end_stone"
    )

    event.recipes.create.milling(
        CreateItem.of("aeronautics:end_stone_powder", 1),
        "createsifter:crushed_end_stone"
    )
    
    event.remove([
        {
            id: "aeronautics:crushing/end_stone_powder"
        },
        {
            id: "createsifter:crushing/crushed_end_stone"
        }
    ])
})
