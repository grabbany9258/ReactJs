<?php include('./constant/layout/head.php');?>
<?php include('./constant/layout/header.php');?>

<?php include('./constant/layout/sidebar.php');?> 
<?php include('./constant/connect.php');



  $sql="SELECT * from tbl_client where  id='".$_GET['id']."'";
  $result=$connect->query($sql)->fetch_assoc();



    ?> 
 
        <div class="page-wrapper">
            
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-primary">Edit Client Management</h3> </div>
                <div class="col-md-7 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li class="breadcrumb-item active">Client Brand</li>
                    </ol>
                </div>
            </div>
            
            
            <div class="container-fluid">
                
                
                
                
                <div class="row">
                    <div class="col-lg-8" style="    margin-left: 10%;">
                        <div class="card">
                            <div class="card-title">
                               
                            </div>
                            <div id="add-brand-messages"></div>
                            <div class="card-body">
                                <div class="input-states">
                                    <form class="form-horizontal" method="POST"  id="submitBrandForm" action="php_action/editcustomer.php?id=<?php echo $_GET['id'];?>" enctype="multipart/form-data">

                                   <input type="hidden" name="currnt_date" class="form-control">

                                       <div class="form-group">
                                            <div class="row">
                                                <label class="col-sm-3 control-label"> Name</label>
                                                <div class="col-sm-9">
                                                  <input type="text" class="form-control" id="name" placeholder=" Name" name="name" autocomplete="off" required="" value="<?php  echo$result['name'];?>" />
                                                </div>
                                            </div>
                                        </div>


                                <div class="form-group">
                                    <div class="row">
                                        <label class="col-sm-3 control-label">Department</label>
                                        <div class="col-sm-9">
                                            <select class="form-control" id="brandName" name="department" value="<?php  echo$result['department'];?>">
                                            <option value="" disabled selected>Select One</option> 
                                                <option value="Marketing Department">Marketing Department</option>
                                                <option value="Operations Department">Operations Department</option>
                                                <option value="Finance Department">Finance Department</option>
                                                <option value="Sales Department">Sales Department</option>
                                                <option value="HRM Department">HRM Department</option>
                                                <option value="IT Department">IT Department</option>
                                                <option value="Production Department">Production Department</option>                             
                                            </select>
                                        </div>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <div class="row">
                                        <label class="col-sm-3 control-label">Mobile No
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="" placeholder="" name="mob_no" autocomplete="off" required="" value="<?php  echo $result['mob_no'];?>"/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <label class="col-sm-3 control-label">Reffering</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="" placeholder="" name="reffering" autocomplete="off" required="" value="<?php  echo $result['reffering'];?>" />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <label class="col-sm-3 control-label">Floor Nb</label>
                                        <div class="col-sm-9">
                                            <textarea type="text" class="form-control" id="" placeholder="" name="floor_nb" autocomplete="off" required="off"  style="height: 40px;"><?php echo $result['floor_nb'];?></textarea>
                                        </div>
                                    </div>
                                </div>

                                        <button type="submit" name="create" id="createBrandBtn" class="btn btn-primary btn-flat m-b-30 m-t-30">Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
                
               


<?php include('./constant/layout/footer.php');?>



                                                                                                    <input type="text" class="form-control" id="" placeholder="" name="reffering" autocomplete="off" required="" value="<?php  echo$result['reffering'];?>" />

                                                                                                    <textarea type="text" class="form-control" id="" placeholder="" name="address" autocomplete="off" required="" style="height: 150px;"><?php  echo$result['address'];?></textarea