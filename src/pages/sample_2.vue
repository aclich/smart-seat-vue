<template>
    <div>
        <Breadcrumbs title="Sample Page"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Sample Card</h5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                    </div>
                    <div class="card-body"> 
                      <p>{{ content }}</p>
                      <b-button type="button" v-on:click="test_buttom('testtest')" variant="primary">click me</b-button>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
export default {
  data(){
    return {
      content: "Hello world test!"
    }
  },
  methods:{
    test_buttom(x){
      this.content = x
    }
  }
}
</script>