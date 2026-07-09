LootJS.modifiers(event => {
    const fishingTable = event.addTableModifier("minecraft:gameplay/fishing/treasure")
    
    for (let i = 1; i <= 4; i++) {
        fishingTable.addLoot(
            LootEntry.of(
                `minecraft:enchanted_book[minecraft:stored_enchantments={levels:{"jlme:advanced_protection":${i}}}]`
            )
            .withWeight(1)
        )
    }
});