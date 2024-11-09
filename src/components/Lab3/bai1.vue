<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="/images/logo-energy-pilates.png" alt="" style="width: 150px;">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-list"></i> Bài viết</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-film"></i> Video</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-info-circle-fill"></i> Giới Thiệu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-calendar2-heart-fill"></i> Sự kiện</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person-fill"></i>Tài khoản
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                <li><a class="dropdown-item" href="#">Quên Mật khẩu</a></li>
                <li><a class="dropdown-item" href="#">Đăng kí thành viên</a></li>
              </ul>
            </li>
        </ul>
          
        <ul class="navbar-nav d-flex">
            <li class="nav-item">
                <a class="nav-link">Tiếng Việt</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Tiếng Anh</a>
            </li>
        </ul>
      </div> 
    </div>
    </nav>

  <div class="container">
    <section class="row">
      <img src="/images/banner1.jpg" alt="">
    </section>
  </div>
    </template>
    
    <script>
    export default {
        name: "Lab3Bai1",
    
    }
    </script>
    
    <style>
    
    </style>