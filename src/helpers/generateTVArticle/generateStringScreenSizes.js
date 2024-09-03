function generateStringScreenSizes(sizes) {
    let string = null;
    for (const size of sizes) {
        if (!string) {
            string = `${size} inch (${size * 2.54} cm)`;
        } else {
            string = string.concat(` | ${size} inch (${size * 2.54} cm)`);
        }
    }
    return string;
}

export default generateStringScreenSizes;