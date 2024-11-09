<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="/images/logo-energy-pilates.png"
          alt=""
          style="width: 150px"
        />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><i class="bi bi-list"></i> Bài viết</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="bi bi-film"></i> Video</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i class="bi bi-info-circle-fill"></i> Giới Thiệu</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i class="bi bi-calendar2-heart-fill"></i> Sự kiện</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
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
      <img src="/images/banner2.jpg" alt="" />

      <!-- Sidebar thông tin cá nhân bên trái -->
      <aside class="col-4 p-2 rounded">
        <!-- <div class="col-sm-4"> -->
        <h2 class="text-info mb-4">Về tôi</h2>
        <div class="card blog bg-light">
          <img src="/images/avatar.png" class="card-img-top" aLt=".." />
          <div class="card-body">
            <h5 class="card-title fw-bold fs-5">Giới thiệu bản thân</h5>
            <p class="fs-6 fw-lighter">
              TS. Trần Hoàng, Tổ chức Tư vấn sức khe quốc tế độc lập <br />
              Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn
              cách mình sẽ sống
            </p>
          </div>
        </div>
        <br />
      </aside>

      <!-- Nội dung chính bên phải -->
      <article class="col-8 p-2 rounded">
        <h2 class="text-info mb-4">Blog của tôi</h2>

        <div class="row">
          <!-- Main Post -->
          <div class="col-6 card mx-2">
            <h5 class="fs-6 fw-bold mt-2">
              Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
              <span class="text-muted"><i class="bi bi-chat-fill"></i> 16</span>
            </h5>
            <img src="/images/tap-piltes.jpg" alt="" />
            <p class="fs-6 fw-lighter">
              Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai
              cho người tập, Pilates giúp cơ bắp và các khớp mọc dài hơn, kéo
              giãn hơn...
            </p>
          </div>

          <!-- Related Posts -->
          <div class="col-5 card mx-2">
            <div class="media row mt-2">
              <div class="col-4">
                <img
                  src="/images/corevalue.jpg"
                  alt="Post Image"
                  style="width: 100px"
                />
              </div>
              <div class="media-body col-8">
                <h6 class="mt-0 fw-bold">Biết ơn đời, đời sẽ thương ta</h6>
                <span class="text-muted"
                  ><i class="bi bi-chat-fill"></i> 30</span
                >
              </div>
            </div>

            <div class="media row mt-2">
              <div class="col-4">
                <img
                  src="/images/orange_300x300.jpg"
                  alt="Post Image"
                  style="width: 100px"
                />
              </div>
              <div class="media-body col-8">
                <h6 class="mt-0 fw-bold">9 tác dụng tuyệt vời của quả cam</h6>
                <span class="text-muted"
                  ><i class="bi bi-chat-fill"></i> 28</span
                >
              </div>
            </div>

            <div class="media row mt-2">
              <div class="col-4">
                <img
                  src="/images/sesameoil_300x300.jpg"
                  alt="Post Image"
                  style="width: 100px"
                />
              </div>
              <div class="media-body col-8">
                <h6 class="mt-0 fw-bold">10 công dụng bất ngờ từ dầu dừa</h6>
                <span class="text-muted"
                  ><i class="bi bi-chat-fill"></i> 15</span
                >
              </div>
            </div>

            <div class="media row mt-2">
              <div class="col-4">
                <img
                  src="/images/spinach_300x300.jpg"
                  alt="Post Image"
                  style="width: 100px"
                />
              </div>
              <div class="media-body col-8">
                <h6 class="mt-0 fw-bold">Lợi ích khi ăn rau mỗi ngày</h6>
                <span class="text-muted"
                  ><i class="bi bi-chat-fill"></i> 12</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- View More Button -->
        <div class="text-center m-2">
          <button class="view-more-btn active bg-info">Xem thêm</button>
        </div>
      </article>
    </section>

    <!-- Đoạn 2 -->
    <section class="row">
      <aside class="col-sm-4 p-3 rounded">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#read"
              ><p class="text-info">Đọc nhiều</p></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#see"
              ><p class="text-info">Xem thêm</p></a
            >
          </li>
        </ul>

        <div class="tab-content">
          <div id="read" class="container tab-pane fade">
            <br />

            <div class="media row mt-2">
              <div class="col-4">
                <img
                  src="/images/corevalue.jpg"
                  alt="Post Image"
                  style="width: 100px"
                />
              </div>
              <div class="media-body col-8">
                <h6 class="mt-0 fw-bold">Biết ơn đời, đời sẽ thương ta</h6>
              </div>
            </div>

            <div class="media row mt-2">
              <div class="col-4">
                <img
                  src="/images/orange_300x300.jpg"
                  alt="Post Image"
                  style="width: 100px"
                />
              </div>
              <div class="media-body col-8">
                <h6 class="mt-0 fw-bold">9 tác dụng tuyệt vời của quả cam</h6>
              </div>
            </div>

            <div class="media row mt-2">
              <div class="col-4">
                <img
                  src="/images/sesameoil_300x300.jpg"
                  alt="Post Image"
                  style="width: 100px"
                />
              </div>
              <div class="media-body col-8">
                <h6 class="mt-0 fw-bold">10 công dụng bất ngờ từ dầu dừa</h6>
              </div>
            </div>
          </div>

          <div id="see" class="container tab-pane fade"><br /></div>
        </div>
      </aside>

      <!-- Nội dung 2 -->
      <article class="col-sm-8 p-2 rounded">
        <h2 class="text-info mb-4 text-center">VIDEO - ĐỪNG BỎ LỠ</h2>

        <!-- hình 1 -->
        <div class="row grid gap-6">
          <div class="col-6 card g-col-6 m-2">
            <img src="/images/video1.jpg" alt="" class="mt-2" />
            <h5 class="fs-6 fw-bold mt-2">Đi xa hơn để trưởng thành hơn</h5>
            <p class="fs-6 fw-lighter">
              Tuổi trẻ chỉ nghĩ dễn những chuyến đi, đợi mong một ngày được bay
              nhảy trên những phương trời mới lạ. Để rồi những cô đơn mê mải,
              tuổi trẻ ấy mới muốn môt nơi để trở về.
            </p>
          </div>

          <!-- hình 2 -->
          <div class="col-5 card g-col-6 m-2">
            <img src="/images/video2.jpg" alt="" class="mt-2" />
            <h5 class="fs-6 fw-bold mt-2">Chút tâm tư những ngày cuối năm</h5>
            <p class="fs-6 fw-lighter">
              Cuồng quay cuộc sống dẫu có vội vàng, dẫu có tấp nập đến đâu thì
              cũng chẳng nằm ngoài quy luật tự nhiên và bất biến xuân, hạ, thu,
              đông. Và rồi một năm cũ sắp trôi qua.
            </p>
          </div>

          <!-- hình 3 -->
          <div class="col-6 card g-col-6 m-2">
            <img src="/images/video3.jpg" alt="" class="mt-2" />
            <h5 class="fs-6 fw-bold mt-2">Ước gì được trở về tuổi thơ</h5>
            <p class="fs-6 fw-lighter">
              Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một ngày được bay
              nhảy trên những phương trời mới lạ. Để rồi những cô đơn mê mải,
              tuổi trẻ ấy mới muốn một nơi để trở về.
            </p>
          </div>

          <!-- hình 4 -->
          <div class="col-5 card g-col-6 m-2">
            <img src="/images/video4.jpg" alt="" class="mt-2" />
            <h5 class="fs-6 fw-bold mt-2">Ba người thầy vĩ đại</h5>
            <p class="fs-6 fw-lighter">
              Ta xem vạn vật là thầy. Tinh thần học hỏi của ta luôn rộng mở hơn
              tất cá các người. Ta học hỏi từ tất cả mọi vật, từ cành cây ngọn
              cỏ đến đám máy trên trời kia.
            </p>
          </div>
        </div>

        <!-- View More Button -->
        <div class="text-center m-2">
          <button class="view-more-btn active bg-info">Xem thêm</button>
        </div>
      </article>
    </section>

    <footer
      class="row bg-dark text-white p-3 text-center justify-content-center"
    >
      &copy; 2024 Blog của Tôi. Tất cả quyền được bảo lưu.
    </footer>
  </div>
</template>

<script>
export default {
  name: "Lab3Bai2",
};
</script>

<style></style>
