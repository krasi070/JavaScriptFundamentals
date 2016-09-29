function lastMonth([day, month, year]) {
    let lastDayOfPreviousMonth = new Date(year, month - 1, 0);

    console.log(lastDayOfPreviousMonth.getDate());
}