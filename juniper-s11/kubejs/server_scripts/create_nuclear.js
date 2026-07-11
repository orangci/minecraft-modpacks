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

// ServerEvents.tags("item", event => {
//     event.add("createnuclear:all_anti_radiation_armors", [
//         "createqol:shadow_radiance_helmet",
//         "createqol:shadow_radiance_chestplate",
//         "createqol:shadow_radiance_leggings",
//         "createqol:shadow_radiance_boots"
//     ])

//     event.add("createnuclear:anti_radiation_helmet_dye", [
//         "createqol:shadow_radiance_helmet"
//     ])

//     event.add("createnuclear:anti_radiation_helmet_full_dye", [
//         "createqol:shadow_radiance_helmet"
//     ])

//     event.add("createnuclear:anti_radiation_chestplate_dye", [
//         "createqol:shadow_radiance_chestplate"
//     ])

//     event.add("createnuclear:anti_radiation_chestplate_full_dye", [
//         "createqol:shadow_radiance_chestplate"
//     ])

//     event.add("createnuclear:anti_radiation_leggings_dye", [
//         "createqol:shadow_radiance_leggings"
//     ])

//     event.add("createnuclear:anti_radiation_leggings_full_dye", [
//         "createqol:shadow_radiance_leggings"
//     ])

//     event.add("createnuclear:anti_radiation_boots_dye", [
//         "createqol:shadow_radiance_boots"
//     ])

//     event.add("createnuclear:anti_radiation_armor", [
//         "createqol:shadow_radiance_helmet",
//         "createqol:shadow_radiance_chestplate",
//         "createqol:shadow_radiance_leggings",
//         "createqol:shadow_radiance_boots"
//     ])
// })