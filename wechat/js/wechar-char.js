let wechararr = [
    {
        img: 'img/hair/hair6.jpeg',
        name: "小橙子",
        date: "昨天",
        common: [
            {
                his:["你说你是不是个笨蛋，话都不会说"]
            },
            {
                me:["算了"]
            }
        ]
    },
    {
        img: 'img/hair/hair1.jpg',
        name: "嘚瑟",
        date: "00:13",
        common: [
            {
                his:["你确定你的想法没错，是吗？","wdnmd"]
            },
            {
                me:["没错"]
            }
        ]
    },
    {
        img: 'img/hair/hair2.jpg',
        name: "📕浮现",
        date: "23:23",
        common: [
            {
                his:["你看看你这粗鄙之语"]
            },
            {
                me:["哦"]
            }
        ]
    },
    {
        img: 'img/hair/hair3.jpg',
        name: "🍃",
        date: "22:10",
        common: [
            {
                his:["你这个人，我真是对你无语了，我太难了"]
            },
            {
                me:["哦"]
            }
        ]
    },
    {
        img: 'img/hair/hair4.jpg',
        name: "求求你做个人吧",
        date: "21:10",
        common: [
            {
                his:["可能你不适合这个行业"]
            },
            {
                me:["哦"]
            }
        ]
    },
    {
        img: 'img/hair/hair5.jpg',
        name: "自贡毒爆虫",
        date: "12:10",
        common: [
            {
                his:["黄旭东叔叔你人啊"]
            },
            {
                me:["哦"]
            }
        ]
    },
    {
        img: 'img/hair/hair7.jpg',
        name: "无月🌙",
        date: "昨天",
        common: [
            {
                his:["你为什么怀疑是我呢？"]
            },
            {
                me:["哦"]
            }
        ]
    },
    {
        img: 'img/hair/hair8.jpg',
        name: "devilmaycry",
        date: "星期三",
        common: [
            {
                his:["鬼泣5打击感真的好"]
            },
            {
                me:["哦"]
            }
        ]
    },
    {
        img: 'img/hair/a-hair10.jpg',
        name: "阿毛",
        date: "昨天",
        common: [
            {
                his:["你的作业呢"]
            },
            {
                me:["哦"]
            }
        ]
    },
]


let a= {
    template:`
        <div>111</div>
    `
}


let wechar = {
    template: `
        <div class="char">
            <div class="char-top">
                <div class="char-title">
                    <div class='char-first-title'>微信</div>
                    <div class='char-first-plus'>
                        <div class='plus-radius'>+</div>
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
                <router-link class='talk' v-for="item in arr" :to="'/message/?name='+item.name+'&img='+item.img">
                    <div class='talk-img-hair'>
                        <img :src='item.img'>
                    </div>
                    <div class='talk-all'>
                        <div class='talk-name'>{{item.name}}</div>
                        <div class='talk-date'>{{item.date}}</div>
                        <div class='talk-common'>{{item.common[0].his[0]}}</div>
                        <div class='talk-stop'></div>
                    </div>
                </router-link>
            </div>
        </div>
    `,
    data() {
        return {
            arr: wechararr
        }
    }
};

export { wechar }