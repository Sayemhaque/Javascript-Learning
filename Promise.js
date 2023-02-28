// What is Promise ?

const data = [
  { id: 1, username: "Md sayem" },
  { id: 2, username: "md rakin" },
  { id: 3, username: "shakil" },
];

const pr = myPromise(data)
pr.then((data) => displayData(data))
.catch((error) => console.log(error));

function myPromise(data) {
  return new Promise(function (resolve, reject) {
    if (!data.length > 0) {
      const error = new Error("data rejected");
      reject(error);
    } else {
      setTimeout(function () {
          resolve(data);
        }, 5000);
    }
  });
}


function displayData (data) {
    data.map(item => console.log(item))
}

