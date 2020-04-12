let message={
    template:`
        <div class="message">
            <div class="message-shell">
                <div class="iconfont msg-left" @click="back">&#xe61c;</div>
                <div class='msg-font'>{{$route.query.name}}</div>
                <div class="iconfont msg-more">&#xe748;</div>
            </div>
            <div class="say">
                <div class="you">
                    <img :src="$route.query.img" alt="" class="say-img">
                    <p>你都不会哄我的吗？</p>
                    <div class="triangle"></div>
                </div>
                <div class="you">
                    <img :src="$route.query.img" alt="" class="say-img">
                    <p>问你呢？</p>
                    <div class="triangle"></div>
                </div>
                <div class="me-msg">
                    <p>没有啊</p>
                    <div class="triangle"></div>
                    <img src="img/me/me.jpeg" alt="" class="say-img">
                </div>
                <div class="you">
                    <img :src="$route.query.img" alt="" class="say-img">
                    <p>还说没有</p>
                    <div class="triangle"></div>
                </div>
                <div class="me-msg">
                    <p>。。。</p>
                    <div class="triangle"></div>
                    <img src="img/me/me.jpeg" alt="" class="say-img">
                </div>
                <div class="you">
                    <img :src="$route.query.img" alt="" class="say-img">
                    <p>你说你是不是个笨蛋，话都不会说</p>
                    <div class="triangle"></div>
                </div>
            </div>
            <div class="send">
                <div class="iconfont msg-dis play">&#xe68d;</div>
                <div class="msg-dis send-input msg-nos"><input type="text"></div>
                <div class="iconfont msg-dis biaoqing msg-nos">&#xe603;</div>
                <div class="iconfont msg-dis msg-in-more msg-nos">&#xe616;</div>
            </div>
        </div>
    `,
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}

export {message}