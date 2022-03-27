const passwordScore = {
  "& quite good": [
    [1, 1, 1],
    [1, 1, 2],
    [1, 2, 1],
  ],
  "& good enough": [
    [1, 3, 1],
    [2, 1, 1],
  ],
  "& really good": [
    [1, 3, 2],
    [1, 2, 2],
    [2, 2, 1],
    [2, 1, 2],
  ],
  "& strong enough": [[3, 1, 1]],
  "& strong": [
    [2, 3, 1],
    [2, 2, 2],
  ],
  "& very strong": [
    [2, 3, 2],
    [3, 2, 1],
    [3, 1, 2],
  ],
  "& very very strong": [
    [3, 3, 1],
    [3, 2, 2],
    [3, 3, 2],
  ],
};

export default passwordScore;

/*
111+-
121+-
122+-
221+-
211+-
212+-
112+-
222+-
311+-
321+-
322+-
312+-
331+-
332+-
131+-
132+-
231+-
232+-
*/
