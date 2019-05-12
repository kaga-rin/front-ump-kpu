<template>
  <div class="cek">
    <vhd
      title="Lindungi Hak Pilih Anda - KPU UMP"
      description="Periksa kedaftaran anda di KPU UMP"
    ></vhd>
    <div class="jumbotron bg-white text-center pt-5 pb-2">
      <div class="image animated zoomIn">
        <img
          src="assets/img/kpu-ump.jpg"
          width="120"
          height="120"
          class="img-fluid"
          alt="Logo Kpu Mahasiswa"
        />
      </div>
    </div>
    <!-- Form Cek -->
    <div class="cek-data container" id="cek">
      <div class="row">
        <div class="col-sm-6 mx-auto mb-3">
          <div class="card search">
            <fieldset :disabled="submit">
              <form role="form" @submit.prevent="check">
                <div
                  class="card-header text-center text-light bg-blue-dark mb-0"
                >
                  <h5 class="mb-0 bold">
                    <font-awesome-icon icon="check" />Cek Data
                  </h5>
                </div>
                <div class="card-body">
                  <div class="form-group input-group mb-0">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text text-blue-dark"
                        id="basic-addon1"
                      >
                        <font-awesome-icon icon="user" />
                      </span>
                    </div>
                    <v-select
                      placeholder="NAMA"
                      class="form-control"
                      v-model="name"
                      style="height:120%"
                      label="name"
                      :filterable="false"
                      :options="options"
                      @search="onSearch"
                      v-if="suggest"
                    >
                      <template slot="no-options"
                        >Tulis nama anda dengan detail</template
                      >
                      <template slot="option" slot-scope="option">
                        <div class="d-center">{{ option.nama_p }}</div>
                      </template>
                      <template slot="selected-option" slot-scope="option">
                        <div class="selected d-center">{{ option.nama_p }}</div>
                      </template>
                    </v-select>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nama"
                      v-model="name"
                      v-else
                    />
                  </div>
                  <small class="form-text text-danger" v-if="iname"
                    >Masukkan nama anda.</small
                  >
                  <div class="form-group input-group mb-0 mt-2">
                    <div class="input-group-prepend">
                      <span class="input-group-text text-blue-dark">
                        <font-awesome-icon icon="address-book" />
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="NIM"
                      v-model="nim"
                      aria-label="NIM"
                      aria-describedby="basic-addon2"
                      required
                    />
                  </div>
                  <small class="form-text text-danger" v-if="digit"
                    >NIM harus 10 digit.</small
                  >
                  <div class="form-group input-group mb-0">
                    <label>
                      <input type="checkbox" v-model="suggest" checked />
                      Suggest Nama
                    </label>
                  </div>
                  <div class="form-group mt-2 float-left">
                    <button type="submit" class="btn text-white bg-blue-dark">
                      <font-awesome-icon
                        icon="search"
                        v-if="!submit"
                      ></font-awesome-icon>
                      <font-awesome-icon
                        icon="spinner"
                        v-else
                      ></font-awesome-icon
                      >Cari
                    </button>
                  </div>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
      <div class="row" v-if="message">
        <div class="col-sm-6 mx-auto">
          <div class="card search">
            <div class="card-header text-center text-light bg-blue-dark">
              <h5 class="mb-0 bold">
                <font-awesome-icon icon="check" />Hasil data
              </h5>
            </div>
            <div class="card-body">
              <div
                class="card-footer alert mb-0"
                :class="status ? 'alert-success' : 'alert-danger'"
              >
                <div class="message">
                  <span>
                    <font-awesome-icon icon="check-circle" />
                    {{ message }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var _ = require("lodash");
const axios = require("axios");
var base = "https://kpu.ump.ac.id/api/";
export default {
  name: "cek",
  data() {
    return {
      name: "",
      nim: "",
      options: [],
      digit: false,
      submit: false,
      message: "",
      status: "",
      iname: false,
      suggest: true
    };
  },
  created() {},
  methods: {
    check() {
      var nama;
      if (this.suggest) {
        if (!this.name.nama_p) {
          this.iname = true;
        } else {
          this.iname = false;
        }
        nama = this.name.nama_p;
      } else {
        if (!this.name) {
          this.iname = true;
        } else {
          this.iname = false;
        }
        nama = this.name;
      }

      if (this.nim && nama && !this.digit) {
        this.submit = true;
        let formData = new FormData();
        formData.append("nim", this.nim);
        formData.append("name", nama);
        axios
          .post(`${base}cek/match`, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {
            var data = response.data;
            this.status = data.status;
            if (data.status) {
              this.message = data.message;
              this.submit = false;
              this.status = true;
            } else {
              this.message = data.message;
              this.submit = false;
              this.status = false;
            }
          });
      }
    },
    onSearch(search, loading) {
      if (search.length >= 3) {
        loading(true);
        this.search(loading, search, this);
      }
    },
    search: _.debounce((loading, search, vm) => {
      fetch(`${base}cek/data/${escape(search)}`).then(res => {
        res.json().then(json => (vm.options = json));
        loading(false);
      });
    }, 1000)
  },
  watch: {
    nim() {
      if (this.nim.length < 10) {
        this.digit = true;
      } else {
        this.digit = false;
      }
      this.message = "";
    },
    name() {
      this.message = "";
    },
    suggest() {
      this.name = "";
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

/* Page Cek Data */
.cek-data .form-control {
  font-size: inherit;
}
.cek-data .form-control:focus {
  box-shadow: none;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/* This is the class name given by the Font Awesome component when icon contains 'spinner' */
.fa-spinner {
  /* Apply 'spinner' keyframes looping once every second (1s)  */
  animation: spinner 1s linear infinite;
}
</style>
