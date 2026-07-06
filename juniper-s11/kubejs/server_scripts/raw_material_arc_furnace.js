ServerEvents.recipes(event => {
    event.custom({
        type: "immersiveengineering:arc_furnace",
        input: {
            item: "irons_spellbooks:raw_mithril"
        },
        additives: [], 
        results: [
            {
                basePredicate: { item: "irons_spellbooks:mithril_scrap" },
                count: 1
            }
        ],
        secondaries: [
            {
                chance: 0.5,
                output: {
                    basePredicate: { item: "irons_spellbooks:mithril_scrap" },
                    count: 1
                }
            }
        ],
        energy: 25600,
        time: 100
    }).id('juniper:arc_furnace/raw_ore_mithril')

    event.custom({
        type: "immersiveengineering:arc_furnace",
        input: {
            item: "aethersdelight:raw_arkenium"
        },
        additives: [], 
        results: [
            {
                basePredicate: { item: "aethersdelight:arkenium_ingot" },
                count: 1
            }
        ],
        secondaries: [
            {
                chance: 0.5,
                output: {
                    basePredicate: { item: "aethersdelight:arkenium_ingot" },
                    count: 1
                }
            }
        ],
        energy: 25600,
        time: 100
    }).id('juniper:arc_furnace/raw_ore_arkenium')
})