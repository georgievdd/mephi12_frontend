export const mapResponseToProblem = ({ id, omega, lightBackpack, type, message, power }) => ({
    id,
    R: omega ? String(omega) : '0',
    lightBackpack: lightBackpack.map(String),
    label: type,
    message: message.map(Number).join(''),
    power: power ? String(power) : '0',
});
