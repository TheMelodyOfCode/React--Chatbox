# REACT - Chatbox

#### Overview
> the exercise in this project was about:  
> auto-growing chatbox  
> useLayoutEffect vs. useEffect  
> useImperativeHandle  

##### useLayoutEffect
> If your effect is mutating the DOM (via a DOM node ref) and the DOM mutation will change  
 the appearance of the DOM node between the time that it is rendered and your effect mutates it,  
then you don't want to use useEffect. You'll want to use useLayoutEffect.  
> - https://kentcdodds.com/blog/useeffect-vs-uselayouteffect  

##### RULE: useLayoutEffect vs. useEffect
> To bring it down to a rule, you use useEffect almost all of the time, and you useLayoutEffect if the side effect  that you are performing makes an observable change to the DOM that will require the browser to paint that update that you've made.  

##### useImperativeHandle
> imperative methods scrollToTop and scrollToBottom on a ref so the parent component can call those directly.  

#### Credit
>  - Credit goes to **Kent C. Dodds** </br>
 You can find more information about Epic-React here:</br> 
 https://epicreact.dev/</br>
 It's worth checking out !  
