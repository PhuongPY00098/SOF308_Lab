<template>
<div class="container mt-4">
    <h3 class="text-center text-danger">Bảng Thành Phần Dinh Dưỡng</h3>
    <table class="table table-bordered">
      <thead class="bg-warning">
        <tr>
          <th rowspan="2" class="align-middle text-center">Thành Phần</th>
          <th colspan="2" class="text-center">Giá Trị</th>
        </tr>
        <tr>
          <th>Khối Lượng</th>
          <th>% DV*</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calories</td>
          <td>200 kcal</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Chất Béo</td>
          <td>9 g</td>
          <td>14%</td>
        </tr>
        <tr>
          <td>Chất Béo Bão Hòa</td>
          <td>4 g</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Chất Đạm</td>
          <td>8 g</td>
          <td>16%</td>
        </tr>
        <tr>
          <td>Chất Xơ</td>
          <td>5 g</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Đường</td>
          <td>12 g</td>
          <td>-</td>
        </tr>
        <tr>
          <td rowspan="2" class="align-middle">Vitamin</td>
          <td>Vitamin C</td>
          <td>25%</td>
        </tr>
        <tr>
          <td>Vitamin D</td>
          <td>10%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
name: "Lab2Bai1",
}
</script>

<style>

</style>