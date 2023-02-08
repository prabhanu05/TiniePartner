export const isNumeric = (val: string) => {
    const regex = /[0-9]/gi;
    return regex.test(val);
};
