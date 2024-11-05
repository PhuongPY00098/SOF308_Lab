<template>
    <div cLass="container mt-3">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#register" >Đăng ký</a> 
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#login">Đăng nhập</a> 
            </li> 
            <li cLass="nav-item">
            </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content"> 
            <div id="register" class="container tab-pane active"><br>
                <!-- Form đăng ký -->
                <div class="col-8 px-2 mx-auto border">
                <div class="mb-3">
                    <label for="fullname">Họ và Tên</label>
                    <input type="text" class="form-control" id="fullname" placeholder="Nhập họ và tên">
                </div>
                <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Nhập email">
                </div>
                <div class="mb-3">
                    <label for="pwd">Mật Khẩu</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Nhập mật khẩu">
                </div>
                <div class="mb-3">
                    <label for="pwd">Xác Nhận Mật Khẩu</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Xác nhận mật khẩu">
                </div>

                <div class="mb-3">
                    <label for="radio">Giới Tính:</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="Male" value="option1" checked>
                        <label class="form-check-label" for="Male">Nam</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="Female" value="option2">
                        <label class="form-check-label" for="Female">Nữ</label>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="inputState">Ngôn Ngữ</label>
                    <select id="inputState" class="form-control">
                        <option selected>Tiếng Việt</option>
                        <option>English</option>
                        <option>Campuchia</option>
                    </select>
                </div>

                <div class="mb-3">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">Tôi đồng ý với các điều khoản và điều kiện</label>
                    </div>
                </div>
            
                <button type="submit" class="btn btn-primary">Đăng Ký</button>
            </div>
        </div>

            <div id="login" class="container tab-pane fade"><br>
                <!-- Form đăng nhập -->
                <div class="col-8 px-2 mx-auto border">
                    <div class="mb-3">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Nhập email">
                    </div>
                    <div class="mb-3">
                        <label for="pwd">Mật Khẩu</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Nhập mật khẩu">
                    </div>
                    <button type="submit" class="btn btn-primary">Đăng Nhập</button>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    name: "Lab2Bai23",
}
</script>

<style>

</style>