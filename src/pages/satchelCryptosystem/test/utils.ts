import { Problem, ServerProblem } from '@entity/task'

export const mapResponseToProblem = ({id, omega, lightBackpack, type, message, power}: ServerProblem): Problem => ({
    id,
    R: omega ? String(omega) : '0',
    lightBackpack: lightBackpack.map(String),
    label: type,
    message: message.map(Number).join(''),
    power: power ? String(power) : '0',
})