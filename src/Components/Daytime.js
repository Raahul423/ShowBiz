const Daytime = (date) => {
    const day = new Date(date).toLocaleString('en-US', {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    })
    return day;

}
export default Daytime;