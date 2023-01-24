let d1 = "29/08/2020 10:40:00";
let d2 = "12/02/2020 12:42:00";

let diff = moment(d2, "DD/MM/YYYY HH:mm:ss").diff(
  moment(d1, "DD/MM/YYYY HH:mm")
);

console.log(moment.duration(diff).asDays());
console.log(moment.duration(diff).asMonths());
