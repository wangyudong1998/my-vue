import {h} from "../../lib/mini-vue.esm.js"
import {foo} from "./foo.js";

export const App = {
    render() {
        return h(
            'div',
            {
                id: 'root',
            },
            [
                h('h1', {
                    class: ['child2'],
                    onClick: () => {
                        console.log(`click---${this.msg}`)
                    }
                }, this.msg),
                h(foo, {count: 1})
            ]
        )
    },
    setup() {
        return {
            msg: 'mini-vue'
        }
    }
}