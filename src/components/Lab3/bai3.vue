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
      <img src="/images/banner1.jpg" alt="" />

      <!-- Sidebar thông tin cá nhân bên trái -->
      <aside class="col-4 p-2 rounded">
        <!-- <div class="col-sm-4"> -->
        <h3 class="text-info mt-2">Chuyên mục</h3>
        <ul class="list-group">
          <li
            class="list-group-item active bg-info d-flex justify-content-between align-items-center"
          >
            <a class="nav-link" href="#">Chế độ tập</a>
            <span cLass="badge bg-primary rounded-pill">12</span>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
            <span class="badge bg-primary rounded-pill">15</span>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
            <span class="badge bg-primary rounded-pill">99</span>
          </li>
        </ul>

        <div class="card mt-3">
          <div class="border-bottom bg-light">
            <h3 class="text-info m-2">Bài viết nổi bật</h3>
          </div>
          <!-- bài viết 1 -->
          <div class="d-flex align-items-start m-2">
            <img
              src="/images/spinach_300x300.jpg"
              class="rounded-circle me-3"
              alt="Rau xanh"
              style="width: 100px"
            />
            <div>
              <h6 class="fw-bold mb-1">Lợi ích khi ăn rau mỗi ngày</h6>
              <p class="text-muted mb-0">
                Tiêu thụ rau xanh hàng ngày sẽ giúp tăng cường thể lực, kiểm
                soát cân nặng, ngăn ngừa ung thư...
              </p>
            </div>
          </div>

          <!-- bài viết 2 -->
          <div class="d-flex align-items-start m-2">
            <img
              src="/images/orange_300x300.jpg"
              class="rounded-circle me-3"
              alt="Quả cam"
              style="width: 100px"
            />
            <div>
              <h6 class="fw-bold mb-1">9 tác dụng tuyệt vời của quả cam</h6>
              <p class="text-muted mb-0">
                Cam tự hào về khả năng chống lão hóa mạnh mẽ nhờ hàm lượng chất
                chống oxy hóa cao...
              </p>
            </div>
          </div>

          <!-- Bài viết 3 -->
          <div class="d-flex align-items-start m-2">
            <img
              src="/images/sesameoil_300x300.jpg"
              class="rounded-circle me-3"
              alt="Dầu dừa"
              style="width: 100px"
            />
            <div>
              <h6 class="fw-bold mb-1">10 công dụng bất ngờ từ dầu dừa</h6>
              <p class="text-muted mb-0">
                Dầu dừa như một loại kem dưỡng ẩm tự nhiên cho cơ thể, giúp việc
                sản xuất collagen...
              </p>
            </div>
          </div>
        </div>
        <br />
      </aside>

      <!-- Nội dung chính bên phải -->
      <article class="col-sm-8 p-2 rounded">
        <h2 class="text-info mt-2">Tất cả bài viết</h2>

        <!-- hình 1 -->
        <div class="row grid gap-6">
          <div class="col-6 card g-col-6 m-2">
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

          <!-- hình 2 -->
          <div class="col-5 card g-col-6 m-2">
            <h5 class="fs-6 fw-bold mt-2">
              Đây là những gì 1 giờ Tập Pilates có thể làm cho cơ thể của bạn
              <span class="text-muted"><i class="bi bi-chat-fill"></i> 8</span>
            </h5>
            <img src="/images/tap-pilates1.jpg" alt="" />
            <p class="fs-6 fw-lighter">
              Được thiết kế để xây dựng cơ bắp sản chắc, khỏe manh hơn, bãi tập
              này đã trở thành một cái tên quen thuộc nhờ có rất nhiều người nối
              tiếng theo dõi.
            </p>
          </div>

          <!-- hình 3 -->
          <div class="col-6 card g-col-6 m-2">
            <h5 class="fs-6 fw-bold mt-2">
              Tập Pilates có thể cải thiện sức khỏe tim mạch của bạn
              <span class="text-muted"><i class="bi bi-chat-fill"></i> 5</span>
            </h5>
            <img src="/images/tim-mach.jpg" alt="" />
            <p class="fs-6 fw-lighter">
              Tập Pilates không chỉ giúp bạn có một cơ thể khỏe mạnh và linh
              hoạt mà còn có nhiều lợi ích cho sức khỏe tim mạch. Bải viết này
              sẽ tìm hiểu sâu hơn về tác động tích cực của việc tập Pilates đối
              với sức khỏe tim mạch.
            </p>
          </div>

          <!-- hình 4 -->
          <div class="col-5 card g-col-6 m-2">
            <h5 class="fs-6 fw-bold mt-2">
              EAT CLEAN: Nên Và Không Nên Ăn Thực Phẩm Nào?
              <span class="text-muted"><i class="bi bi-chat-fill"></i> 3</span>
            </h5>
            <img src="/images/eat-clean.png" alt="" />
            <p class="fs-6 fw-lighter">
              Chúng ta luôn chú trong lựa chọn thực phẩm sạch và duy trì lối
              sống lành mạnh. Vậy chế độ ăn Eat clean nên và không nên ăn gì
              trong thực đơn hằng ngày để cân bằng tháp dinh dưỡng cho cơ thế?
            </p>
          </div>
        </div>

        <!-- View More Button -->
        <div class="text-center d-flex justify-content-center m-2">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous"
                ><span>&larr;</span></a
              >
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span>&rarr;</span></a
              >
            </li>
          </ul>
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
  name: "Lab3Bai3",
};
</script>

<style></style>
