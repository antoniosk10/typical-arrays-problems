exports.min = function min(array = 0) {
    if (array === 0 || !array.length) {
        return 0;
    } else {
        let min = array[0];
        array.forEach((el) => {
            if (el < min) min = el;
        });
        return min;
    }

}

exports.max = function max(array = 0) {
    if (array === 0 || !array.length) {
        return 0;
    } else {
        let max = array[0];
        array.forEach((el) => {
            if (el > max) max = el;
        });
        return max;
    }
}

exports.avg = function avg(array = 0) {
    if (array === 0 || !array.length) {
        return 0;
    } else {
        let summ = 0;
        array.forEach((el) => {
            summ += el;
        });
        return summ / array.length;
    }
}