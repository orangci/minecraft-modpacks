ServerEvents.recipes(event => {
    event.remove([
        // block to ingot
        {
            id: "createnuclear:crafting/crafting/steel_ingot_from_decompacting"
        },
        {
            id: "createnuclear:crafting/steel_ingot_from_decompacting"
        },

        // ingot to nugget
        {
            id: "createnuclear:crafting/crafting/steel_nugget_from_decompacting"
        },
        {
            id: "createnuclear:crafting/steel_nugget_from_decompacting"
        },

        // nugget to ingot
        {
            id: "immersiveengineering:crafting/nugget_steel_to_ingot_steel"
        },
        {
            id: "createnuclear:crafting/crafting/steel_ingot_from_compacting"
        },
        {
            id: "createnuclear:crafting/steel_ingot_from_compacting"
        },

        // ingot to block
        {
            id: "immersiveengineering:crafting/ingot_steel_to_storage_steel"
        },
        {
            id: "createnuclear:crafting/crafting/steel_block_from_compacting"
        },
        {
            id: "createnuclear:crafting/steel_block_from_compacting"
        }
    ])

    // block to ingot
    event.shapeless(
        Item.of("createnuclear:steel_ingot", 9),
        [
            "createnuclear:steel_block"
        ]
    )

    event.shapeless(
        Item.of("immersiveengineering:ingot_steel", 9),
        [
            "immersiveengineering:storage_steel"
        ]
    )

    // ingot to nugget
    event.shapeless(
        Item.of("createnuclear:steel_nugget", 9),
        [
            "createnuclear:steel_ingot"
        ]
    )

    event.shapeless(
        Item.of("immersiveengineering:nugget_steel", 9),
        [
            "immersiveengineering:ingot_steel"
        ]
    )

    // nugget to ingot
    event.shaped(
        "createnuclear:steel_ingot",
        [
            "NNN",
            "NNN",
            "NNN"
        ],
        {
            N: "createnuclear:steel_nugget"
        }
    )

    event.shaped(
        "immersiveengineering:ingot_steel",
        [
            "NNN",
            "NNN",
            "NNN"
        ],
        {
            N: "immersiveengineering:nugget_steel"
        }
    )

    // ingot to block
    event.shaped(
        "createnuclear:steel_block",
        [
            "III",
            "III",
            "III"
        ],
        {
            I: "createnuclear:steel_ingot"
        }
    )

    event.shaped(
        "immersiveengineering:storage_steel",
        [
            "III",
            "III",
            "III"
        ],
        {
            I: "immersiveengineering:ingot_steel"
        }
    )
})