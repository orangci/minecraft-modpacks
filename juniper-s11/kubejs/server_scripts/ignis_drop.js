EntityEvents.drops(event => {
    if (event.entity.type === 'cataclysm:ignis') {
        event.addDrop('cataclysm_spellbooks:burning_knowledge_fragment');
    }
});
