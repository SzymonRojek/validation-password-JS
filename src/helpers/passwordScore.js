const passwordScore = {
  "& quite good": [
    [1, 1, 0],
    [1, 1, 1],
    [1, 1, 2],
    [1, 2, 1],
  ],
  "& good enough": [
    [1, 3, 1],
    [2, 1, 0],
    [2, 2, 0],
    [2, 1, 1],
  ],
  "& really good": [
    [1, 3, 2],
    [1, 2, 2],
    [2, 2, 1],
    [2, 1, 2],
  ],
  "& strong enough": [
    [3, 1, 0],
    [3, 1, 1],
  ],
  "& strong": [
    [2, 2, 2],
    [3, 2, 0],
  ],
  "& very strong": [
    [3, 2, 1],
    [3, 1, 2],
  ],
  "& very very strong": [
    [3, 2, 2],
    [3, 3, 2],
  ],
};

export default passwordScore;
