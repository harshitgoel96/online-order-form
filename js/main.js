$(document).ready(function(){
    var itemCnt=0;
    var dataStore=[];
    $('body').on('click','#addItmBtn',function(){
        itemCnt++;
        $('#itmTbl>tbody').append('<tr><td class="tableInpt location">'+itemCnt+'</td>'
        +'<td><input class="col-md-12 tableInpt item-dsc" ></td>'
        +'<td><input class="col-md-12 tableInpt item-qty" ></td>'
        +'<td class="tableInpt rate">0.00</td>'
        +'<td class="tableInpt amount">0.00</td>'
        +'<td><a href="#" class="itmCnf fas-green"><i class="fas fa-check"></i></a>&nbsp;<a href="#" class="itmDel fas-red"><i class="fas fa-times"></i></a>&nbsp;<a href="#" class="itmEdit" style="display:none"><i class="fas fa-edit"></i></a></td>'
        +'</tr>');
    })
    $('body').on('click','.itmCnf',function(){
        var rowId=$(this).parents("tr").find(".tableInpt.location")[0].textContent;
        var qty=$(this).parents("tr").find(".tableInpt.item-qty")[0].value;

        var qtyInt=parseInt(qty,10);
        if(typeof qtyInt !== "undefined" && !isNaN(qtyInt)){
            if(qtyInt!=qty){
                $(this).parents("tr").find(".tableInpt.item-qty")[0].value=qtyInt;
            }
            dataStore[""+rowId]={};
            dataStore[""+rowId]["item-dsc"]=$(this).parents("tr").find(".tableInpt.item-dsc")[0].value;
            dataStore[""+rowId]["item-qty"]=qtyInt;

            //validation is success
            $(this).parents("tr").find("input.tableInpt").prop('disabled', true);
            $(this).parents("tr").find(".itmCnf").hide();
            $(this).parents("tr").find(".itmDel").hide();
            $(this).parents("tr").find(".itmEdit").show();
        }
        else{
            alert("invalid number can not store");
            $(this).parents("tr").find(".tableInpt.item-qty")[0].value="";
        }
        // console.log('do alert on row num:: '+val);
        // var val=$(this).parents("tr").find(".tableInpt.location");
        // console.log(val);
       
    })
    $('body').on('click','.itmDel',function(){
        // var val=$(this).find(".tableInpt.location")[0].text();
        // alert('about to delete row '+val);
        var rowId=$(this).parents("tr").find(".tableInpt.location")[0].textContent;
        console.log(dataStore);
        $(this).parents('tr').remove();
        // console.log($(this).parents('tr'));
    })
    $('body').on('click','.itmEdit',function(){
        $(this).parents("tr").find(".itmCnf").show();
        $(this).parents("tr").find(".itmDel").show();
        $(this).parents("tr").find(".itmEdit").hide();
        $(this).parents("tr").find("input.tableInpt").prop('disabled', false);
    });
})