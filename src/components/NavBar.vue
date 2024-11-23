<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- Tiêu đề Navbar -->
      <a class="navbar-brand" href="#">Nav Bar</a>
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

      <!-- Nội dung Navbar -->
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <!-- Lab 1 -->
          <li class="nav-item dropdown">
            <router-link
              to="/"
              class="nav-link dropdown-toggle"
              id="navbarDropdown1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab1
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li>
                <router-link to="/Lab1/bai1" class="dropdown-item"
                  >Bài 1</router-link
                >
              </li>
              <li>
                <router-link to="/Lab1/bai2" class="dropdown-item"
                  >Bài 2</router-link
                >
              </li>
              <li>
                <router-link to="/Lab1/bai3" class="dropdown-item"
                  >Bài 3</router-link
                >
              </li>
              <li>
                <router-link to="/Lab1/bai4" class="dropdown-item"
                  >Bài 4</router-link
                >
              </li>
            </ul>
          </li>

          <!-- Lab 2 -->
          <li class="nav-item dropdown">
            <router-link
              to="/lab2"
              class="nav-link dropdown-toggle"
              id="navbarDropdown2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab2
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
              <li>
                <router-link to="/Lab2/bai1" class="dropdown-item"
                  >Bài 1</router-link
                >
              </li>
              <li>
                <router-link to="/Lab2/bai23" class="dropdown-item"
                  >Bài 23</router-link
                >
              </li>
              <li>
                <router-link to="/Lab2/bai4" class="dropdown-item"
                  >Bài 4</router-link
                >
              </li>
            </ul>
          </li>

          <!-- Lab 3 -->
          <li class="nav-item dropdown">
            <router-link
              to="/lab3"
              class="nav-link dropdown-toggle"
              id="navbarDropdown3"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab3
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
              <li>
                <router-link to="/Lab3/bai1" class="dropdown-item"
                  >Bài 1</router-link
                >
              </li>
              <li>
                <router-link to="/Lab3/bai2" class="dropdown-item"
                  >Bài 2</router-link
                >
              </li>
              <li>
                <router-link to="/Lab3/bai3" class="dropdown-item"
                  >Bài 3</router-link
                >
              </li>
              <li>
                <router-link to="/Lab3/bai4" class="dropdown-item"
                  >Bài 4</router-link
                >
              </li>
            </ul>
          </li>

          <!-- Lab 5 -->
          <li class="nav-item dropdown">
            <router-link
              to="/lab5"
              class="nav-link dropdown-toggle"
              id="navbarDropdown3"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab5
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
              <li>
                <router-link to="/Lab5/bai1" class="dropdown-item"
                  >Bài 1</router-link
                >
              </li>
              <li>
                <router-link to="/Lab5/bai2" class="dropdown-item"
                  >Bài 2</router-link
                >
              </li>
              <li>
                <router-link to="/Lab5/bai3" class="dropdown-item"
                  >Bài 3</router-link
                >
              </li>
              <li>
                <router-link to="/Lab5/bai4" class="dropdown-item"
                  >Bài 4</router-link
                >
              </li>
            </ul>
          </li>

          <!-- Lab 6 -->
          <li class="nav-item dropdown">
            <router-link
              to="/lab6"
              class="nav-link dropdown-toggle"
              id="navbarDropdown3"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab6
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
              <li>
                <router-link to="/Lab6/bai1" class="dropdown-item"
                  >Bài 1</router-link
                >
              </li>
              <li>
                <router-link to="/Lab6/bai2" class="dropdown-item"
                  >Bài 2</router-link
                >
              </li>
              <li>
                <router-link to="/Lab6/bai3" class="dropdown-item"
                  >Bài 3</router-link
                >
              </li>
              <li>
                <router-link to="/Lab6/bai4" class="dropdown-item"
                  >Bài 4</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
