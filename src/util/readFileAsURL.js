export const readFileAsURL = (file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);

    reader.readAsDataURL(file);
});