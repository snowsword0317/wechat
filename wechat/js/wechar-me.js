let me = {
    template: `
    <div class="me">
        <div class="char-top">
            <div class="char-title white">
                <div class='char-first-title'></div>
                <div class='char-first-plus'>
                    <img src="img/me/相机.png" class="plus-fr">
                </div>
            </div>
        </div>
        <div class="char-middle-b">
                <router-link class="me-detail me-bg list-space-a" to="/meDetail">
                    <div class="me-detail-img">
                        <img src="img/me/me.jpeg" class="me-detail-img-hair">
                    </div>
                    <div class="me-detail-common">
                        <div class="me-detail-common-font">小橙叶</div>
                        <div class="me-detail-common-call">
                            <div class="me-detail-common-address">微信号：orangeleaf</div>
                            <div class="me-detail-calls">
                                <img src="img/me/二维码.png" class="calls-num">
                                <img src="img/find/箭头.png" class="call-right">
                            </div>
                        </div>
                    </div>
                </router-link>

                <div class="find-list-shell me-bg list-space-b">
                    <div class="list-in">
                        <img src="img/me/支付.jpg" class="list-img">
                    </div>
                    <div class="list-font">支付</div>
                    <div class="list-right">
                        <img src="img/find/箭头.png" class="list-img-right">
                    </div>
                </div>   
                
                <div class="find-list-shell me-bg list-space-b">
                    <div class="list-in">
                        <img src="img/me/收藏.jpg" class="list-img">
                    </div>
                    <div class="list-font">收藏</div>
                    <div class="list-right">
                        <img src="img/find/箭头.png" class="list-img-right">
                    </div>
                </div>
                <div class="find-list-shell me-bg list-space-b">
                    <div class="list-in">
                        <img src="img/me/相册.jpg" class="list-img">
                    </div>
                    <div class="list-font">相册</div>
                    <div class="list-right">
                        <img src="img/find/箭头.png" class="list-img-right">
                    </div>
                </div>
                <div class="find-list-shell me-bg list-space-b">
                    <div class="list-in">
                        <img src="img/me/卡包.jpg" class="list-img">
                    </div>
                    <div class="list-font">卡包</div>
                    <div class="list-right">
                        <img src="img/find/箭头.png" class="list-img-right">
                    </div>
                </div>
                <div class="find-list-shell me-bg list-space-a">
                    <div class="list-in">
                        <img src="img/me/表情.jpg" class="list-img">
                    </div>
                    <div class="list-font">表情</div>
                    <div class="list-right">
                        <img src="img/find/箭头.png" class="list-img-right">
                    </div>
                </div>

                <div class="find-list-shell me-bg list-space-a">
                    <div class="list-in">
                        <img src="img/me/设置.jpg" class="list-img">
                    </div>
                    <div class="list-font">设置</div>
                    <div class="list-right">
                        <img src="img/find/箭头.png" class="list-img-right">
                    </div>
                </div>
        </div>
    </div>
    `
}

export {me}