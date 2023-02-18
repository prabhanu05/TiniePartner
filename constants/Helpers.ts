import { KeyValueModel } from '@models/data/KeyValueModel';

export const isNumeric = (val: string) => {
    const regex = /^\d+$/g;
    return regex.test(val);
};

export const isAlphaNumeric = (val: string) => {
    const regex = /^[A-Z0-9]+$/gi;
    return regex.test(val);
};

export const checkEmpty = (data: KeyValueModel[]) => {
    let msg = '';
    let flag = false;

    for (let item of data) {
        if (item.value.trim() === '') {
            flag = true;
            msg += `${item.key}, `;
        }
    }

    if (flag) {
        msg = msg.substring(0, msg.length - 2);
        msg += ' required to complete the registration';
    }

    return msg;
};
