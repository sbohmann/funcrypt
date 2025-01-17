// 4 substitutions,
// each consisting of 8 value mappings,
// one for each nibble (4 bits) of a half-block of 32 bits
export const substitutions = [
    [
        [6, 10, 12, 0, 14, 7, 1, 13, 5, 2, 4, 8, 11, 15, 9, 3],
        [11, 4, 12, 3, 14, 10, 5, 15, 9, 8, 6, 0, 2, 13, 7, 1],
        [7, 3, 9, 1, 12, 11, 5, 14, 4, 10, 13, 2, 15, 0, 6, 8],
        [3, 12, 8, 4, 11, 15, 13, 10, 1, 5, 0, 9, 14, 2, 6, 7],
        [2, 4, 10, 12, 15, 14, 1, 8, 0, 9, 13, 7, 5, 11, 6, 3],
        [7, 9, 3, 4, 5, 0, 15, 6, 13, 2, 8, 1, 12, 10, 11, 14],
        [3, 13, 11, 1, 8, 2, 7, 6, 14, 5, 10, 12, 15, 4, 9, 0],
        [11, 5, 13, 12, 3, 8, 2, 4, 14, 6, 10, 9, 7, 15, 0, 1]
    ],
    [
        [15, 1, 3, 8, 9, 13, 12, 10, 4, 11, 6, 14, 0, 7, 2, 5],
        [4, 13, 1, 2, 11, 6, 0, 8, 14, 15, 7, 10, 5, 3, 9, 12],
        [10, 12, 1, 13, 7, 8, 6, 15, 5, 3, 14, 11, 9, 2, 0, 4],
        [1, 0, 8, 10, 7, 11, 2, 14, 13, 12, 9, 3, 15, 5, 4, 6],
        [12, 3, 6, 4, 13, 8, 14, 0, 1, 9, 5, 2, 11, 10, 15, 7],
        [9, 11, 10, 15, 5, 14, 8, 13, 7, 2, 6, 3, 12, 1, 4, 0],
        [14, 13, 9, 15, 4, 0, 3, 12, 6, 8, 10, 7, 1, 2, 5, 11],
        [6, 10, 4, 15, 2, 1, 0, 14, 13, 8, 12, 11, 5, 3, 9, 7]
    ],
    [
        [5, 8, 2, 4, 1, 7, 3, 14, 10, 9, 13, 15, 11, 6, 12, 0],
        [1, 9, 0, 8, 6, 13, 14, 12, 10, 2, 11, 15, 4, 5, 7, 3],
        [14, 10, 12, 3, 5, 11, 1, 0, 4, 13, 8, 2, 15, 7, 6, 9],
        [0, 14, 11, 12, 7, 6, 8, 1, 9, 15, 5, 13, 10, 2, 3, 4],
        [9, 1, 14, 5, 7, 11, 10, 0, 8, 6, 2, 13, 4, 15, 12, 3],
        [9, 14, 2, 8, 5, 0, 10, 4, 11, 7, 13, 12, 6, 1, 15, 3],
        [11, 7, 4, 1, 6, 12, 0, 9, 3, 10, 5, 8, 2, 14, 13, 15],
        [4, 10, 8, 1, 11, 6, 2, 13, 12, 3, 9, 14, 0, 15, 5, 7]
    ],
    [
        [6, 13, 11, 7, 15, 9, 0, 1, 5, 8, 3, 14, 2, 4, 12, 10],
        [11, 4, 7, 12, 3, 15, 5, 13, 8, 14, 0, 2, 9, 1, 6, 10],
        [3, 12, 6, 4, 13, 5, 15, 10, 7, 8, 9, 0, 14, 2, 1, 11],
        [8, 11, 1, 5, 12, 10, 13, 3, 14, 4, 7, 9, 2, 0, 6, 15],
        [7, 5, 2, 12, 0, 11, 13, 3, 1, 15, 14, 10, 6, 4, 9, 8],
        [7, 8, 2, 11, 9, 13, 3, 14, 4, 10, 12, 0, 1, 6, 5, 15],
        [9, 6, 0, 11, 7, 14, 2, 1, 8, 13, 10, 5, 15, 3, 4, 12],
        [7, 9, 15, 13, 12, 11, 2, 0, 10, 5, 6, 14, 3, 8, 1, 4]
    ]
]