// 4 substitutions,
// each consisting of 8 value mappings,
// one for each nibble (4 bits) of a half-block of 32 bits
export const shuffles = [
    [  0,3,1,2  ],
    [  2,3,1,0  ],
    [  1,3,0,2  ],
    [  1,2,3,0  ],
    [  2,1,3,0  ],
    [  0,1,3,2  ],
    [  1,2,0,3  ],
    [  2,3,0,1  ]
]
