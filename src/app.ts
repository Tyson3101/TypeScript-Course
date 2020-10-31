/*
This returns a HTMLElement, which doesnt have have a .value property
While, we need a HTMLInputElement, which does
This is why we need (type assertions)
const myInput = document.getElementById("myInp"); // Returns HTMLElement
const myInput = document.getElementById("myInp") as HTMLInputElement; // Returns HTMLInputElement
const myInput = <HTMLInputElement>document.getElementById("myInp"); // Returns HTMLInputElement
We type asserted this to a HTMLInputElement

Example with Discord.js
client.channels.cache.get('12345678912') // returns a channel, which deosnt .send() method, only on textbasedchannels
client.channels.cache.get('12345678912') as TextChannel // returns a TextChannel, which has .send() method
<TextChannel>client.channels.cache.get('12345678912') // returns a TextChannel, which has .send() method
*/

const myInputHTMLElement = document.getElementById("myInp"); // Returns HTMLElement
const myInput1 = <HTMLInputElement>document.getElementById("myInp"); // Returns HTMLInputElement
const myInput2 = document.getElementById("myInp") as HTMLInputElement; // Returns HTMLInputElement
