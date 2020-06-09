const sequence = ["X", "A", "Y", "M", "D"];
const pattern1 = "A";
const pattern2 = "Z";

function dnaPatternDetector(dnaSequence, pattern) {
  for (let i = 0; i < dnaSequence.length; i +=1) {
    if (dnaSequence[i] === pattern) {
      return true;
    };
    console.log("Looped!");
  }
  return false;
}

dnaPatternDetector(sequence, pattern1);

dnaPatternDetector(sequence, pattern2);