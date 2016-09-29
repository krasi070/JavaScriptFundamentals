function moviePrices([title, dayOfWeek]) {
    if (title.toLowerCase() == "the godfather") {
        switch (dayOfWeek.toLowerCase()) {
            case "monday":
                return 12;
            case "tuesday":
                return 10;
            case "wednesday":
            case "friday":
                return 15;
            case "thursday":
                return 12.5;
            case "saturday":
                return 25;
            case "sunday":
                return 30;
            default:
                return "error";
        }
    } else if (title.toLowerCase() == "schindler's list") {
        switch (dayOfWeek.toLowerCase()) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 8.5;
            case "saturday":
            case "sunday":
                return 15;
            default:
                return "error";
        }
    } else if (title.toLowerCase() == "casablanca") {
        switch (dayOfWeek.toLowerCase()) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 8;
            case "saturday":
            case "sunday":
                return 10;
            default:
                return "error";
        }
    } else if (title.toLowerCase() == "the wizard of oz") {
        switch (dayOfWeek.toLowerCase()) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 10;
            case "saturday":
            case "sunday":
                return 15;
            default:
                return "error";
        }
    } else {
        return "error";
    }
}