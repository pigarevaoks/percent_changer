export const filter = (array, el) => array.filter(item => item.name !== el.name);

export const getMin = array => {
    return array.reduce((min, item) => min.percent < item.percent ? min : item, array[0]);
}

export const getMax = array => {
    return array.reduce((max, item) => max.percent > item.percent ? max : item, array[0]);
}

export const toRound = number => Number((number).toFixed(2));