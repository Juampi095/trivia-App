const gifs = [
    'https://lottie.host/b4907ced-3807-4fc7-9bf4-f3b8d321ffc3/qOI4YNzCvP.json',
    'https://lottie.host/dc3a7526-ed17-4cbf-b5e3-9a215369b992/hZw4B8Xs0f.json',
    'https://lottie.host/7730812e-cdd3-456f-bd5e-45fb4b231ce4/t4C5CMzQgR.json',
    'https://lottie.host/c75c018c-a231-4808-9fae-9a990aeffb63/hxqddluqrq.json',
    'https://lottie.host/857a01bb-02e2-4efb-95ef-6b7bde71074e/0tpIudzaA8.json',
]

const getRandomGif = (): string => {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    return gifs[randomIndex];
}

export const GifService = {
    getRandomGif,
}