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

    superPower: {
        id: 'superPower',
        name: 'superPower',
        label: 'Super Power',
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
        placeholder: "Enter power level",
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