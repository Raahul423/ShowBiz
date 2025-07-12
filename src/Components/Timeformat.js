const Timeformat = (minutes)=>{
    let hours = Math.floor(minutes / 60);
    let remainingminutes = minutes % 60;
    return (`${hours}h ${remainingminutes}min`)
}

export default Timeformat
