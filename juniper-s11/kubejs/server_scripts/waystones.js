ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting(
        "waystones:warp_stone",
        [
            ' PPP ',
            'PSISP',
            'PIEIP',
            'PSISP',
            ' PPP '
        ],
        {
            P: "endermanoverhaul:corrupted_pearl",
            I: "cataclysm:ignitium_ingot",
            S: "minecraft:echo_shard",
            E: "minecraft:dragon_egg"
        }
    )

    event.shaped(
        Item.of("waystones:waystone", 1),
        [
            'SLS',
            'SWS',
            'NDN'
        ],
        {
            S: "minecraft:stone",
            L: "minecraft:lodestone",
            W: "waystones:warp_stone",
            N: "minecraft:netherite_ingot",
            D: "nameless_trinkets:ultimate_dust"
        }
    )

    event.shaped(
        Item.of("waystones:waystone", 1),
        [
            ' S ',
            'SWS',
            ' S ',
        ],
        {
            S: "minecraft:stone",
            W: "#juniper:waystones",
        }
    )

    event.shaped(
        Item.of("waystones:mossy_waystone", 1),
        [
            'SLS',
            'SWS',
            'NDN'
        ],
        {
            S: "minecraft:mossy_stone_bricks",
            L: "minecraft:lodestone",
            W: "waystones:warp_stone",
            N: "minecraft:netherite_ingot",
            D: "nameless_trinkets:ultimate_dust"
        }
    )

    event.shaped(
        Item.of("waystones:mossy_waystone", 1),
        [
            ' S ',
            'SWS',
            ' S ',
        ],
        {
            S: "minecraft:mossy_stone_bricks",
            W: "#juniper:waystones",
        }
    )

    event.shaped(
        Item.of("waystones:sandy_waystone", 1),
        [
            'SLS',
            'SWS',
            'NDN'
        ],
        {
            S: "minecraft:chiseled_sandstone",
            L: "minecraft:lodestone",
            W: "waystones:warp_stone",
            N: "minecraft:netherite_ingot",
            D: "nameless_trinkets:ultimate_dust"
        }
    )

    event.shaped(
        Item.of("waystones:sandy_waystone", 1),
        [
            ' S ',
            'SWS',
            ' S ',
        ],
        {
            S: "minecraft:chiseled_sandstone",
            W: "#juniper:waystones",
        }
    )

    event.shaped(
        Item.of("waystones:deepslate_waystone", 1),
        [
            'SLS',
            'SWS',
            'NDN'
        ],
        {
            S: "minecraft:deepslate",
            L: "minecraft:lodestone",
            W: "waystones:warp_stone",
            N: "minecraft:netherite_ingot",
            D: "nameless_trinkets:ultimate_dust"
        }
    )

    event.shaped(
        Item.of("waystones:deepslate_waystone", 1),
        [
            ' S ',
            'SWS',
            ' S ',
        ],
        {
            S: "minecraft:deepslate",
            W: "#juniper:waystones",
        }
    )

    event.shaped(
        Item.of("waystones:blackstone_waystone", 1),
        [
            'SLS',
            'SWS',
            'NDN'
        ],
        {
            S: "minecraft:blackstone",
            L: "minecraft:lodestone",
            W: "waystones:warp_stone",
            N: "minecraft:netherite_ingot",
            D: "nameless_trinkets:ultimate_dust"
        }
    )

    event.shaped(
        Item.of("waystones:blackstone_waystone", 1),
        [
            ' S ',
            'SWS',
            ' S ',
        ],
        {
            S: "minecraft:blackstone",
            W: "#juniper:waystones",
        }
    )

    event.shaped(
        Item.of("waystones:end_stone_waystone", 1),
        [
            'SLS',
            'SWS',
            'NDN'
        ],
        {
            S: "minecraft:end_stone_bricks",
            L: "minecraft:lodestone",
            W: "waystones:warp_stone",
            N: "minecraft:netherite_ingot",
            D: "nameless_trinkets:ultimate_dust"
        }
    )

    event.shaped(
        Item.of("waystones:end_stone_waystone", 1),
        [
            ' S ',
            'SWS',
            ' S ',
        ],
        {
            S: "minecraft:end_stone_bricks",
            W: "#juniper:waystones",
        }
    )

    event.shaped(
        Item.of("waystones:warp_plate", 2),
        [
            'SDS',
            'DHD',
            'NWN'
        ],
        {
            S: "minecraft:stone_bricks",
            W: "waystones:warp_stone",
            H: "waystones:dormant_shard",
            N: "minecraft:netherite_ingot",
            D: "waystones:warp_dust"
        }
    )

    event.remove([
        {
            id: "waystones:waystone"
        },
        {
            id: "waystones:mossy_waystone"
        },
        {
            id: "waystones:sandy_waystone"
        },
        {
            id: "waystones:deepslate_waystone"
        },
        {
            id: "waystones:blackstone_waystone"
        },
        {
            id: "waystones:end_stone_waystone"
        },
        {
            id: "waystones:warp_stone"
        },
        {
            id: "waystones:warp_plate"
        }
    ])
})

ServerEvents.tags("item", event => {
    event.add(
        "juniper:waystones", 
        "waystones:waystone", 
        "waystones:mossy_waystone", 
        "waystones:sandy_waystone", 
        "waystones:deepslate_waystone", 
        "waystones:blackstone_waystone", 
        "waystones:end_stone_waystone"
    )
})