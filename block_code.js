const average = (numbers) => {
  let startTime = new Date().getTime();
  let len = numbers,
    sum = 0,
    i;

  if (len === 0) {
    return 0;
  }

  for (i = 0; i < len; i++) {
    console.log("i :: ", i);
    sum += i;
  }

  let endTime = new Date().getTime();
  alert("Average - ", sum / len);
};

const hello = () => {
  alert("Hello World !!");
};

/*
Paste the above code in browser dev tool console
and try to call average(10000) and hello one by one
*/
