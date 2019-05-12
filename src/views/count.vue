<template>
  <div class="count">
    <vhd
      title="Perhitungan Real Count - KPU UMP"
      description="Hitungan suara cepat online KPU UMP"
    ></vhd>
    <div class="jumbotron bg-white text-center pt-5 pb-2">
      <div class="image animated zoomIn">
        <img
          src="https://kpu.ump.ac.id/assets/img/kpu-ump.jpg"
          width="120"
          height="120"
          class="img-fluid"
          alt="Logo Kpu Mahasiswa"
        />
      </div>
      <h3 class="bold typewriter pt-4">Real Count</h3>
      <hr class="m-y-md" />
    </div>
    <!-- Cart -->
    <div class="cart" id="counting">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 mx-auto p-0 my-0">
            <canvas id="myChart" height="auto" width="auto"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "count",
  mounted() {
    var ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [30, 30, 40],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"]
          }
        ],
        labels: ["Paslon 1", "Paslon 2", "Paslon 3"]
      },
      options: {
        responsive: true,
        legend: {
          position: "bottom"
        },
        title: {
          display: false,
          text: ""
        },
        animation: {
          animateScale: true,
          animateRotate: true
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var labels = data.labels[tooltipItem.datasetIndex];
              var total = dataset.data.reduce((previousValue, currentValue) => {
                return previousValue + currentValue;
              });
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = Math.floor((currentValue / total) * 100 + 0.5);
              return labels + ": " + percentage + "%";
            }
          }
        }
      }
    });
  }
};
</script>

<style scoped>
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

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>
