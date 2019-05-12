<template>
  <div class="home">
    <vhd title="KPU UMP" description="Welcome to KPU UMP"></vhd>
    <div class="jumbotron bg-white text-center pt-5 pb-2">
      <div class="image pb-3 animated zoomIn">
        <img
          src="https://kpu.ump.ac.id/assets/img/kpu-ump.jpg"
          width="120"
          height="120"
          class="img-fluid"
          alt="Logo Kpu Mahasiswa"
        />
      </div>
      <h4 class="bold typewriter">Gunakan Hak Pilihmu!</h4>
      <hr class="m-y-md" />
    </div>
    <!-- Calon Pemilu -->
    <div class="calon">
      <div class="container">
        <div class="row">
          <div
            class="col-md-4 mb-3 animated zoomIn"
            v-for="(item, index) in 3"
            :key="index"
          >
            <div class="card" style="font-family: Arial,serif;">
              <div class="image text-center p-3">
                <img
                  class="rounded-circle"
                  :src="people(index)"
                  width="250"
                  height="auto"
                  alt="Calon"
                />
              </div>
              <div class="card-body text-center pr-4 pl-4">
                <h6 class="bold">Calon {{ index + 1 }}</h6>
                <div class="text-muted">
                  <p>
                    <i class="fa fa-thumbs-up"
                      >{{ Math.floor(Math.random() * 300) + 1 }} suara</i
                    >
                  </p>
                </div>
                <h6 class="text-blue-dark">Visi Misi</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    $(".card").hover(
      function() {
        $(this)
          .addClass("shadow-box-lg")
          .css("cursor", "pointer");
      },
      function() {
        $(this).removeClass("shadow-box-lg");
      }
    );
  },
  methods: {
    people(index) {
      let img = [
        "https://kpu.ump.ac.id/assets/img/bman.png",
        "https://kpu.ump.ac.id/assets/img/boy.png",
        "https://kpu.ump.ac.id/assets/img/worker.png"
      ];
      return img[index];
    }
  }
};
</script>

<style scoped>
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
.shadow-box-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

/* Text Writting */
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: typing 5s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
