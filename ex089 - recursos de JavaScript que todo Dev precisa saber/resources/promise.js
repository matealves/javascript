// promise based = > then e catch's
function loadSomeData() {
  return new Promise((resolve, reject) => {
    console.log("Loading...");
    setTimeout(() => {
      const data = { id: 1506, user: "matealves" };
      resolve(data);
    }, 1500);
  });
}

loadSomeData()
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((err) => console.log(err));
