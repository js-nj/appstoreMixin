<template>
    <transition :name="transitionName" duration="0">
        <router-view class="child-view"></router-view>  
    </transition>
</template>
<style type="text/css">

.child-view {
  -webkit-transition: all 0.3s cubic-bezier(.55,0,.1,1);
  transition: all 0.3s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0 !important;
  -webkit-transform: translateX(100%) !important;
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0 !important;
  -webkit-transform: translateX(-100%) !important;
}
.hid{
  position: fixed;
}
</style>
<script>
    import style from './style.css'
    export default {
        data () {
            return {
            	transitionName: 'slide-left',
              routeToName:'',
              routeFromName:''
            }
        },
        watch: {
            '$route' (to, from) {
              // console.log('to');
              // console.log(to);
              // console.log('from');
              // console.log(from);
              // console.log('this.routeFromName:'+this.routeFromName);
              if (to.name == 'index' || (to.name == this.routeFromName)) {
                this.transitionName = 'slide-right';
              }else {
                this.transitionName = 'slide-left';
              }
              if (to.name == 'index') {
                 this.routeFromName = '';
              }else {
                this.routeFromName = from.name;
              }
              document.body.removeEventListener('touchmove', scrollCallback);
            }
        }
    }
</script>
