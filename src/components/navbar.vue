<template>
  <nav class="navbar navbar-1 navbar-expand-lg navbar-dark bg-blue-dark">
    <a class="navbar-brand" href="#">
      <img
        src="assets/img/kpu-ump.png"
        width="35"
        height="35"
        alt="small logo kpu"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/" exact>
            <font-awesome-icon icon="home" /> BERANDA
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/cek">
            <font-awesome-icon icon="user-check" /> CEK DATA
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost/kpu/counting">
            <font-awesome-icon icon="chart-pie" /> REAL COUNT
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <font-awesome-icon icon="chart-bar" /> MENU 1
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <font-awesome-icon icon="calendar-check" /> MENU 2
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* Custom */
.bg-blue-dark {
  background-color: #563d7c;
}
.text-blue-dark {
  color: #563d7c;
}
.bold {
  font-weight: 600;
}

/* Text Writting */
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: typing 5s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
.navbar-1 .nav-item {
  margin-left: 20px;
}
@media screen and (max-width: 600px) {
  .navbar-1 .nav-item {
    margin-left: 0;
  }
}
</style>
