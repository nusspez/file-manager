<template lang="html">
  <div class="container">
    <div class="row">
        <div class="col text-left">
            <h2>decargar Archivo</h2>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <form @onSubmit="onSubmit">
                        <div class="form-group row">
                            <label for="file" class="col-sm-2 col-form-label">file</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="file" name="file" id="" class="form-control" v-model.trim="form.file">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="file" class="col-sm-2 col-form-label">name file</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="name" name="name" id="" class="form-control" v-model.trim="form.name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="file" class="col-sm-2 col-form-label">type file</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="name" name="filetype" id="" class="form-control" v-model.trim="form.filetype">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="file" class="col-sm-2 col-form-label">date file</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="since_added" name="filetype" id="" class="form-control" v-model.trim="form.since_added">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="file" class="col-sm-2 col-form-label">size file</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="since_added" name="size" id="" class="form-control" v-model.trim="form.size">
                            </div>
                        </div>

                        <div class="rows">
                            <div class="col text-left">
                                <b-button type="submit" variant="primary">Editar</b-button>
                                <b-button class="btn-large-space" type="submit" variant="danger" :to="{name:'Fileslist'}">Cancelar</b-button>
                            </div>
                        </div>
                    </form>
                    <div class="row">
                        <div class="col-md-12">
                            <b-button type="submit" variant="success" @click="redirect()">Descargar</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
export default {
    data(){
        return{
            file_id:this.$route.params.file_id,
            form:{
                file:'',
                name: '',
                filetype:'',
                since_added:'',
                size:''
            }
        }
    },
    methods:{
        onSubmit(evt){
            evt.preventDefault();

            const path = `http://localhost:8000/api/files/${this.file_id}/`
            axios.put(path,this.form).then((response) => {
                this.form.file = response.data.file
                this.form.name = response.data.name
                this.form.filetype = response.data.filetype
                this.form.since_added = response.data.since_added
                this.form.size = response.data.size

            })
            .catch((error) => {
                log(error)
            })            
        },
        getBook (){
            const path = `http://localhost:8000/api/files/${this.file_id}/`
            axios.get(path).then((response) => {
                this.form.file = response.data.file
                this.form.name = response.data.name
                this.form.filetype = response.data.filetype
                this.form.since_added = response.data.since_added
                this.form.size = response.data.size + 'MB'

            })
            .catch((error) => {
                log(error)
            })
        },
        redirect (){
            const path = `http://localhost:8000/api/files/${this.file_id}/`
            axios.get(path).then((response) => {
                this.form.file = response.data.file

            })
            .catch((error) => {
                log(error)
            })
            // alert(this.form.file)
            window.location.href = this.form.file
        }
    },
    created(){
        this.getBook()
    }

}
</script>

<style>

</style>