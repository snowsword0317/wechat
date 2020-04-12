let listDetail={
    template:`
        <div class="list-detail">
            <div class="white">
                <div class="iconfont msg-left" @click="back">&#xe61c;</div>
                <div class='msg-font'></div>
                <div class="iconfont msg-more">&#xe748;</div>
            </div>
            <div class="list-detail-common">
                <div class="list-detail-img">
                    <img :src="$route.query.img">
                </div>
                <div class="list-detail-ps">
                    <div class="name1">{{$route.query.name}}</div>
                    <div class="name2">昵称：{{$route.query.name}}</div>
                    <div class="name3">微信号：{{$route.query.name}}</div>
                    <div class="adress">地区：中国</div>
                </div>
            </div>
            <div class="find-list-shell me-bg list-space-a">
                <div class="list-font">设置备注和标签</div>
                <div class="list-right">
                    <img src="img/find/箭头.png" class="list-img-right">
                </div>
            </div>

            <div class="find-list-shell me-bg list-space-b">
                <div class="list-font">朋友圈</div>
                <div class="list-right">
                    <img src="img/find/箭头.png" class="list-img-right">
                </div>
            </div>
            <div class="find-list-shell me-bg list-space-a">
                <div class="list-font">更多信息</div>
                <div class="list-right">
                    <img src="img/find/箭头.png" class="list-img-right">
                </div>
            </div>

            <div class="find-list-shell me-bg list-space-b">
                <div class="list-font detail-font">
                    发起信息
                </div>
            </div>
            <div class="find-list-shell me-bg list-space-b">
                <div class="list-font detail-font">音视频通话</div>
            </div>
        </div>
    `,
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}

export {listDetail}