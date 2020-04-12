let findDetail={
    template:`
        <div class="find-detail">
            <div class="friend-background">
                <div class="friend-fixed">
                    <div class="iconfont friend-back" @click="back">&#xe61c;</div>
                    <div class="friend-ca">
                        <img src="img/me/相机.png" >
                    </div>
                </div>
                <div class="friend-name">小橙叶</div>
                <img src="img/me/me.jpeg" class="friend-hair">
            </div>
            <div class="friend-big-shell">
                <div class="friend-shell friend-shell-move">
                    <div class="friend-h-n-c">
                        <div class="friend-in-hair">
                            <img src="img/hair/a-hair10.jpg">
                        </div>
                        <div class="firend-in">
                            <div class="friend-in-name">阿毛</div>
                            <div class="friend-common">每天看屎一样的代码，感觉想屎！</div>
                            <div class="firend-in-img">
                                <img src="img/hair/a-hair10.jpg">
                            </div>
                        </div>
                        
                    </div>
                    <div class="friend-date">1小时前</div>
                </div>
                <div class="friend-shell">
                    <div class="friend-h-n-c">
                        <div class="friend-in-hair">
                            <img src="img/hair/hair6.jpeg">
                        </div>
                        <div class="firend-in">
                            <div class="friend-in-name">小橙子</div>
                            <div class="friend-common">@小橙叶，老公对不起~</div>
                            <div class="firend-in-img">
                                <img src="img/hair/hair6.jpeg">
                            </div>
                        </div>
                        
                    </div>
                    <div class="friend-date">2小时前</div>
                </div>
            </div>
        </div>
    `,
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}

export {findDetail}