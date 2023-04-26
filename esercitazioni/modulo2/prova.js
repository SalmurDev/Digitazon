let tree = {
    'value': 'Arwen',
    'left': {
        'value': 'Earendil',
        'left': {
            'value': 'Nimloth the Fair',
            'left': 'null',
            'right': 'null'
        },
        'right': {
            'value': 'Galadriel',
            'left': {
                'value': 'Eowin',
                'left': 'null',
                'right': 'null'
            },
            'right': 'null'
        },
    },
    'right': {
        'value': 'Shelob',
        'left': 'null',
        'right': 'null'
    }
}

console.log(tree.value)
console.log(tree['value'])