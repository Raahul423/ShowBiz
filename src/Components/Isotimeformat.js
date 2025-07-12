
const Isotimeformat=(datetime)=>{
    const date = new Date(datetime)
    const time = date.toLocaleTimeString('en-US',{
        hour: '2-digit',
        minute:'2-digit',
        hour12: true,
    });
    return time;
}

export default Isotimeformat;