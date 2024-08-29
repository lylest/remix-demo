export const getRandomColor = () => {
    const shades = ['#cd2949', '#2d6384', '#635a54', '#c78257', '#4c6b22'];
    return shades[Math.floor(Math.random() * shades.length)];
};