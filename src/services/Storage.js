import { useState } from "react";

export const saveToLocal = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocal = (key) => {
    const data = sessionStorage.getItem(key);
    return JSON.parse(data);
};

export const removeFromLocal = (key) => {
    sessionStorage.removeItem(key);
};