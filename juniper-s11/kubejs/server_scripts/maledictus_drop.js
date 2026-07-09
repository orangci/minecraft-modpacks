const MALEDICTUS_MIN_DROP = 2;
const MALEDICTUS_MAX_DROP = 6;

EntityEvents.drops(event => {
    if (event.entity.type === 'cataclysm:maledictus') {
        const count = Math.floor(Math.random() * (MALEDICTUS_MAX_DROP - MALEDICTUS_MIN_DROP + 1)) + MALEDICTUS_MIN_DROP;

        event.addDrop(
            Item.of('cataclysm_spellbooks:frozen_knowledge_fragment', count)
        );
    }
});
