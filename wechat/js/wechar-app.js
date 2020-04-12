import { wechar } from "./wechar-char.js";
import { mailList } from "./mail-list.js";
import { find } from "./wechar-find.js";
import { me } from "./wechar-me.js";
import { message } from "./char-message.js"
import { listDetail } from "./list-detail.js"
import { findDetail } from "./find-detail.js"
import { meDetail } from "./me-detail.js"

let router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/wechar-char",
        },
        {
            path: "/wechar-char",
            component: wechar,
        },
        {
            path: "/mail-List",
            component: mailList
        },
        {
            path: "/find",
            component: find
        },
        {
            path: "/me",
            component: me
        },
        {
            path: "/message",
            component: message
        },
        {
            path: "/listDetail",
            component: listDetail
        },
        {
            path: "/findDetail",
            component: findDetail
        },
        {
            path: "/meDetail",
            component: meDetail
        }
    ]
})

let app = new Vue({
    el: "#app",
    router: router,
})

export { app }