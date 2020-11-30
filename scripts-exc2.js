console.log(`Link is OK`);

let color = `purple`;
let number = 10;
let word = `cool`;

if (color === `purple`) {
    $(`.n`).css(`background`, `purple`);
};

if (number > 100) {
    $(`.e`).text(`whoah, that's a big number.`);
} else {
    $(`.e`).text(`just a regular number, please.`);
};

if (word === `cool`) {
    $(`#s`).text(` Power of DOM`);
};