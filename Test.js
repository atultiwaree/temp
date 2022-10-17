// from the below array find the total score and average score for each student and return all the students below average 50
let arr = [
  {
    name: "n1",
    age: 12,
    subjects: [
      {
        name: "math",
        score: 70,
      },
      {
        name: "english",
        score: 90,
      },
      {
        name: "science",
        score: 60,
      },
    ],
  },
  {
    name: "n2",
    age: 15,
    subjects: [
      {
        name: "math",
        score: 55,
      },
      {
        name: "english",
        score: 80,
      },
      {
        name: "science",
        score: 90,
      },
    ],
  },
  {
    name: "n3",
    age: 12,
    subjects: [
      {
        name: "math",
        score: 58,
      },
      {
        name: "english",
        score: 60,
      },
      {
        name: "science",
        score: 72,
      },
    ],
  },
  {
    name: "n4",
    age: 15,
    subjects: [
      {
        name: "math",
        score: 10,
      },
      {
        name: "english",
        score: 20,
      },
      {
        name: "science",
        score: 30,
      },
    ],
  },
];
const totalScore = [];
const withNameTotal = [];
let sum = 0;
for (const x of arr) {
  let b = x.subjects.map((x, y) => {
    sum = sum + x.score;
  });
  totalScore.push(Math.floor(sum / 3));
  withNameTotal.push({ name: x.name, score: Math.floor(sum / 3) });
  sum = 0;
}
const finalScore = Math.max(...totalScore);
console.log("Total score of Each student 👨‍🎓 ", totalScore);
withNameTotal.forEach((e) => {
  if (e.score == finalScore) {
    console.log("🤜  Final average", e);
    return;
  }
});

// from the below array find the sum of only number elements
let array2 = ["60", 10, 50, "b", "c", "d", "20", 30, "100"];
let arr2Sum = 0;
array2.forEach((elst) => {
  if (elst * 1) {
    arr2Sum = arr2Sum + Number(elst);
  }
});
console.log("Quest 2 Answer 🤾 ", arr2Sum);

// sort the given array in ascending order withot using any predefined array method
let aara3 = [10, -2, 50, 70, 0, -40];

function swap(arr, first_index, second_index) {
  var temp = arr[first_index];
  arr[first_index] = arr[second_index];
  arr[second_index] = temp;
}

function bubbly(arr) {
  var len = arr.length,
    i,
    j,
    stop;

  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}
console.log("Quest 3 Answer 🤾 ", bubbly(aara3));

// reverse the given string without using any predefined string or array method
let string = "abcd ef gh i";
let sampleString = "";
for (let i = string.length - 1; i >= 0; i--) {
  sampleString = sampleString + string[i];
}
console.log("Quest 4 Answer 🤾 ", sampleString);
