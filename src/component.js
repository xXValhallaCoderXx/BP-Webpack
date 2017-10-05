import styles from './assets/styles/main.css';

export default (text = 'Hello') => {
    const element = document.createElement('div');
    console.log('THIS IS THE CLASSNMAE:', styles.redButton)
    element.className = styles.redButton;
    element.innerHTML = text;
    
    element.onclick = () => {
        import('./lazy').then((lazy) => {
            element.textContent = lazy.default;
        }).catch((err) => {
            console.error(err);
        });
    };
    return element;
};