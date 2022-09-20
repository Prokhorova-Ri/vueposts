<template>
  <div>
    <h1>Добро пожаловать</h1>
    <div class="main">
      <h3>Данный сайт разработан в целях изучения фреймворка Vue CLI</h3>
      <br />
      <p>Справа на панели навигации находятся 2 кнопки:</p>
      <ul>
        <li>
          кнопка "Посты" - открывает страницу, где отображены и использованы
          различные инструменты по работе с данным фрэймворком.
        </li>
        <br />
        <li>
          кнопка "Инфо" - открывает страницу с информацией об использованных в
          приложении инструметах.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1 {
  margin-top: 50px;
}
.main {
  align-items: center;
  border-radius: 20px;
  margin-top: 50px;
  color: rgb(175, 175, 175);
  font-size: 20px;
}
</style>
