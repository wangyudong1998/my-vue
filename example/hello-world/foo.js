import {h} from "../../lib/mini-vue.esm.js";

export const foo = {
    setup(props) {
        console.log(props.count);
    },
    render() {
        return h('div',null,'counter:'+this.count)
    }
}