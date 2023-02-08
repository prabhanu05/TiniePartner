export const isNumeric = (val: string) => {
    const regex = /[0-9]/g;
    return regex.test(val);
};
