import React, { useState } from 'react';
import './App.css';

export const NumberFormats = Object.freeze({
    Decimal: 'Decimal',
    Hexadecimal: 'Hexadecimal',
    Binary: 'Binary'
});

export const NumberBases = Object.freeze({
    Decimal: 10,
    Hexadecimal: 16,
    Binary: 2
});

export function getNumberBase(format) {
    return NumberBases[format];
}

export function FormatSelector({ value, onChange }) {
    return (
        <select value={value} onChange={onChange}>
            <option value={NumberFormats.Decimal}>{NumberFormats.Decimal}</option>
            <option value={NumberFormats.Hexadecimal}>{NumberFormats.Hexadecimal}</option>
            <option value={NumberFormats.Binary}>{NumberFormats.Binary}</option>
        </select>
    );
}

export default function Format() {
    return { NumberFormats, NumberBases, getNumberBase, FormatSelector };
}
