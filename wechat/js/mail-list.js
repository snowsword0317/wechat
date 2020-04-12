// conarr
const conArr = [
    {
        img: "img/maillist/new.png",
        name: "新的朋友"
    },
    {
        img: "img/maillist/wetalk.png",
        name: "群聊"
    },
    {
        img: "img/maillist/title.png",
        name: "标签"
    },
    {
        img: "img/maillist/public.png",
        name: "公众号"
    }
];

const starArr = [
    {
        img: "img/hair/hair6.jpeg",
        name: "小橙子"
    }
];

const aArr = [
    {
        img: "img/hair/a-hair9.jpg",
        name: "A许默"
    },
    {
        img: "img/hair/a-hair10.jpg",
        name: "阿毛"
    },
    {
        img: "img/hair/a-hair11.jpg",
        name: "Ahuey"
    }
];
const dArr = [
    {
        img: "img/hair/hair1.jpg",
        name: "嘚瑟"
    },
    {
        img: "img/hair/hair8.jpg",
        name: "devilmaycry"
    }
];
const qArr = [
    {
        img: "img/hair/hair4.jpg",
        name: "求求你做个人吧"
    }
];
const wArr = [
    {
        img: "img/hair/hair7.jpg",
        name: "无月🌙"
    }
];
const zArr = [
    {
        img: "img/hair/hair5.jpg",
        name: "自贡毒爆虫"
    }
]
const ifontArr = [
    {
        img: "img/hair/hair2.jpg",
        name: "📕浮现"
    },
    {
        img: "img/hair/hair3.jpg",
        name: "🍃"
    }
]

// 通讯录组件
let mailList = {
    template: `
    <div class="mail-list">
        <div class="char-top">
            <div class="char-title">
                <div class='char-first-title'>微信</div>
                <div class='char-first-plus'>
                    <img src="img/maillist/添加好友.png" class="plus-fr">
                </div>
            </div>
            <div class="char-search">
                <input type='text'>
                <div class="search-font">
                    <img src="img/wecharch/放大镜.png" class="search-img">
                    <span>搜索</span>
                </div>
            </div>
        </div>
        <div class="char-middle">
            <div class='mail-new' v-for="item in conArr" >
                <div class='mail-img-shell'>
                    <img :src='item.img' class='mail-img'>
                </div>
                <div class='mail-font'>{{item.name}}</div>
            </div>
        
            <div class='mail-ps'>
                <div class='mail-starfr'>
                    <img src='img/maillist/星星.png' class='star'>
                </div>
                <div class='star-font'>星标朋友</div>
            </div>
            <router-link class='mail-new' v-for="item in starArr" :to="'/listDetail?name='+item.name+'&img='+item.img">
                <div class='mail-img-shell'>
                    <img :src='item.img' class='mail-img'>
                </div>
                <div class='mail-font'>{{item.name}}</div>
            </router-link>

            <div class='mail-ps'>
                <div class='mail-starfr-B'>A</div>
            </div>
            <router-link class='mail-new' v-for="item in aArr" :to="'/listDetail?name='+item.name+'&img='+item.img">
                <div class='mail-img-shell'>
                    <img :src='item.img' class='mail-img'>
                </div>
                <div class='mail-font'>{{item.name}}</div>
            </router-link>

            <div class='mail-ps'>
                <div class='mail-starfr-B'>D</div>
            </div>
            <router-link class='mail-new' v-for="item in dArr" :to="'/listDetail?name='+item.name+'&img='+item.img">
                <div class='mail-img-shell'>
                    <img :src='item.img' class='mail-img'>
                </div>
                <div class='mail-font'>{{item.name}}</div>
            </router-link>

            <div class='mail-ps'>
                <div class='mail-starfr-B'>Q</div>
            </div>
            <router-link class='mail-new' v-for="item in qArr" :to="'/listDetail?name='+item.name+'&img='+item.img">
                <div class='mail-img-shell'>
                    <img :src='item.img' class='mail-img'>
                </div>
                <div class='mail-font'>{{item.name}}</div>
            </router-link>

            <div class='mail-ps'>
                <div class='mail-starfr-B'>W</div>
            </div>
            <router-link class='mail-new' v-for="item in wArr" :to="'/listDetail?name='+item.name+'&img='+item.img">
                <div class='mail-img-shell'>
                    <img :src='item.img' class='mail-img'>
                </div>
                <div class='mail-font'>{{item.name}}</div>
            </router-link>

            <div class='mail-ps'>
                <div class='mail-starfr-B'>Z</div>
            </div>
            <router-link class='mail-new' v-for="item in zArr" :to="'/listDetail?name='+item.name+'&img='+item.img">
                <div class='mail-img-shell'>
                    <img :src='item.img' class='mail-img'>
                </div>
                <div class='mail-font'>{{item.name}}</div>
            </router-link>

            <div class='mail-ps'>
                <div class='mail-starfr-B'>#</div>
            </div>
            <router-link class='mail-new' v-for="item in ifontArr" :to="'/listDetail?name='+item.name+'&img='+item.img">
                <div class='mail-img-shell'>
                    <img :src='item.img' class='mail-img'>
                </div>
                <div class='mail-font'>{{item.name}}</div>
            </router-link>
        </div>
    </div>
    `,
    data() {
        return {
            conArr: conArr,
            starArr: starArr,
            aArr: aArr,
            dArr: dArr,
            qArr: qArr,
            wArr: wArr,
            zArr: zArr,
            ifontArr: ifontArr
        }
    }
}

export { mailList }