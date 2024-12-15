export type ServerProblem = {
    id: string
    createdAt: string
    state: string
    power: BigInt | null,
    type: string
    message: boolean[]
    lightBackpack: BigInt[]
    omega: BigInt | null
}

export type Problem = {
    id: string
    R: string | null
    lightBackpack: string[]
    label: string
    message: string
    power: string | null
}

export type Solve = {
    id: string
    power: Number
    type: string
    message: boolean[]
    lightBackpack: Number[]
    omega: Number
    hardBackpack: Number[]
    encodedMessage: 534254
    decodedMessage: boolean[]
    module: Number
    reverseOmega: Number
}

export type SolveResponse = {
    id: string
    createdAt: string
    state: string
    power: BigInt
    type: string
    message: boolean[]
    lightBackpack: BigInt[]
    omega: BigInt
    hardBackpack: BigInt[]
    encodedMessage: BigInt
    decodedMessage: boolean[]
    module: BigInt
    reverseOmega: BigInt
    errorDescription: string
}
