import { TweenLite, TimelineLite } from 'gsap';

export function modalAnimation(element, handleCallbackAnimationFinished) {
    // Nuevo TimeLine
    let tl = new TimelineLite({ paused: true });

    console.log(element)
    console.log(handleCallbackAnimationFinished)

    let ready = {
        display: 'flex',
        duration: .1
    };

    let visible = {
        opacity: .9,
        duration: 2
    };

    let invisible = {
        opacity: 0,
        duration: 1
    };

    let disapear = {
        display: 'none',
        duration: .1
    };

    tl.add(TweenLite.to(element.current, .1, ready));
    tl.add(TweenLite.to(element.current, 2, visible));
    tl.add(TweenLite.to(element.current, 1, invisible),'+=1');
    tl.add(TweenLite.to(element.current, .1, disapear));
    tl.add(handleCallbackAnimationFinished, '+=.0');

    tl.play();

}
