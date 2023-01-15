# REACT - Chatbox

#### Overview
> the exercise in this project was about:  
> auto-growing chatbox  
> useLayoutEffect vs. useEffect  
> useImperativeHandle 

##### General functionality:  
>> recieve messages from firebase   
>> add or remove messages from an auto-growing chatbox   
>> scroll top to bottom buttons  

> Hooks used in this exercise:  
>> useState</br>
>> useEffect</br>
>> useRef</br>
>> useReducer</br>
>> useLayoutEffect</br>
>> useCallback</br>
>> useImperativeHandle</br>

##### useLayoutEffect
> If your effect is mutating the DOM (via a DOM node ref) and the DOM mutation will change  
 the appearance of the DOM node between the time that it is rendered and your effect mutates it,  
 in this case you don't want to use useEffect. You'll want to use useLayoutEffect.  
> - https://kentcdodds.com/blog/useeffect-vs-uselayouteffect  

##### RULE: useLayoutEffect vs. useEffect
> To bring it down to a rule, you use useEffect almost all of the time, and you useLayoutEffect if the side effect  that you are performing makes an observable change to the DOM that will require the browser to paint that update that you've made.  

##### useImperativeHandle
> imperative methods scrollToTop and scrollToBottom on a ref so the parent component can call those directly.  

#### Firebase
> In the Utils Folder, you will find all files related to Firebase</br>
>> There is a firebase.upload_data.js file for Firestore db in case you want to create your own.</br>
>> The current configuration in the firebase.utils file works though.</br>

#### Credit
>  - Credit goes to **Kent C. Dodds** </br>
 You can find more information about Epic-React here:</br> 
 https://epicreact.dev/</br>
 It's worth checking out !  
