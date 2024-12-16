import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { InlineMath } from 'react-katex';
import { Backpack } from './Backpack';
import { satchelCryptosystem } from '../models/mocks';
const { hardBackpack, lightBackpack, R, S, T } = satchelCryptosystem;
const renderLatexMatrix = (matrix) => {
    return ("\\begin{pmatrix}\n" +
        matrix
            .map((row, index) => {
            if (index === matrix.length)
                return row.join(" & ") + "\n";
            else
                return row.join(" & ") + "\\\\\n";
        })
            .join("") +
        "\\end{pmatrix}");
};
export const SatchelCryptosystemDemo = () => {
    return (_jsxs("div", { children: [_jsxs("h3", { children: ["R = ", R] }), _jsxs("h3", { children: ["S = ", S] }), _jsxs("h3", { children: ["T = ", T] }), _jsxs("h3", { children: ["(S, T) = (", S, ", ", T, ")"] }), _jsx(Backpack, { ...lightBackpack }), _jsx(Backpack, { ...hardBackpack }), _jsx("p", { children: "________________________________________" }), _jsx("h3", { children: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435" }), _jsx("h3", { children: "M = (1, 0, 0, 1, 1)" }), _jsx(InlineMath, { math: "C = M * b = M_0 * b_0 + M_1 * b_1 + M_2 * b_2 + M_3 * b_3 + M_4 * b_4 + + M_5 * b_5 = 0987 + 2010 + 0656 = 3653" }), _jsx("h3", { children: "C = 3653" }), _jsx(InlineMath, { math: "C * S mod T = 3653 * 59 = 215527 = 325 mod 2418" }), _jsx("h3", { children: "M = 25" })] }));
};
