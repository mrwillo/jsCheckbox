function getChecked() {
    var idSelected=[];
    $.each($(".idToSelect:checked"),function(index,ck){
	idSelected.push($(ck).val());
    });
    $("#showDataSelected").html(idSelected);
  }

function setCkAll() {
  var checked="";
  if ($("#checkAll").is(":checked")) {
    checked="checked";
  }
  $.each($(".idToSelect"),function(index,ck){
    $(ck).prop("checked",checked);
  });
}

function checkForCheckAll() {
  if ( $(".idToSelect:checked").length === $(".idToSelect").length ) {
    $("#checkAll").prop("checked","checked");
  } else {
    $("#checkAll").prop("checked","");
  }
}
