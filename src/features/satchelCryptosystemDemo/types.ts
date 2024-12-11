export interface Light {
    left: number
    len: number
    color: string
}

export interface Backpack {
    numbers: string[]
    literal: string
    light?: Light
}
  