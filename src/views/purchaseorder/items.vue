<template>
<v-card>
               <v-toolbar
        flat
      >
        <v-toolbar-title>Items</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialogbarang"
          max-width="1200px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Add Items
            </v-btn>
          </template>
          <v-card>
             <v-app-bar
      color="primary"
      dark
      dense 
    >           <span class="headline">Items</span>
                   </v-app-bar>
            <v-card-text>
              <v-container>
                <ejs-grid 
                id="Grid"
                :dataSource="itembaranglist" height='200' width='100%'
                :allowReordering = true
                :editSettings='editSettings'
                :selectionSettings='selectionOptions'
                :allowSorting='true'
                :allowMultiSorting='true'
                :allowFiltering='true'
                :filterSettings='filterOptions'
                :allowResizing='true'
                :allowPaging='true'
                :pageSettings='pageSettings'
    
                :rowSelected="rowSelectedBarang"
                >
                <e-columns>
                
                    <e-column 
                      :filter='filter'
                      fieldText=''
                      field='Kode' 
                      headerText='Kode' 
                      textAlign='Left'
                      width=180
                      >
                    </e-column>

                      <e-column
                      field='Nama'
                      headerText='Nama'
                      width=250
                      >
                    </e-column>

                    <e-column
                      :filter='filter'
                      field='Merk'  
                      headerText='Merk' 
                      width=130
                      >
                    </e-column>

                    <e-column
                      field='PartNumber1'
                      headerText='Part Number 1'
                      width=170
                      >
                    </e-column>
                  </e-columns>
                </ejs-grid>
              </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  color="blue darken-4"
                  @click="accbarang">
                  <v-icon class="mr-1">mdi-content-save</v-icon>Simpan
                </v-btn>
              </v-card-actions>
          </v-card>
        </v-dialog>
        </v-toolbar>
        <ejs-grid 
                
                :dataSource="itembarangpo" height='200' width='100%'
                :allowReordering = true
                :editSettings='editSettings'
                :selectionSettings='selectionOptions'
                :allowGrouping='true'
                :groupSettings='groupSettings'
                :allowSorting='true'
                :allowMultiSorting='true'
                :allowFiltering='true'
                :filterSettings='filterOptions'
                :allowResizing='true'
                :allowPaging='true'
                :pageSettings='pageSettings'
          
                >
                <e-columns>
                
                    <e-column 
                      :filter='filter'
                      fieldText=''
                      field='Gudang' 
                      headerText='Gudang' 
                      textAlign='Left'
                      width=160
                      >
                    </e-column>

                      <e-column
                      field='Kode'
                      headerText='Barang'
                      width=120
                      >
                    </e-column>

                    <e-column
                      :filter='filter'
                      field='Nama'  
                      headerText='Nama' 
                      width=280
                      >
                    </e-column>

                    <e-column
                      field='PartNumber1'
                      headerText='Part Number 1'
                      width=170
                      >
                    </e-column>

                    <e-column
                      field='Merk'
                      headerText='Merk'
                      width=170
                      >
                    </e-column>
                    <e-column
                      field='Kendaraan'
                      headerText='Kendaraan'
                      width=170
                      >
                    </e-column>
                    <e-column
                      field='Keterangan'
                      headerText='Keterangan'
                      width=170
                      >
                    </e-column>
                    <e-column
                      field='ETA'
                      headerText='ETA'
                      width=170
                      >
                    </e-column>
                    <e-column
                      field='Jumlah'
                      headerText='Jumlah'
                      width=170
                      >
                    </e-column>
                    <e-column
                      field='Satuan'
                      headerText='Satuan'
                      width=170
                      >
                    </e-column>
                    <e-column
                      field='HargaJual'
                      headerText='Harga'
                      width=170
                      >
                    </e-column>
                    <e-column
                      field='Diskon'
                      headerText='Diskon'
                      width=170
                      >
                    </e-column>
                    <e-column
                      field='SubTotal'
                      headerText='SubTotal'
                      width=170
                      >
                    </e-column>
                  </e-columns>
                </ejs-grid>
                </v-card>
