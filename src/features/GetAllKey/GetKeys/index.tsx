export const getAllKey = (num: number, upper: boolean, lower: boolean, number: boolean, symbol: boolean) => {
    let text = '';
    let password = '';

    if (upper) {
        for (let item = 65; item < 90; item++) {
            text += String.fromCharCode(item);
        }
    }

    if (lower) {
        for (let item = 97; item < 122; item++) {
            text += String.fromCharCode(item);
        }
    }

    if (number) {
        for (let item = 48; item < 58; item++) {
            text += String.fromCharCode(item);
        }
    }

    if (symbol) {
        for (let item = 33; item < 47; item++) {
            text += String.fromCharCode(item);
        }

        for (let item = 58; item < 64; item++) {
            text += String.fromCharCode(item);
        }

        for (let item = 91; item < 96; item++) {
            text += String.fromCharCode(item);
        }

        for (let item = 123; item < 126; item++) {
            text += String.fromCharCode(item);
        }
    }

    for (let item = 0; item < num; item++) {
        password += text[Math.floor(Math.random() * text.length)]
    }

    if (!upper && !lower && !number && !symbol) {
        password = '';
    }

    return password
}