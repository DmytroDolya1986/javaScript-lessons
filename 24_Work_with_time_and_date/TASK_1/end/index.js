const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const getDayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    return daysOfWeek [new Date(dateInFuture).getDay()];
};
const result = getDayOfWeek(new Date(2019, 0, 1), 14);

console.log(result);