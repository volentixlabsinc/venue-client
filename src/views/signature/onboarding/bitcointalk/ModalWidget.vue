<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
            <div class="modal-container">

                <div class="modal-header" v-if="hdr">
                <slot name="header"></slot>
                </div>

                <div class="modal-body">
                <slot name="body">
                    default body
                </slot>
                </div>

                <div class="modal-footer">
                <slot name="footer">
                    <!-- default footer -->
                    <button class="btn btn-small btn-primary modal-default-button" @click="$emit('close')">
                    OK
                    </button>
                </slot>
                </div>
            </div>
            </div>
        </div>
  </transition>
</template>

<script>
export default {
  props: { hdr : Boolean }, //defaults to false
  data() {
    return ({
    })
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
}

.modal-container {
  width: 100%;
  height: 500px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 253, 253, 0.9) !important;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}


/*
.modal-default-button {
  float: right;
}
*/
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-body{
  height: 80%;
}
@media only screen and (min-width: 800px) {
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  width: 60%;
}

.modal-container {
  width: 100%;
  padding: 20px 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
}
</style>
