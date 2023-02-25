const PlayingClassName = "playing";

const keyPressHandler = (event: KeyboardEvent) => {
    const code = event.key.charCodeAt(0);
    const pad = document.querySelector(`div[data-key="${code}"]`);
    const audio: HTMLAudioElement | null = document.querySelector(`audio[data-key="${code}"]`);

    if (pad && audio) {
        audio.currentTime = 0;
        pad.classList.add(PlayingClassName);
        audio.play();
    }
}

const removeTransition = (event: Event) => {
    const transitionEvent = event as TransitionEvent;
    if (transitionEvent.propertyName !== "transform" || transitionEvent.target === null) {
        return;
    }
    transitionEvent.target.classList.remove(PlayingClassName);
}

const handleTransitionEnd = () => {
    const keys = document.querySelectorAll('.pad');
    keys.forEach((value) => value.addEventListener("transitionend", removeTransition));
}

document.addEventListener("keydown", keyPressHandler);
handleTransitionEnd();