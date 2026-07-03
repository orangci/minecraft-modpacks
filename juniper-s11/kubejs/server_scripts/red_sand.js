ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting(
        [
            CreateItem.of("create:crushed_raw_aluminum", 0.05),
            CreateItem.of("create:crushed_raw_lead", 0.05),
            CreateItem.of("create:crushed_raw_silver", 0.05),
            CreateItem.of("create:crushed_raw_nickel", 0.05),
            CreateItem.of("create:crushed_raw_uranium", 0.05),
            CreateItem.of("minecraft:stick", 0.2),
            CreateItem.of("minecraft:dead_bush", 0.15),
            CreateItem.of("minecraft:gold_nugget", 0.1),
        ],
        "minecraft:red_sand",
        "createsifter:advanced_brass_mesh"
    )
        .processingTime(500)
        .advancedSifter(true)
        .waterlogged(false)
})