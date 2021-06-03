<template lang="html">
  <div class = "container">
    <div class = "row">
        <div class = "col text-left">
            <h2>Lista de archivos</h2>
            <div class="col-md-12">
                <b-table striped hover :items="files" :fields="fields">

                    <template v-slot:cell(action)='data'>
                        <b-button size='sm' variant="success" :to="{ name:'EditFiles', params:{file_id: '1'} }">
                            <template>
                                <div class="mb-0">
                                  <b-icon-file-arrow-down-fill></b-icon-file-arrow-down-fill>
                                </div>
                              </template>
                        </b-button>
                        <b-button size='sm' variant="danger">
                            <template>
                                <div class="mb-0">
                                  <b-icon-trash></b-icon-trash>
                                </div>
                              </template>
                        </b-button>
                    </template>

                </b-table>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            fields: [
                {key: 'file_id', label: 'File id'},
                {key: 'file', label: 'route'},
                {key: 'since_added', label: 'Date'},
                {key: 'size', label: 'Size'},
                {key: 'name' , label: 'Name'},
                {key: 'filetype', label: 'File type'},
                {key: 'action', label:''}
            ],
            files: [],
            form:{
                id:''
            }
        } 
    },
    methods:{
    getMyFiles(){
        const path = 'http://localhost:8000/api/files/'
        axios.get(path).then((response)=>{
            this.files = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        },
    open(){
 
        // this.$router.push({name:'EditFiles',params:{file_id:'1'}})
    }

    },
    created(){
        this.getMyFiles()
    }
}

</script>

<style>

</style>

