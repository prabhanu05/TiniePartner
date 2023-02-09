export const isNumeric = (val: string) => {
    const regex = /^\d+$/g;
    return regex.test(val);
};
