ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        "createnuclear:steel_ingot",
        [
            "minecraft:iron_ingot",
            "createnuclear:coal_dust"
        ]
    ).heated()
    
    event.remove([
        {
            id: "createnuclear:mixing/steel"
        },
    ])
})