</template>
<script>
import Vue from 'vue'
import api from '@/axios/http'
import { GridPlugin, Toolbar, Page, Aggregate, Resize, Filter, Sort, Group, Edit, CommandColumn, Reorder } from "@syncfusion/ej2-vue-grids";

Vue.use(GridPlugin);
export default {
  data() {
    return {
          dialogbarang: false,
          itembaranglist: [],
          storeSelect: [],
          itembarangpo: [],
          token : localStorage.getItem('token'),
          groupSettings: { allowReordering: true },
       selectionOptions: { type: 'Multiple'},
      //  selectionOptions: { type: 'Multiple', persistSelection: true, enableSimpleMultiRowSelection: true},
      selectionOptionsSatuan: { type: 'Single'},
      toolbarOptions: ['Search','Delete', 'Update', 'Cancel'],
      pageSettings: {pageSizes: ['2','10','All']},
      filterOptions: { type: 'Menu' },
      filter: { type : 'CheckBox' },

      editSettings: { showDeleteConfirmDialog: true, allowEditing: false, allowAdding: true, allowDeleting: true, mode: 'Normal'},
      
    }
  },
  provide:{
        grid: [Page, Toolbar, Aggregate, Resize, Filter, Sort, Group, Edit, CommandColumn, Reorder]
  },
  mounted() {
    this.getDataBarang()
  },
  methods: {
    //pilih barang
    rowSelectedBarang: function() {
       let grid = document.getElementById("Grid").ej2_instances[0];
       this.storeSelect = grid.getSelectedRecords();
       console.log(this.storeSelect)
    },
    //simpan barang dari list
    accbarang(){
      this.dialogbarang= false
      if ( this.storeSelect.length > 1 ) {
         for (let i = 0; i < this.storeSelect.length; i++) {
           const element = this.storeSelect[i];
           delete element.Dimensi
           delete element.PartNumber2
           delete element.updated_at
           delete element.created_at
           delete element.Aktif
           delete element.created_by
           delete element.StokMin
           delete element.StokMaks
           element.Keterangan = '-'
           element.Jumlah = '1',
           element.Satuan = 'PCS'
          //  itembarang.push(element);
           this.itembarangpo.push(element)
           this.itembarangpo=[...this.itembarangpo]
           console.log(this.itembarangpo)
          //  this.itembarangipo.push(this.itembarang);
            // this.itembarangipo = itembarang;
          //  localStorage.setItem("storage",JSON.stringify(itembarang));
         }
         this.$emit('SyncItemBarangPO', this.itembarangpo)
       }else{
         for (let i = 0; i < this.storeSelect.length; i++) {
           const element = this.storeSelect[i];
           delete element.Dimensi
           delete element.PartNumber2
           delete element.updated_at
           delete element.created_at
           delete element.Aktif
           delete element.created_by
           delete element.StokMin
           delete element.StokMaks
           element.Keterangan = '-'
           element.Jumlah = '1',
           element.Satuan = 'PCS'
          //  itembarang.push(element);
          this.itembarangpo=[...this.itembarangpo]
           this.itembarangpo.push(element)
          //  this.itembarangipo.push(a)
          //  this.itembarangipo.push(this.itembarang);
            // this.itembarangipo = itembarang;
          //  localStorage.setItem("storage",JSON.stringify(itembarang));
         }
         this.$emit('SyncItemBarangPO', this.itembarangpo)
       }
    },
    //ambil data Barang
        getDataBarang(){
          api.get('/barang?token='+this.token).then(
            res=>{
              console.log(res)
              this.itembaranglist = res.data
            },
            err => {
              console.log(err)
              this.$router.push('/')
              this.localStorage.removeItem('token')
            }
          )
        },
  },
}
</script>