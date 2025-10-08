module.exports =
{
    superName: {
        id: 'superName',
        name: 'superName',
        label: 'Super Name',
        type: 'text',
        required: true,
        placeholder: 'e.g., Superman'
    },

    realName: {
        id: 'realName',
        name: 'realName',
        label: "Real Name",
        type: 'text',
        required: true,
        placeholder: 'e.g., Clark Kent'
    },

    superpower: {
        id: 'superpower',
        name: 'superpower',
        label: 'Superpower',
        type: 'text',
        required: true,
        placeholder: 'e.g., Flying'
    },

    powerLevel: {
        id: 'powerLevel',
        name: 'powerLevel',
        label: 'Power Level',
        type: 'number',
        required: true,
        min: 1,
        max: 10
    },

    secretIdentity: {
        id: 'secretIdentity',
        name: 'secretIdentity',
        label: 'Has Secret Identity',
        type: 'checkbox',
        required: false,
    },

}