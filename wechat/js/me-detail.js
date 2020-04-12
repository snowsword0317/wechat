let meDetail={
    template:`
        <div class="me-detail-in">
            <div class="message-shell">
                <div class="iconfont msg-left" @click="back">&#xe61c;</div>
                <div class='msg-font'>个人信息</div>
            </div>
            <div class="me-detail-shell">
                <div class="find-list-shell me-bg list-space-b me-hair">
                    <div class="list-font">
                        <span>头像</span>
                        
                    </div>
                    <img src="img/me/me.jpeg" style="width:50px;height:50px;margin-top:5px;margin-left:90px;">
                    <div class="list-right">
                        <img src="img/find/箭头.png" class="list-img-right">
                    </div>
                </div>
                <div class="find-list-shell me-bg list-space-b">
                    <div class="list-font">名字</div>
                    <div style="display:inline-block;margin-top:20px;margin-left:90px;color: #bfbfbf;">小橙叶</div>
                    <div class="list-right">
                        <img src="img/find/箭头.png" class="list-img-right">
                    </div>
                </div>
                <div class="find-list-shell me-bg list-space-b">
                    <div class="list-font">微信号</div>
                    <div style="display:inline-block;margin-top:20px;margin-left:90px;color: #bfbfbf;">orangeleaf</div>
                </div>
                <div class="find-list-shell me-bg list-space-b">
                    <div class="list-font">我的二维码</div>
                    <div class="list-right">
                        <img src="img/find/箭头.png" class="list-img-right">
                    </div>
                </div>
                <div class="find-list-shell me-bg list-space-a">
                    <div class="list-font">更多</div>
                    <div class="list-right">
                        <img src="img/find/箭头.png" class="list-img-right">
                    </div>
                </div>

                <div class="find-list-shell me-bg list-space-b">
                    <div class="list-font">我的地址</div>
                    <div class="list-right">
                        <img src="img/find/箭头.png" class="list-img-right">
                    </div>
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

export {meDetail}