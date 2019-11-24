// export const prePush = (vnode) => {
//     prepare = vnode;
// };
let flag = true; // true is forward, false is backward

export default {
    stack: [],
    push(vnode) {
        this.stack.push(vnode);
    },
    pop() {
        this.stack.pop();
        return this.stack[this.stack.length - 1];
    },
    find(condition) { return this.stack.some((condition)); },
    getCurrentCache() { return this.stack[this.stack.length - 1]; },
    setForward: () => flag = true,
    setBackward: () => flag = false,
    isBackward: () => !flag,
    log() {
        console.log(this.stack.map(({ tag, vusionNavKey }) => `${tag}-${vusionNavKey}`));
    },
};
