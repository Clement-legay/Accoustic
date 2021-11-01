export default {
    name: 'Accords',
    data() {
        return {
            lezAccords: [
                {data: [0, 0, 0, 3], name:"C"},
                {data: [2, 2, 2, 0], name:"D"},
                {data: [4, 4, 4, 2], name:"E"},
                {data: [2, 0, 1, 0], name:"F"},
                {data: [0, 2, 3, 2], name:"G"},
                {data: [2, 1, 0, 0], name:"A"},
                {data: [4, 3, 2, 2], name:"B"},
            ],
            septieme: [
                {data: [0, 0, 0, 1], name:"C7"},
                {data: [2, 2, 2, 3], name:"D7"},
                {data: [1, 2, 0, 2], name:"E7"},
                {data: [2, 3, 1, 0], name:"F7"},
                {data: [0, 2, 1, 2], name:"G7"},
                {data: [0, 1, 0, 0], name:"A7"},
                {data: [2, 3, 2, 2], name:"B7"}
            ],
            mineure: [
                {data: [0, 3, 3, 3], name:"Cm"},
                {data: [2, 2, 1, 0], name:"Dm"},
                {data: [0, 4, 3, 2], name:"Em"},
                {data: [1, 0, 1, 3], name:"Fm"},
                {data: [0, 2, 3, 1], name:"Gm"},
                {data: [2, 0, 0, 0], name:"Am"},
                {data: [3, 2, 2, 2], name:"Bm"}
            ],
            maj7: [
                {data: [0, 0, 0, 2], name:"Cmaj7"},
                {data: [2, 2, 2, 4], name:"Dmaj7"},
                {data: [1, 3, 0, 2], name:"Emaj7"},
                {data: [2, 4, 1, 3], name:"Fmaj7"},
                {data: [0, 2, 2, 2], name:"Gmaj7"},
                {data: [2, 2, 0, 0], name:"Amaj7"},
                {data: [3, 3, 2, 2], name:"Bmaj7"}
            ],
            m7: [
                {data: [3, 3, 3, 3], name:"Cm7"},
                {data: [2, 2, 1, 3], name:"Dm7"},
                {data: [0, 2, 0, 2], name:"Em7"},
                {data: [1, 3, 1, 3], name:"Fm7"},
                {data: [0, 2, 1, 1], name:"Gm7"},
                {data: [0, 4, 3, 3], name:"Am7"},
                {data: [2, 2, 2, 2], name:"Bm7"}
            ],
        }
    }
}